// A fórmula para calcular a área de uma circunferência é definida como A = π . R 2 . Considerando para este problema que π = 3,14159 :

// Calcule a área usando a fórmula dada na descrição do problema.

// Entrada
// A entrada contém um valor de ponto flutuante (precisão dupla), que é a variável R .

// Resultado
// Apresente a mensagem "A=" seguida do valor da variável, como no exemplo abaixo, com quatro casas após a vírgula. Use todas as variáveis ​​de precisão dupla.

let userR = Number(process.argv[2]);

function areaCircunferencia (r:number){
    const n:number = 3.14159

    let a:number = n * Math.sqrt(r)

    return `A = ${a.toFixed(4)}`

}

console.log(areaCircunferencia(userR))