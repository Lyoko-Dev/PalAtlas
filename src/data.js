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
  { id: "plateau", name: "Meseta de los comienzos", region: "Pradera de inicio", category: "Zona", minLevel: 1, x: 18, y: 62, description: "Zona de inicio con madera, piedra, Paldium y Pals comunes." },
  { id: "small-settlement", name: "Pequeño asentamiento", region: "Pradera de inicio", category: "Poblado", minLevel: 5, x: 31, y: 55, description: "Comercio, misiones y suministros para comenzar la expedición." },
  { id: "rayne-tower", name: "Torre del Sindicato de Rayne", region: "Pradera de inicio", category: "Torre", minLevel: 10, x: 39, y: 43, description: "Primer gran desafío de la historia y referencia del progreso." },
  { id: "desolate-church", name: "Iglesia desolada", region: "Pradera de inicio", category: "Mazmorra", minLevel: 8, x: 29, y: 34, description: "Ruinas con cofres, recursos antiguos y rutas hacia el norte." },
  { id: "sealed-swordmaster", name: "Santuario del maestro de espada", region: "Bosque húmedo", category: "Santuario", minLevel: 14, x: 49, y: 31, description: "Santuario sellado entre bosques y acantilados." },
  { id: "cave-hills", name: "Caverna de las colinas", region: "Bosque húmedo", category: "Mazmorra", minLevel: 12, x: 52, y: 57, description: "Mazmorra de nivel medio con planos y mineral." },
  { id: "volcano", name: "Monte Obsidiana", region: "Volcán", category: "Zona", minLevel: 25, x: 76, y: 28, description: "Región de calor extremo, mineral raro y Pals de fuego." },
  { id: "eternal-pyre", name: "Torre de la Pira Eterna", region: "Volcán", category: "Torre", minLevel: 30, x: 68, y: 18, description: "Torre de alto nivel en las laderas volcánicas." },
  { id: "fishermans-point", name: "Punta del pescador", region: "Costa", category: "Poblado", minLevel: 18, x: 63, y: 68, description: "Costa con agua, pesca y rutas marítimas." },
  { id: "ice-mountain", name: "Montañas de Astral", region: "Tundra", category: "Zona", minLevel: 35, x: 27, y: 17, description: "Zona helada de alto nivel: prepara protección térmica." },
  { id: "free-pal-alliance", name: "Torre de la Alianza Libre", region: "Tundra", category: "Torre", minLevel: 40, x: 42, y: 16, description: "Desafío avanzado en las montañas del norte." },
  { id: "dunes", name: "Desierto aislado", region: "Desierto", category: "Zona", minLevel: 28, x: 79, y: 55, description: "Dunas abiertas con ruinas, cofres y Pals de tierra." },
  { id: "dune-shelter", name: "Refugio de dunas", region: "Desierto", category: "Poblado", minLevel: 30, x: 86, y: 46, description: "Punto de descanso y comercio en el desierto." },
  { id: "wildlife-sanctuary-1", name: "Santuario de fauna 1", region: "Mar exterior", category: "Santuario", minLevel: 22, x: 12, y: 33, description: "Isla protegida con Pals raros y recursos especiales." },
  { id: "wildlife-sanctuary-2", name: "Santuario de fauna 2", region: "Mar exterior", category: "Santuario", minLevel: 32, x: 88, y: 26, description: "Isla remota con Pals de nivel alto." },
  { id: "wildlife-sanctuary-3", name: "Santuario de fauna 3", region: "Mar exterior", category: "Santuario", minLevel: 38, x: 52, y: 82, description: "Isla meridional con encuentros poco frecuentes." },
  { id: "tower-alliance", name: "Torre de la Alianza", region: "Costa", category: "Torre", minLevel: 40, x: 55, y: 24, description: "Desafío avanzado reservado para equipos preparados." },
  { id: "ancient-ruins", name: "Ruinas antiguas", region: "Costa", category: "Ruinas", minLevel: 20, x: 67, y: 45, description: "Restos de una civilización anterior con piezas antiguas." }
];export const recipes = [
  { id: "pal-sphere", name: "Esfera Pal", output: 1, ingredients: [{ materialId: "paldium-fragment", amount: 1 }, { materialId: "wood", amount: 3 }, { materialId: "stone", amount: 3 }] },
  { id: "cake", name: "Tarta", output: 1, ingredients: [{ materialId: "flour", amount: 5 }, { materialId: "red-berries", amount: 8 }, { materialId: "milk", amount: 7 }, { materialId: "egg", amount: 8 }, { materialId: "honey", amount: 2 }] }
];


