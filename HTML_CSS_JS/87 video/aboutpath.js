import path from "path";

let myPath = "/media/omkar/DATA/Omkar/CODE-111/Webdev/Backend_Series/87 video";
console.log(path.basename(myPath)); // 87 video
console.log(path.dirname(myPath)); // /media/omkar/DATA/Omkar/CODE-111/Webdev/Backend_Series
console.log(path.extname(myPath)); // '' --> tell extension of file
console.log(path.isAbsolute(myPath)); // true

console.log(path.join("media", "omkar", "DATA")); // media/omkar/DATA
