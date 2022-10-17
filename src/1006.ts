// Leia quatro valores inteiros chamados A, B, C e D. Calcule e imprima a diferença do produto A e B pelo produto de C e D (A * B - C * D).

// Entrada
// O arquivo de entrada contém 4 valores inteiros.

// Resultado
// Imprima DIFERENCA com todas as letras maiúsculas, conforme exemplo a seguir, com um espaço em branco antes e depois do sinal de igual.

const inteiroA = Number(process.argv[2]);
const inteiroB = Number(process.argv[3]);
const inteiroC = Number(process.argv[4]);
const inteiroD = Number(process.argv[5]);

function diferencaProduto(a:number, b:number, c:number, d:number){
    const produto:number = ((a * b) - (c * d))
    return (`A diferença : ${produto}`)
}

console.log(diferencaProduto(inteiroA, inteiroB, inteiroC, inteiroD))

