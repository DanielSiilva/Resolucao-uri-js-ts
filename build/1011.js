let userRaio = Number(process.argv[2]);
function calculaVolume(raio) {
    const pi = 3.14159;
    const volume = (4 / 3) * pi * Math.pow(raio, 3);
    return `Valume: ${volume.toFixed(3)}`;
}
console.log(calculaVolume(userRaio));
//# sourceMappingURL=1011.js.map