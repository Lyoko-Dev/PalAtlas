import test from "node:test";
import assert from "node:assert/strict";
import { csvToObjects } from "../src/storage.js";
import { version, pals, materials, calculateBreeding, searchPals, togglePal, mergeNews, officialNewsSources } from "../src/index.js";

test("expone la versión del proyecto", () => assert.equal(version, "0.2.0"));
test("incluye datos iniciales de Paldex y materiales", () => {
  assert.ok(pals.length > 0);
  assert.ok(materials.some((material) => material.id === "wood"));
});
test("busca Pals por nombre o número", () => {
  assert.equal(searchPals("lamball")[0].id, "lamball");
  assert.equal(searchPals("100")[0].id, "anubis");
});
test("calcula el hijo y las pasivas disponibles", () => {
  const result = calculateBreeding(pals.find((pal) => pal.id === "lamball"), pals.find((pal) => pal.id === "cattiva"), { desiredPassives: ["Courageous", "Runner"] });
  assert.equal(result.targetPower, 1465);
  assert.deepEqual(result.passiveInheritance.pool, ["Courageous", "Workaholic"]);
  assert.deepEqual(result.passiveInheritance.missing, ["Runner"]);
});
test("cambia el estado de la checklist sin mutar el original", () => {
  const initial = { lamball: true };
  const next = togglePal(initial, "lamball");
  assert.equal(next.lamball, false);
  assert.equal(initial.lamball, true);
});
test("expone fuentes oficiales y normaliza noticias", () => {
  assert.ok(officialNewsSources.some((source) => source.handle === "@Palworld_EN"));
  const news = mergeNews([{ id: "1", title: " Actualización ", publishedAt: "2026-01-01", url: "https://example.com" }]);
  assert.equal(news[0].title, "Actualización");
});

test("parsea CSV simple", () => {
  const rows = csvToObjects("name,level" + String.fromCharCode(10) + "Lamball,1");
  assert.equal(rows[0].name, "Lamball");
  assert.equal(rows[0].level, "1");
});