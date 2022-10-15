// Leia os valores de dois pontos flutuantes de precisão dupla A e B, correspondentes às notas de dois alunos. Após isso, calcule a média do aluno, considerando que a nota A tem peso 3,5 e B tem peso 7,5. Cada nota pode ser de zero a dez, sempre com um dígito após a vírgula. Não se esqueça de imprimir o final da linha após o resultado, caso contrário você receberá “Erro de apresentação” . Não se esqueça do espaço antes e depois do sinal de igual.

// Entrada
// O arquivo de entrada contém valores de 2 pontos flutuantes com um dígito após o ponto decimal.

// Resultado
// Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo a seguir, com 5 dígitos após a vírgula 

const userNota01 = Number(process.argv[2]);
const userNota02 = Number(process.argv[3]);

function mediaPonderada (nota1:number, nota2:number) {
    let peso01:number = 3.5;
    let peso02:number = 7.5
    let nota01Peso:number = nota1 * peso01 ;
    let nota02Peso:number = nota1 * peso02 ;

    if (nota1 <= 10 && nota2 <=10){
        let media = (nota01Peso + nota02Peso)/ (peso01 + peso02)

        return `Madia : ${media.toFixed(5)}`
    }else{
        return `As notas devem ser de 0 a 10`
    }

}

console.log(mediaPonderada(userNota01, userNota02))