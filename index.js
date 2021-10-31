const perguntas = [
    "O que aprendi hoje ?",
    "Qual(is) dificuldades que tive hoje ? O que eu podia fazer para melhorar ?",
    "O que me deixou motivado ?",
    "Quantas pessoas ajudei hoje ?",
]

const fazerPergunta = (id = 0) => {
    return process.stdout.write("\n\n" + perguntas[id] + " > ");
}

fazerPergunta();


const respostas = [];

process.stdin.on("data", dados => {
    respostas.push(dados.toString().trim());
    if(respostas.length < perguntas.length){
        fazerPergunta(respostas.length);
    }else{
        console.log(respostas);
        process.exit();
    }
})