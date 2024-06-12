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
                afirmacao: "Você está começando a aprender sobre os impactos das mudanças climáticas. "
            },
            {
                texto: "Médio",
                afirmacao: "Você tem um conhecimento razoável sobre os impactos das mudanças climáticas. "
            },
            {
                texto: "Alto",
                afirmacao: "Você tem um conhecimento aprofundado sobre os impactos das mudanças climáticas. "
            }
        ]
    },
    {
        enunciado: "Quais são algumas das principais causas das mudanças climáticas?",
        alternativas: [
            {
                texto: "Emissões de gases de efeito estufa",
                afirmacao: "As emissões de gases de efeito estufa são uma das principais causas das mudanças climáticas. "
            },
            {
                texto: "Desmatamento",
                afirmacao: "O desmatamento contribui significativamente para as mudanças climáticas. "
            },
            {
                texto: "Uso de combustíveis fósseis",
                afirmacao: "O uso de combustíveis fósseis é uma das principais fontes de emissões de gases de efeito estufa. "
            },
            {
                texto: "Todas as opções acima",
                afirmacao: "Todas as opções mencionadas são causas principais das mudanças climáticas. "
            }
        ]
    },
    {
        enunciado: "Quais são alguns dos efeitos imediatos das mudanças climáticas em diferentes regiões do mundo?",
        alternativas: [
            {
                texto: "Aumento das temperaturas médias",
                afirmacao: "O aumento das temperaturas médias é um efeito imediato das mudanças climáticas. "
            },
            {
                texto: "Aumento da frequência de eventos climáticos extremos",
                afirmacao: "A maior frequência de eventos climáticos extremos é um impacto direto das mudanças climáticas. "
            },
            {
                texto: "Acidificação dos oceanos",
                afirmacao: "A acidificação dos oceanos é uma consequência das mudanças climáticas. "
            },
            {
                texto: "Todas as opções acima",
                afirmacao: "Todos os efeitos mencionados são impactos imediatos das mudanças climáticas. "
            }
        ]
    },
    {
        enunciado: "Que medidas estão sendo tomadas globalmente para mitigar as mudanças climáticas?",
        alternativas: [
            {
                texto: "Investimento em energias renováveis",
                afirmacao: "O investimento em energias renováveis é uma das principais medidas para mitigar as mudanças climáticas. "
            },
            {
                texto: "Implementação de políticas de conservação ambiental",
                afirmacao: "A implementação de políticas de conservação ambiental é crucial para combater as mudanças climáticas. "
            },
            {
                texto: "Acordos internacionais como o Acordo de Paris",
                afirmacao: "Acordos internacionais como o Acordo de Paris são essenciais para a ação climática global. "
            },
            {
                texto: "Todas as opções acima",
                afirmacao: "Todas as medidas mencionadas são importantes para mitigar as mudanças climáticas. "
            }
        ]
    }
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
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigado por completar o quiz!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();