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

export const recipes = [
  { id: "pal-sphere", name: "Esfera Pal", output: 1, ingredients: [{ materialId: "paldium-fragment", amount: 1 }, { materialId: "wood", amount: 3 }, { materialId: "stone", amount: 3 }] },
  { id: "cake", name: "Tarta", output: 1, ingredients: [{ materialId: "flour", amount: 5 }, { materialId: "red-berries", amount: 8 }, { materialId: "milk", amount: 7 }, { materialId: "egg", amount: 8 }, { materialId: "honey", amount: 2 }] }
];

