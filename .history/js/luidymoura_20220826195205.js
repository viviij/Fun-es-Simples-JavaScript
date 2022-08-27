const valorLuidyM = document.querySelector("#valorLuidyMoura")
const resLuidyM = document.querySelector("#resultadoLuidyMoura") 
const calcLuidyM = document.querySelector("#calculoLuidyMoura")
function range(n) {//Função responsavel po ir do 0 até o valor x
  const listaNumerica = []
  for (i = 0; i < n; i++) {
    listaNumerica.push(i+1)
  }

  return listaNumerica
}

function divisivelPor5e9(lista) {//função responsável por descobrir por qual é divisivel 
  for (let contador in lista) {
    //Divisivel apenas por 9 
    if (lista[contador] % 9 == 0 ^ lista[contador] % 5 == 0) {
      console.log("Luidy")   
    }
    
    //divisivel apenas por 5
    if (lista[contador] % 9 == 0 ^ lista[contador] % 5 == 0) {
      console.log(lista[contador], "Moura")   
    }
    
    //divisivel por 5 e 9
    if (lista[contador] % 9 == 0 && lista[contador] % 5 == 0) {
      console.log(lista[contador], "LuidyMoura")
    }else if (lista[contador] % 9 != 0 && lista[contador] % 5 != 0){
      console.log(lista[contador])
    }
  }
}

//Marcar "erro" caso alguma resposta nao seja preenchida
valorLuidyM.onblur = () => {
  if(valorLuidyM.value == "") {
    valorLuidyM.style = "border-color: #aa0044";
  }else{
    valorLuidyM.style = "color: #000000";
  }
}

calcLuidyM.onclick = () => {
  //dar focus no input caso n tenha sido preenchido
  if (valorLuidyM.value == "") {
    valorLuidyM.focus();
  }

  //logica do luidymoura 
  if (valorLuidyM != "") {
    contagem = range(valorLuidyM.value)
    
    //Divisivel por 9 e 5
    for (let contador in contagem) {
      //Divisivel apenas por 9 
      if (contagem[contador] % 9 == 0 ^ contagem[contador] % 5 == 0) {
        alert(contagem[contador])
        console.log("Luidsssy")   
      }
      
      //divisivel apenas por 5
      if (contagem[contador] % 9 == 0 ^ contagem[contador] % 5 == 0) {
        console.log(contagem[contador], "Moura")   
      }
      
      //divisivel por 5 e 9
      if (contagem[contador] % 9 == 0 && contagem[contador] % 5 == 0) {
        console.log(contagem[contador], "LuidyMoura")
      }else if (contagem[contador] % 9 != 0 && contagem[contador] % 5 != 0){
        console.log(contagem[contador])
      }
    }
  }

}


