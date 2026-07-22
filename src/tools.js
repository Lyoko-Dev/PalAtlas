import { pals } from "./data.js";

export function searchPals(query = "", list = pals) {
  const normalized = query.trim().toLocaleLowerCase();
  return list.filter((pal) => !normalized || pal.name.toLocaleLowerCase().includes(normalized) || String(pal.number) === normalized);
}

export function togglePal(checklist = {}, palId) {
  return { ...checklist, [palId]: !Boolean(checklist[palId]) };
}

/** Devuelve el conjunto de pasivas que cualquiera de los padres puede transmitir. */
export function getInheritedPassives(parentA, parentB) {
  return [...new Set([...(parentA.passives ?? []), ...(parentB.passives ?? [])])];
}

/**
 * Resume la cría. Las pasivas son posibilidades, no una predicción determinista:
 * el juego puede seleccionar un subconjunto del pool y admite hasta cuatro.
 */
export function analyzePassiveInheritance(parentA, parentB, desiredPassives = []) {
  const pool = getInheritedPassives(parentA, parentB);
  const desired = [...new Set(desiredPassives)];
  const available = desired.filter((passive) => pool.includes(passive));
  const missing = desired.filter((passive) => !pool.includes(passive));
  return {
    pool,
    available,
    missing,
    maxSlots: 4,
    allDesiredAvailable: missing.length === 0,
    risk: pool.length <= 2 ? "baja" : pool.length <= 4 ? "media" : "alta"
  };
}

export function calculateBreeding(parentA, parentB, options = {}) {
  if (!parentA || !parentB) throw new Error("Se necesitan dos padres");
  const key = [parentA.id, parentB.id].sort().join("+");
  const overrideId = options.overrides?.[key];
  const passiveInheritance = analyzePassiveInheritance(parentA, parentB, options.desiredPassives ?? []);
  if (overrideId) return { child: pals.find((pal) => pal.id === overrideId) ?? null, targetPower: null, special: true, passiveInheritance };
  const targetPower = Math.floor((parentA.breedingPower + parentB.breedingPower + 1) / 2);
  const child = (options.pals ?? pals).filter((pal) => pal.id !== parentA.id && pal.id !== parentB.id)
    .sort((a, b) => Math.abs(a.breedingPower - targetPower) - Math.abs(b.breedingPower - targetPower))[0] ?? null;
  return { child, targetPower, special: false, passiveInheritance };
}

export function findBreedingPairs(target, options = {}) {
  const list = options.pals ?? pals;
  return list.flatMap((a, index) => list.slice(index).flatMap((b) => {
    const result = calculateBreeding(a, b, options);
    return result.child?.id === target.id ? [{ parentA: a, parentB: b, targetPower: result.targetPower, passiveInheritance: result.passiveInheritance }] : [];
  }));
}

export function exportProgress(progress = {}) {
  return JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), ...progress }, null, 2);
}

export function importProgress(serialized) {
  const data = typeof serialized === "string" ? JSON.parse(serialized) : serialized;
  if (!data || typeof data !== "object" || data.version !== 1) throw new Error("Archivo de progreso no compatible");
  return data;
}


