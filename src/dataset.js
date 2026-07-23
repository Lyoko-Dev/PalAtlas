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

export function catalogFromSummary(csv, baseCatalog = pals, details = []) {
  const known = new Map(baseCatalog.map((pal) => [pal.name.toLowerCase(), pal]));
  const enriched = new Map(details.map((pal) => [String(pal.name).toLowerCase(), pal]));
  return parseCsv(csv).map((row) => {
    const detail = enriched.get(row.child_name.toLowerCase()) || {};
    const base = known.get(row.child_name.toLowerCase());
    return { ...base, ...detail, id: base?.id || row.child_id.replace(":", "-"), name: row.child_name, number: Number.parseInt(row.child_dex_no, 10) || detail.number || null, types: detail.types || base?.types || [], breedingPower: base?.breedingPower || null, habitat: base?.habitat || "Desconocido", passives: base?.passives || [], comboCount: Number(row.combo_count) || 0 };
  });
}

export function breedingCombosFromCsv(csv) { return parseCsv(csv); }

export async function loadVersionedDataset(baseUrl = "/data/") {
  const [summaryResponse, combosResponse, detailsResponse] = await Promise.all([
    fetch(`${baseUrl}children_summary.csv`), fetch(`${baseUrl}breeding_combos.csv`), fetch(`${baseUrl}pal_details.json`)
  ]);
  if (!summaryResponse.ok || !combosResponse.ok || !detailsResponse.ok) throw new Error("No se pudo cargar el dataset local de PalAtlas");
  const [summary, combos, details] = await Promise.all([summaryResponse.text(), combosResponse.text(), detailsResponse.json()]);
  return { pals: catalogFromSummary(summary, pals, details), combos: breedingCombosFromCsv(combos), source: "PalAtlas local dataset" };
}
