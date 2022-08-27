//Selecionando itens do HTML
const trianLado1 = document.querySelector("#trianguloLado1");
const trianLado2 = document.querySelector("#trianguloLado2");
const trianLado3 = document.querySelector("#trianguloLado3");
const tipoDeTrian = document.querySelector("#tipoDeTriangulo");
const classTrian = document.querySelector("#classificacaoTriangulo") ;
const limparInput = document.querySelector("#limparInputBotao");
//Marcar "erro" caso alguma resposta nao seja preenchida
trianLado1.onblur = () => {
  if(trianLado1.value == "") {
    trianLado1.style = "border-color: #aa0044";
  }else{
    trianLado1.style = "color: #000000";
  }
}

trianLado2.onblur = () => {
  if(trianLado2.value == "") {
    trianLado2.style = "border-color: #aa0044";
  }else{
    trianLado2.style = "color: #000000";
  }
}

trianLado3.onblur = () => {
  if(trianLado3.value == "") {
    trianLado3.style = "border-color: #aa0044";
  }else{
    trianLado3.style = "color: #000000";
  }
}

//Limpar input apos clicar no botao Limpar
limparInput.onclick = () => {
  trianLado1.value = "";
  trianLado2.value = "";
  trianLado3.value = "";
  tipoDeTrian.value = "";
}

//Classificar o tipo de triangulo apos clicar no botao Classificar
classTrian.onclick = () => {
  //Dar foco no input vazio
  if (trianLado1.value == "" && trianLado2.value != "" && trianLado3.value != "") {
    trianLado1.focus();
  }else if (trianLado2.value == "" && trianLado1.value != "" && trianLado3.value != "") {
    trianLado2.focus();
  }else if (trianLado3.value == "" && trianLado1.value != "" && trianLado2.value != "") {
    trianLado3.focus();
  }

  if(trianLado1.value != "" && trianLado2.value != "" && trianLado3.value != "") {

    if (trianLado1.value != trianLado2.value && trianLado1.value != trianLado3.value && trianLado2.value != trianLado3.value) {
      tipoDeTrian.value = "Escaleno: Todos os lados são diferentes.";

    }else if (trianLado1.value == trianLado2.value && trianLado1.value == trianLado3.value && trianLado2.value == trianLado3.value) {
      tipoDeTrian.value = "Equilátero: Os três lados são iguais.";
    
    }else{
      tipoDeTrian.value = "Isósceles: Dois lados iguais.";

    }
  }  
}



