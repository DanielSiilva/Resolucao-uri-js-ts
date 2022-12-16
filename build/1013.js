const numberA = Number(process.argv[2]);
const numberB = Number(process.argv[3]);
const numberC = Number(process.argv[4]);
function NumberMaior(num1, num2, num3) {
    let MaiorNum1Num2 = (num1 + num2 + Math.abs(num1 - num2)) / 2;
    let Maior = (MaiorNum1Num2 + num3 + Math.abs(MaiorNum1Num2 - num3)) / 2;
    return console.log(`${Maior} é o maior`);
}
NumberMaior(numberA, numberB, numberC);
//# sourceMappingURL=1013.js.map