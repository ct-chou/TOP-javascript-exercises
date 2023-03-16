const fibonacci = function(number) {
    let fib = [1, 1];
    
    if(+number<1) {
        return 'OOPS';
    }
    else if(+number <= 2) {
        return fib[number-1];
    }
    else {
        for(i=2;i<+number;i++) {
            fib[i] = fib[i-1] + fib[i-2];
        }
        return fib[+number-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
