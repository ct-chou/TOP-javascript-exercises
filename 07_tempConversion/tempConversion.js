const convertToCelsius = function(tempInput) {
  return Math.round(10*(tempInput - 32) * 5/9)/10;
};

const convertToFahrenheit = function(tempInput) {
  return Math.round(10*(tempInput * 9/5 + 32))/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
