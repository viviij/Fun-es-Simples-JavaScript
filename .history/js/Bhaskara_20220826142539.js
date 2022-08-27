//Selecionando itens do HTML
const bhaskaVA = document.querySelector("#bhaskaraValorA");
const bhaskaVB = document.querySelector("#bhaskaraValorB");
const bhaskaVC = document.querySelector("#bhaskaraValorC");
const vb = document.querySelector("#valorBhaskara");
const cb = document.querySelector("#calcularBhaskara");
//Marcar "erro" caso alguma resposta nao seja preenchida
bhaskaVA.onblur = () => {
  if(bhaskaVA.value == "") {
    bhaskaVA.style = "border-color: #aa0044";
  }else{
    bhaskaVA.style = "color: #000000";
  }
}

bhaskaVB.onblur = () => {
  if(bhaskaVB.value == "") {
    bhaskaVB.style = "border-color: #aa0044";
  }else{
    bhaskaVB.style = "color: #000000";
  }
}

bhaskaVC.onblur = () => {
  if(bhaskaVC.value == "") {
    bhaskaVC.style = "border-color: #aa0044";
  }else{
    bhaskaVC.style = "color: #000000";
  }
}

//Calcular os valores de bhaskara

cb.onclick = () => {
  //Dar foco no input vazio
  if (bhaskaVA.value == "" && bhaskaVB.value != "" && bhaskaVC.value != "") {
    bhaskaVA.focus();
  }else if (bhaskaVB.value == "" && bhaskaVA.value != "" && bhaskaVC.value != "") {
    bhaskaVB.focus();
  }else if (bhaskaVC.value == "" && bhaskaVA.value != "" && bhaskaVB.value != "") {
    bhaskaVC.focus();
  }

  //Função de bhaskara
  const valorDelta = (bhaskaVB.value*bhaskaVB.value) - 4*bhaskaVA.value*(bhaskaVC.value);

  if(valorDelta < 0) {
    valorBhaskara.value = "Delta é negativo";
  }else{
    const calculoDeX = (-bhaskaVB.value+Math.sqrt(valorDelta))/(2*bhaskaVA.value);
    const calculoDeX2 = (-bhaskaVB.value-Math.sqrt(valorDelta))/(2*bhaskaVA.value);
    
    valorBhaskara.value = [calculoDeX.toFixed(1)+0.5, calculoDeX2.toFixed(1)+0.5];
  }

}
