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
        process.exit();
    }
})

process.on('exit', () => {

console.log(`
Obrigado pelo seu acesso de hoje!

Vamos resumir um pouco sobre o seu progesso hoje!!

O que aprendi hoje foi:
${respostas[0]}

A tua dificuldade e o que tu podia melhorar hoje foi: 
${respostas[1]}

O que te motivou hoje foi: 
${respostas[2]}

A quantidade de pessoas que você ajudou hoje foi: 
${respostas[3]}



Muito bacana ver o teu progresso de hoje!! Leia com atenção e reflita. 

Se pergunte sempre: "Onde eu posso evoluir ?"

Volte amanhã para mais reflexões.

`)

})