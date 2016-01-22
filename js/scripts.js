function countUp(number) {
  var numberArray = [];
  for (var i = 1; i <= number; i++) {
    numberArray.push(i);
  }
  return numberArray;
};

var pingPong = function(number) {
  if (number % 5 === 0) {
    return "pong";
  }
  else if (number % 3 === 0) {
    return "ping";
  }
};
