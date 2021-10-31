const perguntas = [
    "O que aprendi hoje ?",
    "O que me deixou aborrecido ? O que eu podia fazer para melhorar ?",
    "O que me deixou feliz hoje ?",
    "Quantas pessoas ajudei hoje ?",
]

const fazerPergunta = (id = 0) => {
    return process.stdout.write(perguntas[id] + "\n");
}

fazerPergunta()

process.stdin.on("data", dados => {
    process.stdout.write(dados.toString().trim() + "\n");
    process.exit();
})