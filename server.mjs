import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json" };
createServer(async (request, response) => {
  try {
    const relative = request.url === "/" ? "index.html" : request.url.slice(1).split("?")[0];
    const file = normalize(join(root, relative));
    if (!file.startsWith(root)) throw new Error("Invalid path");
    response.writeHead(200, { "Content-Type": types[extname(file)] ?? "application/octet-stream" });
    response.end(await readFile(file));
  } catch { response.writeHead(404); response.end("Not found"); }
}).listen(4173, () => console.log("PalAtlas disponible en http://localhost:4173"));

