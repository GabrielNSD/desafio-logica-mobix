const ampulheta = require("./ampulheta");

const { inputing, emptyLine, fullLine } = ampulheta;

const n = inputing();

console.log("\n");
console.log("Ampulheta no estado inicial: \n");

console.log("#".repeat(n)); //imprime o topo da ampulheta
for (let i = 1; i < n - 1; i++) {
  //console.log(i);
  if (i < n / 2) {
    console.log(fullLine(i, n));
  } else {
    console.log(emptyLine(i, n));
  }
}
console.log("#".repeat(n)); //imprime a base da ampulheta

console.log("\n");
console.log("Ampulheta no estado final: \n");

console.log("#".repeat(n)); //imprime o topo da ampulheta
for (let i = 1; i < n - 1; i++) {
  //console.log(i);
  if (i < n / 2 - 1) {
    console.log(emptyLine(i, n));
  } else {
    console.log(fullLine(i, n));
  }
}
console.log("#".repeat(n)); //imprime a base da ampulheta
