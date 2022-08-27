//Selecionando itens do HTML
const bv1 = document.querySelector("#bhaskaraValorA");
const bv2 = document.querySelector("#bhaskaraValorB");
const bv3 = document.querySelector("#bhaskaraValorC");
const vb = document.querySelector("#valorBhaskara");
const cb = document.querySelector("calcularBhaskara");

//Marcar "erro" caso alguma resposta nao seja preenchida
bv1.onblur = () => {
  if(bv1.value == "") {
    bv1.style = "border-color: #aa0044";
  }else{
    bv1.style = "color: #000000";
  }
}

bv2.onblur = () => {
  if(bv2.value == "") {
    bv2.style = "border-color: #aa0044";
  }else{
    bv2.style = "color: #000000";
  }
}

bv3.onblur = () => {
  if(bv3.value == "") {
    bv3.style = "border-color: #aa0044";
  }else{
    bv3.style = "color: #000000";
  }
}

//Calcular os valores de bhaskara

