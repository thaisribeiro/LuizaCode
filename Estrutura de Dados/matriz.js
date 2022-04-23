/**
 * Exercicio 1 - Refatorar nomes de variaveis e incrementar retorno de numeros impares
 */
function removeEven(arr) {
  let odds = [];
  for (let number of arr) {
    if (number % 2 === 0) {
        odds.push(number);
    }
  }

  return odds;
}

console.log(removeEven([3, 2, 41, 3, 34]));
