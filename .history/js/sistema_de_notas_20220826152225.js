const notaRec = document.querySelector("#notaRecebida");
const arreNota = document.querySelector("#arredondamentoNota");
const calcNota = document.querySelector("#calcularNota");
const limparNota = document.querySelector("#limparNota")

//Marcar "erro" caso alguma resposta nao seja preenchida
notaRec.onblur = () => {
  if(notaRec.value == "") {
    notaRec.style = "border-color: #aa0044";
  }else{
    notaRec.style = "color: #000000";
  }
}

//Limpar input apos clicar no botao Limpar
limparNota.onclick = () => {
  notaRec.value = "";
  arreNota.value = "";
}

calcNota.onclick = () => {
  //Dar foco no input vazio
  if (notaRec.value == "") {
    notaRec.focus();
  }

  //Função do calculo da nota
  if (notaRec.value > 100) {
    arreNota.value = "Valor inválido! Por favor digite um numero de 0 a 100.";
  }
}