//Selecionando itens do HTML
const t1 = document.querySelector("#trianguloLado1");
const t2 = document.querySelector("#trianguloLado2");
const t3 = document.querySelector("#trianguloLado3");
const tr = document.querySelector("#tipoDeTriangulo");

t1.onblur = () => {
  if(t1.value == "") {
    t1.style = "border-color: #aa0044";
  }else{
    t1.style = "color: #000000";
  }
}

t2.onblur = () => {
  if(t2.value == "") {
    t2.style = "border-color: #aa0044";
  }else{
    t2.style = "color: #000000";
  }
}

t3.onblur = () => {
  if(t3.value == "") {
    t3.style = "border-color: #aa0044";
  }else{
    t3.style = "color: #000000";
  }
}

