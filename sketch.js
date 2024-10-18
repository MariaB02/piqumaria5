function setup() {
  createCanvas(400, 400); // cria quadro
}

function inicializaCores(){
  background("#C5D6D6"); //cor do fundo
  fill("rgb(238,161,161)"); //cor da palavra
  textSize(64); // tamanho da letra
  textAlign(CENTER,CENTER); // texto alinhado
}

function draw() {
  inicializaCores();
  
  let maximo = width; //variavel
  let minimo = 1; //variavel
  //mouseX, 0, width ==> 0, palavra.length
  let palavra = "oiierr" // palavra escrita
  let quantidade = map(mouseX, 0, width, 1, palavra.length); // faz a palavra aparecer na tela
  //console.log(quantidade);
  let parcial = palavra.substring(0,quantidade);
  text(parcial,200,200); //posicao do texto
}
