// Faça um programa que leia três valores de ponto flutuante: A, B e C. Em seguida, calcule e mostre:
// a) a área do triângulo retângulo que tem base A e altura C.
// b) a área do círculo do raio C. (pi = 3,14159)
// c) a área do trapézio que tem A e B por base e C por altura.
// d) a área do quadrado que tem lado B.
// e) a área do retângulo que tem lados A e B.

// Entrada
// O arquivo de entrada contém três valores duplos com um dígito após o ponto decimal.

// Resultado
// O arquivo de saída deve conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com uma mensagem correspondente (em português) e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após a vírgula.

const a = Number(process.argv[2]);
const b = Number(process.argv[3]);
const c = Number(process.argv[4]);

function areaElementos (a:number, b:number, c:number){

    const areaTriangulo:number = (a * c)/2

    return areaTriangulo

}

console.log(areaElementos(a,b,c))