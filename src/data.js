/** Datos iniciales y editables de PalAtlas. */
export const pals = [
  { id: "lamball", number: 1, name: "Lamball", types: ["Neutral"], breedingPower: 1470, habitat: "Pradera", passives: ["Courageous"] },
  { id: "cattiva", number: 2, name: "Cattiva", types: ["Neutral"], breedingPower: 1460, habitat: "Pradera", passives: ["Workaholic"] },
  { id: "chikipi", number: 3, name: "Chikipi", types: ["Neutral"], breedingPower: 1500, habitat: "Pradera", passives: [] },
  { id: "foxparks", number: 9, name: "Foxparks", types: ["Fuego"], breedingPower: 1450, habitat: "Bosque", passives: ["Brave"] },
  { id: "pengullet", number: 10, name: "Pengullet", types: ["Agua", "Hielo"], breedingPower: 1440, habitat: "Costa", passives: ["Sadist"] },
  { id: "lifmunk", number: 7, name: "Lifmunk", types: ["Planta"], breedingPower: 1420, habitat: "Bosque", passives: ["Botanical Whisper"] },
  { id: "sparkit", number: 8, name: "Sparkit", types: ["Eléctrico"], breedingPower: 1410, habitat: "Pradera", passives: ["Runner"] },
  { id: "daedream", number: 19, name: "Daedream", types: ["Oscuridad"], breedingPower: 1300, habitat: "Noche", passives: ["Swift"] },
  { id: "anubis", number: 100, name: "Anubis", types: ["Tierra"], breedingPower: 600, habitat: "Jefe", passives: ["Earth Emperor", "Legend"] },
  { id: "jetragon", number: 111, name: "Jetragon", types: ["Dragón"], breedingPower: 10, habitat: "Jefe", passives: ["Legend", "Divine Dragon"] }
];

export const materials = [
  { id: "wood", name: "Madera", category: "Básico", locations: ["Suelo", "Árboles"] },
  { id: "stone", name: "Piedra", category: "Básico", locations: ["Suelo", "Canteras"] },
  { id: "fiber", name: "Fibra", category: "Básico", locations: ["Hierba", "Trituradora"] },
  { id: "pal-sphere", name: "Esfera Pal", category: "Captura", locations: ["Mesa de trabajo"] },
  { id: "paldium-fragment", name: "Fragmento de Paldium", category: "Mineral", locations: ["Río", "Mineral"] },
  { id: "leather", name: "Cuero", category: "Drop", locations: ["Pals salvajes"] },
  { id: "ancient-civilization-parts", name: "Partes de civilización antigua", category: "Antiguo", locations: ["Jefes", "Cofres"] }
];

export const levelMilestones = [
  { level: 1, title: "Supervivencia", unlocks: "Herramientas y banco de trabajo primitivo" },
  { level: 6, title: "Captura avanzada", unlocks: "Esfera Pal y plantación de bayas" },
  { level: 12, title: "Cría", unlocks: "Granja de cría y tarta" },
  { level: 19, title: "Metal", unlocks: "Horno mejorado y equipo de metal" },
  { level: 32, title: "Automatización", unlocks: "Líneas de producción" },
  { level: 50, title: "Final de progreso", unlocks: "Tecnología y equipo de alto nivel" }
];

export const mapLocations = [
  { id: "plateau", name: "Meseta de los comienzos", category: "Zona", minLevel: 1, x: 22, y: 63, description: "Zona segura para conseguir materiales básicos y tus primeros Pals." },
  { id: "tower-rayne", name: "Torre del Sindicato de Rayne", category: "Torre", minLevel: 10, x: 39, y: 42, description: "Primer gran desafío de la historia y punto de referencia para tu progreso." },
  { id: "small-settlement", name: "Pequeño asentamiento", category: "Poblado", minLevel: 5, x: 53, y: 68, description: "Comercio, misiones y acceso a servicios para preparar la siguiente expedición." },
  { id: "desolate-church", name: "Iglesia desolada", category: "Mazmorra", minLevel: 8, x: 67, y: 36, description: "Explora sus alrededores para encontrar cofres y recursos antiguos." },
  { id: "dungeon-cave", name: "Caverna de las colinas", category: "Mazmorra", minLevel: 12, x: 78, y: 60, description: "Una buena primera mazmorra para probar tu equipo y buscar planos." },
  { id: "volcano", name: "Monte Obsidiana", category: "Zona", minLevel: 25, x: 70, y: 20, description: "Región peligrosa con calor extremo, mineral raro y Pals de fuego." },
  { id: "ice-mountain", name: "Montañas de Astral", category: "Zona", minLevel: 35, x: 28, y: 18, description: "Zona helada de alto nivel: lleva protección térmica y buen equipo." },
  { id: "tower-leader", name: "Torre de la Alianza", category: "Torre", minLevel: 40, x: 50, y: 24, description: "Desafío avanzado reservado para una base y un grupo bien preparados." }
];
export const recipes = [
  { id: "pal-sphere", name: "Esfera Pal", output: 1, ingredients: [{ materialId: "paldium-fragment", amount: 1 }, { materialId: "wood", amount: 3 }, { materialId: "stone", amount: 3 }] },
  { id: "cake", name: "Tarta", output: 1, ingredients: [{ materialId: "flour", amount: 5 }, { materialId: "red-berries", amount: 8 }, { materialId: "milk", amount: 7 }, { materialId: "egg", amount: 8 }, { materialId: "honey", amount: 2 }] }
];


export const technologies = [
  { id: "primitive-tools", level: 1, name: "Herramientas primitivas", category: "Supervivencia", unlocks: "Hacha, pico y banco de trabajo" },
  { id: "pal-sphere", level: 2, name: "Esfera Pal", category: "Captura", unlocks: "Captura básica de Pals" },
  { id: "berry-plantation", level: 5, name: "Plantación de bayas", category: "Base", unlocks: "Producción automática de comida" },
  { id: "breeding-farm", level: 19, name: "Granja de cría", category: "Cría", unlocks: "Cría y obtención de huevos" },
  { id: "metal-tools", level: 20, name: "Herramientas de metal", category: "Producción", unlocks: "Minería y fabricación mejoradas" },
  { id: "production-line", level: 32, name: "Línea de producción", category: "Automatización", unlocks: "Producción industrial" },
  { id: "legendary-tech", level: 40, name: "Tecnología avanzada", category: "Final", unlocks: "Equipo de final de juego" }
];
export const sessionTasks = [
  { id: "capture-pals", title: "Capturar 3 Pals", category: "Colección" },
  { id: "visit-location", title: "Visitar una ubicación del mapa", category: "Exploración" },
  { id: "craft-recipe", title: "Preparar una receta", category: "Crafting" }
];