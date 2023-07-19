const add = function(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(numberArray) {
	return numberArray.reduce((total, number) => total + number, 0);
};

const multiply = function() {
  const args = [...arguments];

  return args.reduce((total, number) => total * number, 1);
};

const power = function(firstNumber, secondNumber) {
	return firstNumber ** secondNumber;
};

const factorial = function(number) {
  let totalResult = 1;
	for (i = 1; i < (number + 1); i++) {
    totalResult = totalResult * i;
  }
  return totalResult;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
