const palindromes = function (sentence) {

    let firstHalf = '';
    let secondHalf = '';

    let newSentence = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    newSentence = newSentence.replaceAll(' ',"").toLowerCase();
    let length = newSentence.length;
    
    if (newSentence.length % 2 == 0) {
        firstHalf = newSentence.substr(0, length / 2);
        secondHalf = newSentence.substr(-length / 2);
        secondHalfArray = secondHalf.split('').reverse().join("");

        console.log(firstHalf);
        console.log(secondHalfArray);

        if (firstHalf == secondHalfArray) {
            return true;
        } else {
            return false;
        }
    } else if (newSentence.length % 2 == 1) {
        firstHalf = newSentence.substr(0, (length / 2).toFixed(0) - 1 );
        secondHalf = newSentence.substr(-(length / 2).toFixed(0) + 1);
        secondHalfArray = secondHalf.split('').reverse().join("");

        console.log(firstHalf);
        console.log(secondHalfArray);

        if (firstHalf == secondHalfArray) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
