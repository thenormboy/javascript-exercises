const repeatString = function(string, number) {
    repeatedString = ''

    if (number < 0) {
        return "ERROR";
    }

    for (let i = 0; i < number; i++) {
        repeatedString = repeatedString + string;
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