export const technologies = [
  { id: "primitive-tools", level: 1, name: "Herramientas primitivas", category: "Supervivencia", unlocks: "Hacha, pico y banco de trabajo", branch: "Base" },
  { id: "pal-sphere", level: 2, name: "Esfera Pal", category: "Captura", unlocks: "Captura básica de Pals", branch: "Captura" },
  { id: "campfire", level: 2, name: "Fogata", category: "Supervivencia", unlocks: "Cocina y calor durante la noche", branch: "Base" },
  { id: "berry-plantation", level: 5, name: "Plantación de bayas", category: "Base", unlocks: "Producción automática de comida", branch: "Base" },
  { id: "repair-bench", level: 5, name: "Mesa de reparación", category: "Producción", unlocks: "Mantén tus herramientas en buen estado", branch: "Producción" },
  { id: "parachute", level: 8, name: "Paracaídas", category: "Exploración", unlocks: "Desciende desde riscos y torres", branch: "Exploración" },
  { id: "shield", level: 12, name: "Escudo", category: "Combate", unlocks: "Protección personal contra el daño", branch: "Combate" },
  { id: "breeding-farm", level: 19, name: "Granja de cría", category: "Cría", unlocks: "Cría y obtención de huevos", branch: "Cría" },
  { id: "cake", level: 19, name: "Tarta", category: "Cría", unlocks: "Alimento necesario para la granja de cría", branch: "Cría" },
  { id: "metal-tools", level: 20, name: "Herramientas de metal", category: "Producción", unlocks: "Minería y fabricación mejoradas", branch: "Producción" },
  { id: "grappling-gun", level: 22, name: "Lanzagarfios", category: "Exploración", unlocks: "Sube pendientes y cruza desniveles", branch: "Exploración" },
  { id: "pal-essence", level: 26, name: "Condensador de esencia", category: "Pals", unlocks: "Mejora Pals duplicados", branch: "Pals" },
  { id: "electric-kitchen", level: 27, name: "Cocina eléctrica", category: "Base", unlocks: "Cocina con mayor velocidad", branch: "Base" },
  { id: "production-line", level: 32, name: "Línea de producción", category: "Automatización", unlocks: "Producción industrial", branch: "Producción" },
  { id: "weapon-line", level: 32, name: "Línea de armas", category: "Combate", unlocks: "Fabricación de armas avanzadas", branch: "Combate" },
  { id: "sphere-launcher", level: 35, name: "Lanzador de esferas", category: "Captura", unlocks: "Captura a distancia", branch: "Captura" },
  { id: "advanced-farm", level: 36, name: "Granja avanzada", category: "Base", unlocks: "Automatiza comida y materiales", branch: "Base" },
  { id: "legendary-tech", level: 40, name: "Tecnología avanzada", category: "Final", unlocks: "Equipo de final de juego", branch: "Final" },
  { id: "rocket-launcher", level: 49, name: "Lanzacohetes", category: "Combate", unlocks: "Potencia explosiva de alto nivel", branch: "Final" },
  { id: "paldeck-terminal", level: 50, name: "Terminal Pal de élite", category: "Pals", unlocks: "Gestión completa del Palbox", branch: "Final" }
];export const sessionTasks = [
  { id: "capture-pals", title: "Capturar 3 Pals", category: "Colección" },
  { id: "visit-location", title: "Visitar una ubicación del mapa", category: "Exploración" },
  { id: "craft-recipe", title: "Preparar una receta", category: "Crafting" }
];

