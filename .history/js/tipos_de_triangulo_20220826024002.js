//Selecionando itens do HTML
const t1 = document.querySelector("#trianguloLado1");
const t2 = document.querySelector("#trianguloLado2");
const t3 = document.querySelector("#trianguloLado3");
const tr = document.querySelector("#tipoDeTriangulo");
const ct = document.querySelector("#calculoTriangulo") ;
//Marcar "erro" caso alguma resposta nao seja preenchida
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

ct.onclick = () => {
  tr.value = ""
  if (t1.value == "" && t2.value != "" && t3.value != "") {
    t1.focus();
  }else if (t2.value == "" && t1.value != "" && t3.value != "") {
    t2.focus();
  }else if (t3.value == "" && t1.value != "" && t2.value != "") {
    t3.focus();
  }

  if (t1.value != t2.value && t1.value != t3.value && t2.value != t3.value) {
    tr.value = "Escaleno: Todos os lados são diferentes.";
    t1.value, t2.value, t3.value = "", "", "";

  }else if (t1.value == t2.value && t1.value == t3.value && t2.value == t3.value) {
    tr.value = "Equilátero: Os três lados são iguais.";
    t1.value, t2.value, t3.value = "", "", "";
  
  }else if (t1.value == t2.value != t3.value || t2.value == t3.value != t1.value || t1.value == t3.value != t2.value) {
    tr.value = "Isósceles: Dois lados iguais.";
    t1.value, t2.value, t3.value = "", "", "";
  }
}



