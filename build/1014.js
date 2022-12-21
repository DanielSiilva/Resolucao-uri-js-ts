const distancia = Number(process.argv[2]);
const totalCombustivel = Number(process.argv[3]);
function TotalConsumo(D, T) {
    const consumo = D / T;
    return `${consumo.toFixed(3)} km/l`;
}
console.log(TotalConsumo(distancia, totalCombustivel));
//# sourceMappingURL=1014.js.map