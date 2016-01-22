var pingPong = function (number) {
  var numberArray = [];
  for (var i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numberArray.push("pingpong");
    }
    else if (i % 5 === 0) {
      numberArray.push("pong");
    }
    else if (i % 3 === 0) {
      numberArray.push("ping");
    }
    else {
      numberArray.push(i);
    }
  }
  return numberArray;
};

// $(document).ready(function() {
//
// });
