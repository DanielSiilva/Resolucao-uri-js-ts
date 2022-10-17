// Neste problema, a tarefa é ler um código de um produto 1, o número de unidades do produto 1, o preço de uma unidade do produto 1, o código de um produto 2, o número de unidades do produto 2 e o preço. para uma unidade de produto 2. Após isso, calcule e mostre o valor a ser pago.

// Entrada
// O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores: dois inteiros e um valor flutuante com 2 dígitos após o ponto decimal.

// Resultado
// O arquivo de saída deve ser uma mensagem como no exemplo a seguir onde "Valor a pagar" significa Valor a Pagar . Lembre-se do espaço após o símbolo ":" e após o símbolo "R$". O valor deve ser apresentado com 2 dígitos após o ponto.

const codigoProdudo01 = Number(process.argv[2]);
const unidProduto01 = Number(process.argv[3]);
const priceProduto01 = Number(process.argv[4])

const codigoProdudo02 = Number(process.argv[5]);
const unidProduto02 = Number(process.argv[6]);
const priceProduto02 = Number(process.argv[7])


function simplesSoma (codPrd01:number, undPrd01:number,pricUnd01:number,codPrd02:number, undPrd02:number,pricUnd02:number){

    const valorPagar:number = (undPrd01*pricUnd01) + (undPrd02 * pricUnd02)

    return (`Valor total a pagar: R${valorPagar.toFixed(2)} - Cód dos Produtos:Produto 01: ${codPrd01} - Produto 02: ${codPrd02}`)
}

console.log(simplesSoma(codigoProdudo01, unidProduto01, priceProduto01,codigoProdudo02,unidProduto02, priceProduto02))