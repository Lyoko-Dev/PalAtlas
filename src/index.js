/** Punto de entrada de PalAtlas. */
export const version = "0.2.0";
export { pals, materials, recipes, levelMilestones, mapLocations, technologies, sessionTasks } from "./data.js";
export { searchPals, togglePal, getInheritedPassives, analyzePassiveInheritance, calculateBreeding, findBreedingPairs, exportProgress, importProgress } from "./tools.js";
export { officialNewsSources, normalizeNewsItem, mergeNews } from "./news.js";

export { loadVersionedDataset, catalogFromSummary, breedingCombosFromCsv } from "./dataset.js";


