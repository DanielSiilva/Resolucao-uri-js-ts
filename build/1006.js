const inteiroA = Number(process.argv[2]);
const inteiroB = Number(process.argv[3]);
const inteiroC = Number(process.argv[4]);
const inteiroD = Number(process.argv[5]);
function diferencaProduto(a, b, c, d) {
    const produto = ((a * b) - (c * d));
    return (`A diferença : ${produto}`);
}
console.log(diferencaProduto(inteiroA, inteiroB, inteiroC, inteiroD));
//# sourceMappingURL=1006.js.map