import fs from "fs/promises";
let a = await fs.readFile("omkar.txt");
let b = await fs.writeFile("omkar.txt", "\n first line");
let c = await fs.appendFile("omkar.txt", "\n \n first line");
console.log(a.toString());
console.log(b.toString());
