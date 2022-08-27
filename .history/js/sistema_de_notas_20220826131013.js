function range(end) {
  listaNumerica = []
  contadorLista = 0
  for(i = 1; i != end; i++) {
    listaNumerica.push(i)
    console.log(listaNumerica[contadorLista])
    contadorLista++
  }
}
console.log(range(10))

