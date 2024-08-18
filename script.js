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
                afirmacao:["Você está começando a aprender sobre os impactos das mudanças climáticas. ",
                           "Continue explorando o tema para compreender melhor os desafios globais.”
                ]
            },
            {
                texto: "Médio",
                afirmacao: ["Você tem um conhecimento razoável sobre os impactos das mudanças climáticas.",
                           "Com um pouco mais de estudo, você pode se tornar um defensor mais eficaz do meio ambiente."
                ]
            },
            {
                texto: "Alto",
                afirmacao: ["Você tem um conhecimento aprofundado sobre os impactos das mudanças climáticas. ",
                           "Use esse conhecimento para liderar iniciativas e promover a conscientização em sua comunidade."
                ]
            }
        ]
    },
    {
        enunciado: "1 - Quais são algumas das principais causas das mudanças climáticas?",
        alternativas: 
            {
                texto: "a) Emissões de gases de efeito estufa",
                afirmacao:["As emissões de gases de efeito estufa são uma das principais causas das mudanças climáticas. ",
                           "Reduzir essas emissões é essencial para mitigar os impactos futuros."
                ]
            },
            {
                texto: "b) Desmatamento",
                afirmacao:["O desmatamento contribui significativamente para as mudanças climáticas. ",
                           "Proteger as florestas é vital para manter o equilíbrio climático."
            ]
            },
            {
                texto: "c) Uso de combustíveis fósseis",
                afirmacao: ["O uso de combustíveis fósseis é uma das principais fontes de emissões de gases de efeito estufa. ",
                           "A transição para energias renováveis é crucial para reduzir essas emissões."
                ]
            },
            {
                texto: "d) Todas as opções acima",
                afirmacao:["Todas as opções mencionadas são causas principais das mudanças climáticas. " ,
                           "Combater esses fatores é necessário para proteger o futuro do planeta."
                ]
            }
        ]
    },
    {
        enunciado: "2 - Quais são alguns dos efeitos imediatos das mudanças climáticas em diferentes regiões do mundo?",
        alternativas: [
            {
                texto: "a) Aumento das temperaturas médias",
                afirmacao:["O aumento das temperaturas médias é um efeito imediato das mudanças climáticas. ",
                           "Este aumento pode levar a ondas de calor mais frequentes e intensas."
                ]
            },
            {
                texto: "b) Aumento da frequência de eventos climáticos extremos",
                afirmacao: ["A maior frequência de eventos climáticos extremos é um impacto direto das mudanças climáticas. ",
                           "Esses eventos incluem furacões, inundações e secas mais severas."
                ]
            },
            {
                texto: "c) Acidificação dos oceanos",
                afirmacao: ["A acidificação dos oceanos é uma consequência das mudanças climáticas. ",
                           "Este fenômeno afeta a vida marinha, especialmente os corais e as espécies que dependem deles."
                ]
            },
            {
                texto: "d) Todas as opções acima",
                afirmacao: ["Todos os efeitos mencionados são impactos imediatos das mudanças climáticas. ",
                           "Esses efeitos combinados têm consequências graves para ecossistemas e populações humanas."
                ]
            }
        ]
    },
    {
        enunciado: "3 - Que medidas estão sendo tomadas globalmente para mitigar as mudanças climáticas?",
        alternativas: [
            {
                texto: "a) Investimento em energias renováveis",
                afirmacao: ["O investimento em energias renováveis é uma das principais medidas para mitigar as mudanças climáticas. ",
                           "Fontes como solar e eólica são fundamentais para uma economia de baixo carbono.".
                ]
            },
            {
                texto: "b) Implementação de políticas de conservação ambiental",
                afirmacao:["A implementação de políticas de conservação ambiental é crucial para combater as mudanças climáticas. ",
                           "Essas políticas incluem a proteção de florestas, áreas úmidas e biodiversidade."
                ]
            },
            {
                texto: "c) Acordos internacionais como o Acordo de Paris",
                afirmacao: ["Acordos internacionais como o Acordo de Paris são essenciais para a ação climática global. ",
                           "Esses acordos estabelecem metas para a redução das emissões de gases de efeito estufa."
                ]
            },
            {
                texto: "d) Todas as opções acima",
                afirmacao: ["Todas as medidas mencionadas são importantes para mitigar as mudanças climáticas. ",
                           "A cooperação internacional e o compromisso contínuo são fundamentais para o sucesso."
                ]
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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
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

