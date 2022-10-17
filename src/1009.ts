// Faça um programa que leia o nome de um vendedor, seu salário fixo e o total da venda feita por ele mesmo no mês (em dinheiro). Considerando que este vendedor recebe 15% sobre todos os produtos vendidos, escreva o salário final (total) deste vendedor ao final do mês, com duas casas decimais.

// - Não se esqueça de imprimir o final da linha após o resultado, caso contrário você receberá “ Erro de apresentação ”.

// - Não se esqueça dos espaços em branco.

// Entrada
// O arquivo de entrada contém um texto (primeiro nome do funcionário), e dois valores de precisão dupla, que são o salário do vendedor e o valor total vendido por ele.

// Resultado
// Imprima o salário total do vendedor, conforme o exemplo dado

let nomeVendedor = process.argv[2];
let salarioFixo = Number(process.argv[3]);
let totalVendas = Number(process.argv[4]);

function salarioBonus (nome:string, salarioFixo:number, totalVendas:number){
    let comissao:number = ((15/100)*totalVendas)
    let bonusSalario:number = salarioFixo + comissao

    return (`${nome}, seu novo salario é : ${bonusSalario.toFixed(2)}`)

}

console.log(salarioBonus(nomeVendedor,salarioFixo, totalVendas))