function removeEven(arr) {
  var odds = [];
  for (let number of arr) {
    if (number % 2 != 0) {
        odds.push(number);
    }
  }

  return odds;
}

console.log(removeEven([3, 2, 41, 3, 34]));
