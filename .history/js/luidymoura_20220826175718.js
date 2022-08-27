const valorLuidyM = document.querySelector("#valorLuidyMoura")

function range(end) {//Função para ir do 0 até o número x
  
  //Divisivel apenas por 9 
  for (let contador in lista) {
    if (lista[contador] % 9 == 0 ^ lista[contador] % 5 == 0) {
      console.log(lista[contador], "Luidy")   
    }
    
    //divisivel apenas por 5
    if (lista[contador] % 9 == 0 ^ lista[contador] % 5 == 0) {
      console.log(lista[contador], "Moura")   
    }
    console.log(lista[contador], "n foi")
    
    //divisivel por 5 e 9

    if (lista[contador] % 9 == 0 && lista[contador] % 5 == 0) {

    }else {
      console.log(lista[contador])
    }
  }
}

console.log(range(45))
// valorLuidyM.onclick = () => {
  
// }
lista = [1, 4, 8, 19, 27]


