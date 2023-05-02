function tocarSom() {
  document.getElementById("audio").play();
}

var botao = document.getElementById("meuBotao"); // variavel do botão

var limites = {
esquerda: 0,
direita: window.innerWidth - botao.offsetWidth,
topo: 0,
base: window.innerHeight - botao.offsetHeight
};

// Função para mover o botão aleatoriamente
function moverBotao() {
  
  var x = Math.floor(Math.random() * (limites.direita - limites.esquerda)) + limites.esquerda; // largura aleatória
  var y = Math.floor(Math.random() * (limites.base - limites.topo)) + limites.topo; // altura aleatória

  botao.style.position = "absolute";
  botao.style.left = x + "px";
  botao.style.top = y + "px";
}

// Adiciona manipuladores de eventos ao botão
botao.addEventListener("mouseover", moverBotao);
botao.addEventListener("mouseout", moverBotao);