function range(end) {//Função para ir do 0 até o número x
  listaNumerica = []
  contadorLista = 0
  for(i = 0; i != end+1; i++) {
    listaNumerica.push(i)
    contadorLista++
    if (divisivelPor9 % 9 == 0) {

    }
  }
  console.log(listaNumerica)
}

const arr = [1935];
const arrs = arr[0][1]
console.log(arrs)
const divisivelPor9 = (accumulator, curr) => accumulator + curr;
if (divisivelPor9 % 9 == 0) {
  console.log(arr.reduce(divisivelPor9));
}


function getSum(n)
{
    var sum = 0;
    while (n != 0) {
        sum = n % 10;
        n = parseInt(n / 10);
    }
    return sum;
}
 
// Driver code
var n = 1935;
console.log(getSum(n))