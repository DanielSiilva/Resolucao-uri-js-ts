// Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas em um mês e o valor que ele recebeu por hora. Imprima o número do funcionário e o salário que ele receberá no final do mês, com duas casas decimais.

// Não se esqueça de imprimir o final da linha após o resultado, caso contrário você receberá “Erro de apresentação”.
// Não se esqueça do espaço antes e depois do sinal igual e depois do U$.
// Entrada
// O arquivo de entrada contém 2 números inteiros e 1 valor de ponto flutuante, representando o número, a quantidade de horas trabalhadas e a quantidade que o funcionário recebe por hora trabalhada.

// Resultado
// Imprima o número e o salário do funcionário, conforme o exemplo dado, com um espaço em branco antes e depois do sinal de igual.

const numFuncionario = Number(process.argv[2]);
const numHorasTrabalhadas = Number(process.argv[3]);


function salario (numFun:number, numHrTrabalhadas:number){
    const mes:number = 31
    const salarioFuncionario:number = numHrTrabalhadas*mes

    return (`Numero Funcionario:${numFun} - Salario: ${salarioFuncionario.toFixed(2)}`)
}
//Errado -- refatora
console.log(salario(numFuncionario, numHorasTrabalhadas))