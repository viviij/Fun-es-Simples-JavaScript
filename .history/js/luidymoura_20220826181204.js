const valorLuidyM = document.querySelector("#valorLuidyMoura")

function range() {//Função para ir do 0 até o número x
  const listaNumerica = []
  for (i = 0; i == 45; i++) {
    listaNumerica.push(i)

  }
  return listaNumerica
}
a = range();
console.log(a)

function divisivelPor5e9(lista) {
  for (let contador in lista) {
    //Divisivel apenas por 9 
    if (lista[contador] % 9 == 0 ^ lista[contador] % 5 == 0) {
      console.log(lista[contador], "Luidy")   
    }
    
    //divisivel apenas por 5
    if (lista[contador] % 9 == 0 ^ lista[contador] % 5 == 0) {
      console.log(lista[contador], "Moura")   
    }
    
    //divisivel por 5 e 9
    if (lista[contador] % 9 == 0 && lista[contador] % 5 == 0) {
      console.log(lista[contador], "LuidyMoura")
    }else {
      console.log(lista[contador])
    }
  }
}




