const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    
    {
        enunciado: "Durante a Juventude, Diana se depara com essas duas escolhas, qual é a mais prudente de se seguir? ",
        alternativas: [
            {
                texto: "Diana deve investir em sua educação. Ela economiza dinheiro de trabalhos de meio período e bolsas de estudo para pagar a faculdade sem contrair muitas dívidas.",
                afirmacao: "afirmação"
            },
            {
                texto: "Diana deve gastar impulsivamente seu dinheiro com roupas e festas, negligenciando a importância da educação e das economias.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Diana inicia sua carreira, qual a escolha ela deve tomar? ",
        alternativas: [
            {
                texto: "Diana deve viver de forma modesta e economizar uma parte significativa de seu salário. Ela investe em uma carteira diversificada de ações e fundos, o que aumenta seu patrimônio ao longo do tempo, proporcionando segurança financeira.",
                afirmacao: "afirmação"
            },
            {
                texto: "Diana deve escolher viver acima das suas possibilidades, comprando um carro caro e morando em um apartamento luxuoso, financiando tudo com cartões de crédito.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Diana chega em sua meia-idade, e precisa se preparar para o futuro, qual a escolha que ela deve tomar?",
        alternativas: [
            {
                texto: "Na meia-idade, Diana deve priorizar seu futuro financeiro. Ela contribui regularmente para um plano de aposentadoria e busca a orientação de um consultor financeiro para garantir que seus investimentos estejam alinhados com seus objetivos de longo prazo.",
                afirmacao: "afirmação"
            },
            {
                texto: "Diana pode optar por ignorar a importância da poupança para a aposentadoria, preferindo gastar seus recursos em viagens e bens de consumo de luxo.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Diana está cada vez mais perto de se aposentar, qual será a escolha mais prudente a se fazer? ",
        alternativas: [
            {
                texto: "Perto da aposentadoria, Diana deve realizar um esforço consciente para pagar todas as suas dívidas. Ela quita o financiamento da casa e elimina quaisquer empréstimos pendentes.",
                afirmacao: "afirmação"
            },
            {
                texto: "Diana deve continuar a acumular dívidas, refinanciando sua casa para pagar outras despesas e contraindo novos empréstimos.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Diana finalmente começou a receber a sua aposentadoria, qual caminho ela deve seguir?",
        alternativas: [
            {
                texto: "Já aposentada, Diana deve adotar um orçamento rigoroso para garantir que suas economias e investimentos durem pelo resto de sua vida. Ela prioriza gastos essenciais e desfruta de uma vida confortável, mas frugal, sem se preocupar em ficar sem dinheiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "Diana poderia decidir gastar seu dinheiro sem um plano claro, retirando grandes quantias para viagens e luxos.",
                afirmacao: "afirmação"
            }
        ]
    },
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
    caixaPerguntas.textContent = "Se Diana fizer as escolhas corretas, o resultado será";
    textoResultado.textContent = historiaFinal
    caixaAlternativas.textContent = "";
}

mostraPergunta();
