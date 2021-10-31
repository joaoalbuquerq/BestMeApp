const perguntas = [
    "O que aprendi hoje ?",
    "Qual(is) dificuldades que tive hoje ? O que eu podia fazer para melhorar ?",
    "O que me deixou motivado ?",
    "Quantas pessoas ajudei hoje ?",
]

const fazerPergunta = (id = 0) => {
    return process.stdout.write(perguntas[id] + "\n\n");
}

fazerPergunta();


const respostas = [];
var numeroDePerguntas;

process.stdin.on("data", dados => {
    respostas.push(dados.toString().trim() + '\n');
    if(respostas.length < fazerPergunta.length){

        numeroDePerguntas = respostas.length;
        perguntas(numeroDePerguntas);
    }else{
        console.log(respostas);
        process.exit();
    }
})