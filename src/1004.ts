// Leia dois valores inteiros. Após isso, calcule o produto entre eles e armazene o resultado em uma variável denominada PROD . Imprima o resultado como no exemplo abaixo. Não se esqueça de imprimir o final da linha após o resultado, caso contrário você receberá “Erro de apresentação” .

// Entrada
// O arquivo de entrada contém 2 números inteiros.

// Resultado
// Imprima a mensagem "PROD" e PROD conforme o exemplo a seguir, com um espaço em branco antes e depois do sinal de igual.

const user1 = Number(process.argv[2]);
const user2 = Number(process.argv[3]);

function produto2Numeros (num1:number, num2:number) {
    const result:number = num1 * num2

    return `Produto de ${num1} x ${num2} = ${result}`
}

console.log(produto2Numeros(user1, user2))