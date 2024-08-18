const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual o seu nível de conhecimento sobre os impactos das mudanças climáticas em nosso cotidiano?",
        alternativas: [
            {
                texto: "Baixo",
                afirmacoes: [
                    "Você está começando a aprender sobre os impactos das mudanças climáticas.",
                    "Considere se informar mais sobre o tema.",
                    "O conhecimento é o primeiro passo para a mudança."
                ]
            },
            {
                texto: "Médio",
                afirmacoes: [
                    "Você tem um conhecimento razoável sobre os impactos das mudanças climáticas.",
                    "Continue se informando para entender ainda mais.",
                    "Sua compreensão pode fazer a diferença."
                ]
            },
            {
                texto: "Alto",
                afirmacoes: [
                    "Você tem um conhecimento aprofundado sobre os impactos das mudanças climáticas.",
                    "Você está bem preparado para discutir o tema.",
                    "Compartilhe seu conhecimento com outros para ajudar na conscientização."
                ]
            }
        ]
    },
    // As outras perguntas seguem o mesmo padrão
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    for (const afirmacao of opcaoSelecionada.afirmacoes) {
        historiaFinal += afirmacao + " ";
    }
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigado por completar o quiz!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
