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
  if (notaRec.value > 100 || notaRec.value < 0) {
    arreNota.value = "Valor inválido! Por favor digite um numero de 0 a 100.";
  }else if (notaRec.value < 38) {
    return arreNota.value = "Nem com milagre esse ser vai passar :("
  }

  const tabuadaDo5 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

  for (let i in tabuadaDo5) {
    const int = (nota) => {
      nota = Number.parseFloat(nota);
      return nota
    }

    if (int(notaRec.value)+2 >= tabuadaDo5[i] && int(notaRec.value)-2 <= tabuadaDo5[i]-5) {
      arreNota.value = tabuadaDo5[i];
    }
  }
}