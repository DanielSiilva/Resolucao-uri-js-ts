const userNota01 = Number(process.argv[2]);
const userNota02 = Number(process.argv[3]);
function mediaPonderada(nota1, nota2) {
    let peso01 = 3.5;
    let peso02 = 7.5;
    let nota01Peso = nota1 * peso01;
    let nota02Peso = nota1 * peso02;
    if (nota1 <= 10 && nota2 <= 10) {
        let media = (nota01Peso + nota02Peso) / (peso01 + peso02);
        return `Madia : ${media.toFixed(5)}`;
    }
    else {
        return `As notas devem ser de 0 a 10`;
    }
}
console.log(mediaPonderada(userNota01, userNota02));
//# sourceMappingURL=1005.js.map