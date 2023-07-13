const reverseString = function(string) {
    let stringArray = [];

    for (i = 0; i < string.length; i++) {
        stringArray[i] = string.charAt(i);
    }

    stringArray.reverse();

    return stringArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
