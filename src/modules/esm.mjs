import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import "../modules/files/c.js";
import "./files/a.json" assert { type: "json" };
import "./files/b.json" assert { type: "json" };
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
  unknownObject = "./files/a.json";
} else {
  unknownObject = "./files/b.json";
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});