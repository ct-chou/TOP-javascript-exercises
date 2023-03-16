const palindromes = function (input) {
    let cleanedInput = input.toLowerCase().replace(/\W/g,'');
    let reverse = '';
    for(i=cleanedInput.length-1; i>=0; i--){
        reverse += cleanedInput[i];
    }
    return reverse == cleanedInput;
};

// Do not edit below this line
module.exports = palindromes;
