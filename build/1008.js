const numFuncionario = Number(process.argv[2]);
const numHorasTrabalhadas = Number(process.argv[3]);
function salario(numFun, numHrTrabalhadas) {
    const mes = 31;
    const salarioFuncionario = numHrTrabalhadas / mes;
    return (`Numero Funcionario:${numFun} - Salario: ${salarioFuncionario.toFixed(2)}`);
}
console.log(salario(numFuncionario, numHorasTrabalhadas));
//# sourceMappingURL=1008.js.map