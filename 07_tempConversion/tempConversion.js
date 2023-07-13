const convertToCelsius = function(temperature) {

  let convertedTemperature = ((temperature - 32) * 5) / 9;

  return Number(convertedTemperature.toFixed(1));

};

const convertToFahrenheit = function(temperature) {

  let convertedTemperature = ((temperature / 5) * 9) +  32;

  return Number(convertedTemperature.toFixed(1));

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
