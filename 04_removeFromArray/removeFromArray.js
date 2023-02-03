const removeFromArray = function(...args) {
    let inputArray = args[0];
    let output = [];
    let addFlag = False;

    for(i=0;i<inputArray.length;i++) {
        
        if(inputArray[i] != args[1]) {
            output.push(inputArray[i]);
        }
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
