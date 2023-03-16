const add = function(...args) {
	return args[0] + args[1];
};

const subtract = function(x, y) {
	return x-y;
};

const sum = function(input) {
  if(input === undefined || input.length == 0)
    return 0;
  else 
    return input.reduce((total, number) => total+number,0);
}


const multiply = function(input) {
  if(input === undefined || input.length == 0)
    return 0;
  else 
    return input.reduce((total, number) => total*number,1);
};

const power = function(x, y) {
	return x**y;
}
const factorial = function(x) {
	if(x==0) return 1;
  else {
    let factorial = 1;
    for(i=x;i>0;i--){
      factorial *= i;
    }
    return factorial;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
