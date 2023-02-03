const repeatString = function(input, n) {
    let output = '';
    if(n<0) return 'ERROR';
    while(n>0) {
        output += input;
        n--;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
