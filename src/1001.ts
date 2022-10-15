// QUESTÃO
// Leia 2 variáveis, denominadas A e B e faça a soma dessas duas variáveis, atribuindo seu resultado à variável X . Imprima X como mostrado abaixo.

const userA = Number(process.argv[2]);
const userB = Number(process.argv[3]);

function soma (a:number, b:number){
    const x:number = a+b

    return `A soma de ${a} + ${b} = ${x}`
}

console.log(soma(userA, userB))