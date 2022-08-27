function range(end) {
  listaNumerica = []
  contadorLista = 0
  for(i = 0; i != end; i++) {
    listaNumerica.push(i)
    console.log(listaNumerica[contadorLista])
    contadorLista++
  }
  return "pronto"
}
console.log(range(10))

