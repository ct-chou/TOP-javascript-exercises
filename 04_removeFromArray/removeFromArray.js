const removeFromArray = function(...args) {
    let inputArray = args[0];
    let output = [];
    let addFlag = true;

    for(i=0;i<inputArray.length;i++) {
        for(j=1;j<args.length;j++) {
            if(inputArray[i] === args[j]) {
                addFlag = false;
                break;
            }
        }
        if(addFlag) {
            output.push(inputArray[i]);
        }
        addFlag = true;
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
