/** Fuentes oficiales para la sección de noticias. */
export const officialNewsSources = [
  {
    id: "pocketpair-news",
    name: "Pocketpair — Noticias",
    type: "official-news",
    language: "ja/en",
    url: "https://www.pocketpair.jp/news/"
  },
  {
    id: "palworld-x-en",
    name: "Palworld oficial en X",
    type: "official-social",
    language: "en",
    handle: "@Palworld_EN",
    url: "https://x.com/Palworld_EN"
  },
  {
    id: "palworld-x-jp",
    name: "Palworld oficial en X (日本語)",
    type: "official-social",
    language: "ja",
    handle: "@Palworld_JP",
    url: "https://x.com/Palworld_JP"
  }
];

export function normalizeNewsItem(item, source = officialNewsSources[0]) {
  return {
    id: item.id ?? item.url,
    title: item.title?.trim() ?? "Sin título",
    summary: item.summary?.trim() ?? "",
    publishedAt: item.publishedAt ?? null,
    category: item.category ?? "Noticias",
    sourceId: source.id,
    sourceName: source.name,
    url: item.url ?? source.url
  };
}

export function mergeNews(...groups) {
  return groups.flat().map((item) => normalizeNewsItem(item, item.source ?? officialNewsSources[0]))
    .filter((item, index, list) => list.findIndex((candidate) => candidate.id === item.id) === index)
    .sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)));
}

