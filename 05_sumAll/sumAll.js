const sumAll = function(startNumber, endNumber) {
    let totalSum = 0;

    if (!(typeof startNumber === "number") || !(typeof endNumber === "number")) {
        return "ERROR";
    }

    if (endNumber < 0 || startNumber < 0) {
        return "ERROR";

    } else if (startNumber > endNumber) {
        for (i = 0; i < startNumber; i++) {
            totalSum = totalSum + (endNumber + i);
        }    
    } else if (endNumber > startNumber) {
        for(i = 0; i < endNumber; i++) {
            totalSum = totalSum + (startNumber + i);
        }
    }

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
