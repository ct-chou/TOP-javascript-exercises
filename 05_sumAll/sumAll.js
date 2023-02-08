const sumAll = function(x, y) {
    let total = 0;
    let start = x;
    let end = y;

    if(x < 0 || y < 0) {
        return 'ERROR';
    }
    
    if(typeof x != 'number' || typeof y != 'number'){
        return 'ERROR';
    }

    if(y<x){
        start = y;
        end = x;
    }
    for(let i=start;i<=end;i++){
        total+=i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
