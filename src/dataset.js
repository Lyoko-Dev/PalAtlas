import { pals } from "./data.js";

function parseCsv(text) {
  const rows = [];
  let row = [], cell = "", quoted = false;
  for (const char of text.replace(/^\uFEFF/, "")) {
    if (char === '"') quoted = !quoted;
    else if (char === "," && !quoted) { row.push(cell); cell = ""; }
    else if ((char === "\n" || char === "\r") && !quoted) { if (cell || row.length) { row.push(cell); rows.push(row); row = []; cell = ""; } }
    else cell += char;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const [headers, ...values] = rows;
  return values.map((valuesRow) => Object.fromEntries(headers.map((header, index) => [header, valuesRow[index] ?? ""])));
}

export function catalogFromSummary(csv, baseCatalog = pals) {
  const known = new Map(baseCatalog.map((pal) => [pal.name.toLowerCase(), pal]));
  return parseCsv(csv).map((row) => known.get(row.child_name.toLowerCase()) ?? {
    id: row.child_id.replace(":", "-"), name: row.child_name, number: Number.parseInt(row.child_dex_no, 10) || null,
    types: [], breedingPower: null, habitat: "Desconocido", passives: [], comboCount: Number(row.combo_count)
  });
}

export function breedingCombosFromCsv(csv) { return parseCsv(csv); }

export async function loadVersionedDataset(baseUrl = "/data/") {
  const [summaryResponse, combosResponse] = await Promise.all([
    fetch(`${baseUrl}children_summary.csv`), fetch(`${baseUrl}breeding_combos.csv`)
  ]);
  if (!summaryResponse.ok || !combosResponse.ok) throw new Error("No se pudo cargar el dataset de Palworld");
  const [summary, combos] = await Promise.all([summaryResponse.text(), combosResponse.text()]);
  return { pals: catalogFromSummary(summary), combos: breedingCombosFromCsv(combos), source: "Palworld Breeding Reference · snapshot 2026-07-16" };
}

