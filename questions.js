const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    opcoes: ["Linguagem de estilo", "Linguagem de programação", "Banco de dados"],
    correta: 1,
    curiosidade: "JavaScript é usado em praticamente todos os sites!"
  },
  {
    pergunta: "Qual comando mostra mensagem no console?",
    opcoes: ["alert()", "console.log()", "print()"],
    correta: 1,
    curiosidade: "console.log é essencial para debug!"
  },

  // BÁSICO
  {
    pergunta: "Como declarar variável?",
    opcoes: ["var nome", "let nome", "Ambos"],
    correta: 2,
    curiosidade: "Hoje o mais usado é let e const!"
  },
  {
    pergunta: "Qual evento é de clique?",
    opcoes: ["hover", "click", "load"],
    correta: 1,
    curiosidade: "click é o evento mais comum!"
  },

  // INTERMEDIÁRIO
  {
    pergunta: "Como selecionar ID?",
    opcoes: ["getElementById", "queryClass", "selectId"],
    correta: 0,
    curiosidade: "É uma das funções mais usadas do DOM!"
  },
  {
    pergunta: "O que faz innerHTML?",
    opcoes: ["Estiliza", "Altera conteúdo HTML", "Cria variável"],
    correta: 1,
    curiosidade: "Cuidado: pode sobrescrever tudo!"
  },
  {
    pergunta: "Qual estrutura repete?",
    opcoes: ["if", "for", "let"],
    correta: 1,
    curiosidade: "Loops são fundamentais!"
  },

  // AVANÇANDO
  {
    pergunta: "O que é array?",
    opcoes: ["Função", "Lista", "Evento"],
    correta: 1,
    curiosidade: "Arrays guardam múltiplos valores!"
  },
  {
    pergunta: "Como acessar primeiro item?",
    opcoes: ["[1]", "[0]", "[2]"],
    correta: 1,
    curiosidade: "Arrays começam do zero!"
  },
  {
    pergunta: "Qual operador compara valor?",
    opcoes: ["=", "==", "+"],
    correta: 1,
    curiosidade: "=== é ainda mais seguro!"
  },

  // COMPLETE até 25 (já deixo pronto 👇)
  {
    pergunta: "Qual cria elemento?",
    opcoes: ["createElement", "newElement", "addHTML"],
    correta: 0,
    curiosidade: "Permite criar elementos dinamicamente!"
  },
  {
    pergunta: "Qual adiciona elemento?",
    opcoes: ["appendChild", "addChild", "pushHTML"],
    correta: 0,
    curiosidade: "Muito usado em listas!"
  },
  {
    pergunta: "O que é função?",
    opcoes: ["Variável", "Ação reutilizável", "Evento"],
    correta: 1,
    curiosidade: "Funções evitam repetição!"
  },
  {
    pergunta: "Qual evento detecta digitação?",
    opcoes: ["keydown", "click", "hover"],
    correta: 0,
    curiosidade: "Perfeito para formulários!"
  },
  {
    pergunta: "Qual altera texto?",
    opcoes: ["textContent", "style", "value"],
    correta: 0,
    curiosidade: "Mais seguro que innerHTML!"
  },
  {
    pergunta: "Qual cria loop?",
    opcoes: ["if", "for", "click"],
    correta: 1,
    curiosidade: "for é o mais clássico!"
  },
  {
    pergunta: "Qual guarda valor constante?",
    opcoes: ["let", "const", "var"],
    correta: 1,
    curiosidade: "const não pode mudar!"
  },
  {
    pergunta: "Qual pega valor input?",
    opcoes: ["value", "text", "input"],
    correta: 0,
    curiosidade: "Muito usado em formulários!"
  },
  {
    pergunta: "Qual operador lógico?",
    opcoes: ["&&", "+", "="],
    correta: 0,
    curiosidade: "&& significa E lógico!"
  },
  {
    pergunta: "Qual evento carrega página?",
    opcoes: ["load", "click", "start"],
    correta: 0,
    curiosidade: "Executa ao abrir a página!"
  },
  {
    pergunta: "Qual remove elemento?",
    opcoes: ["remove()", "deleteHTML", "popDOM"],
    correta: 0,
    curiosidade: "remove() é moderno!"
  },
  {
    pergunta: "Qual estrutura decisão?",
    opcoes: ["if", "for", "array"],
    correta: 0,
    curiosidade: "if decide caminhos!"
  },
  {
    pergunta: "Qual concatena texto?",
    opcoes: ["+", "-", "*"],
    correta: 0,
    curiosidade: "Muito usado com strings!"
  },
  {
    pergunta: "Qual imprime alerta?",
    opcoes: ["alert()", "log()", "msg()"],
    correta: 0,
    curiosidade: "Bom para testes rápidos!"
  },
  {
    pergunta: "Qual evento mouse?",
    opcoes: ["mouseover", "keydown", "submit"],
    correta: 0,
    curiosidade: "Interação com cursor!"
  }
];