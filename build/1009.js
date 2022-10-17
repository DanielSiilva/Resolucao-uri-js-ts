let nomeVendedor = process.argv[2];
let salarioFixo = Number(process.argv[3]);
let totalVendas = Number(process.argv[4]);
function salarioBonus(nome, salarioFixo, totalVendas) {
    let comissao = ((15 / 100) * totalVendas);
    let bonusSalario = salarioFixo + comissao;
    return (`${nome}, seu novo salario é : ${bonusSalario.toFixed(2)}`);
}
console.log(salarioBonus(nomeVendedor, salarioFixo, totalVendas));
//# sourceMappingURL=1009.js.map