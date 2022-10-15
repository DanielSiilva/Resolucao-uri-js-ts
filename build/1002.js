let userR = Number(process.argv[2]);
function areaCircunferencia(r) {
    const n = 3.14159;
    let a = n * Math.sqrt(r);
    return `A = ${a.toFixed(4)}`;
}
console.log(areaCircunferencia(userR));
//# sourceMappingURL=1002.js.map