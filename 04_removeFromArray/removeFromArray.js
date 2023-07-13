const removeFromArray = function(ogArray, ...otherArgs) {

    let newArray = [];
    let newArrayIndex = 0

    for (i = 0; i < ogArray.length; i++) {
        if (!otherArgs.includes(ogArray[i])) {
            newArray[newArrayIndex] = ogArray[i];
            newArrayIndex += 1;
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
