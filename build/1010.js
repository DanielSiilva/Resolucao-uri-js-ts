const codigoProdudo01 = Number(process.argv[2]);
const unidProduto01 = Number(process.argv[3]);
const priceProduto01 = Number(process.argv[4]);
const codigoProdudo02 = Number(process.argv[5]);
const unidProduto02 = Number(process.argv[6]);
const priceProduto02 = Number(process.argv[7]);
function simplesSoma(codPrd01, undPrd01, pricUnd01, codPrd02, undPrd02, pricUnd02) {
    const valorPagar = (undPrd01 * pricUnd01) + (undPrd02 * pricUnd02);
    return (`Valor total a pagar: R${valorPagar.toFixed(2)} - Cód dos Produtos:Produto 01: ${codPrd01} - Produto 02: ${codPrd02}`);
}
console.log(simplesSoma(codigoProdudo01, unidProduto01, priceProduto01, codigoProdudo02, unidProduto02, priceProduto02));
//# sourceMappingURL=1010.js.map