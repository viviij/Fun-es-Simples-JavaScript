//Selecionando itens do HTML
const bvA = document.querySelector("#bhaskaraValorA");
const bvB = document.querySelector("#bhaskaraValorB");
const bvC = document.querySelector("#bhaskaraValorC");
const vb = document.querySelector("#valorBhaskara");
const cb = document.querySelector("#calcularBhaskara");
//Marcar "erro" caso alguma resposta nao seja preenchida
bvA.onblur = () => {
  if(bvA.value == "") {
    bvA.style = "border-color: #aa0044";
  }else{
    bvA.style = "color: #000000";
  }
}

bvB.onblur = () => {
  if(bvB.value == "") {
    bvB.style = "border-color: #aa0044";
  }else{
    bvB.style = "color: #000000";
  }
}

bvC.onblur = () => {
  if(bvC.value == "") {
    bvC.style = "border-color: #aa0044";
  }else{
    bvC.style = "color: #000000";
  }
}

//Calcular os valores de bhaskara

cb.onclick = () => {
  console.log([Array(5).keys()]);
  //Dar foco no input vazio
  if (bvA.value == "" && bvB.value != "" && bvC.value != "") {
    bvA.focus();
  }else if (bvB.value == "" && bvA.value != "" && bvC.value != "") {
    bvB.focus();
  }else if (bvC.value == "" && bvA.value != "" && bvB.value != "") {
    bvC.focus();
  }

  //Função de bhaskara
  const valorDelta = (bvB.value*bvB.value) - 4*bvA.value*(bvC.value);
  if(valorDelta < 0) {
    valorBhaskara.value = "Delta é negativo";
  }else{
    const calculoDeX = (-bvB.value+Math.sqrt(valorDelta))/(2*bvA.value);
    const calculoDeX2 = (-bvB.value-Math.sqrt(valorDelta))/(2*bvA.value);
    
    valorBhaskara.value = [calculoDeX.toFixed(1), calculoDeX2.toFixed(1)];
  }

}
