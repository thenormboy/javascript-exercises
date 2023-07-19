const fibonacci = function() {
let initialNumber = 1;
let currentNumber = 1;
let heldNumber = 1;

if (arguments[0] == 0) {
    return initialNumber;
}

if (arguments[0] == 1) {
    return currentNumber;
}

if (arguments[0] < 0) {
    return 'OOPS';
}

for (i = 0; i < (arguments[0] - 2); i++) {
    currentNumber = currentNumber + initialNumber;
    initialNumber = heldNumber;
    heldNumber = currentNumber;
}

return currentNumber;

};

// Do not edit below this line
module.exports = fibonacci;
