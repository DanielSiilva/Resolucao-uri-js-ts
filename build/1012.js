const a = Number(process.argv[2]);
const b = Number(process.argv[3]);
const c = Number(process.argv[4]);
function areaElementos(a, b, c) {
    const areaTriangulo = (a * c) / 2;
    const areaCirculo = 3.14159 * Math.pow(c, 2);
    const areaTrapezio = ((a + b) * c) / 2;
    const areaQuadrado = Math.pow(b, 2);
    const areaRetangulo = a * b;
    return `
        TRIÂNGULO: ${areaTriangulo.toFixed(3)}
        CIRCULO: ${areaCirculo.toFixed(3)}
        TRAPEZIO: ${areaTrapezio.toFixed(3)}
        QUADRADO: ${areaQuadrado.toFixed(3)}
        RETANGULO: ${areaRetangulo.toFixed(3)}
    
    `;
}
console.log(areaElementos(a, b, c));
//# sourceMappingURL=1012.js.map