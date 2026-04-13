let indice = 0;
let pontos = 0;
let respondeu = false;

const perguntaEl = document.getElementById("pergunta");
const respostasEl = document.getElementById("respostas");
const curiosidadeEl = document.getElementById("curiosidade");
const pontuacaoEl = document.getElementById("pontuacao");

function carregarPergunta() {
  respondeu = false;
  respostasEl.innerHTML = "";
  curiosidadeEl.textContent = "";

  let atual = perguntas[indice];

  perguntaEl.textContent = atual.pergunta;

  atual.opcoes.forEach((opcao, i) => {
    let btn = document.createElement("button");
    btn.textContent = opcao;

    btn.onclick = () => verificarResposta(i);

    respostasEl.appendChild(btn);
  });
}

function verificarResposta(i) {
  if (respondeu) return;

  respondeu = true;

  let correta = perguntas[indice].correta;

  if (i === correta) {
    pontos++;
    alert("✅ Acertou!");
  } else {
    alert("❌ Errou!");
  }

  curiosidadeEl.textContent = perguntas[indice].curiosidade;
  pontuacaoEl.textContent = "Pontos: " + pontos;
}

document.getElementById("proximo").onclick = () => {
  if (!respondeu) {
    alert("Responda antes!");
    return;
  }

  indice++;

  if (indice >= perguntas.length) {
    alert("Fim do jogo!");
    return;
  }

  carregarPergunta();
};

document.getElementById("reset").onclick = () => {
  indice = 0;
  pontos = 0;
  carregarPergunta();
  pontuacaoEl.textContent = "";
};

carregarPergunta();