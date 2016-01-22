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

$(document).ready(function() {
  $("form#userNumber").submit(function(event) {

    var number = parseInt($("input#number").val());
    if (number <= 0){
      alert("Please enter a number greater than or equal to 1!");
    }
    var returnedNumberArray = pingPong(number);

    $("ul").empty();

    for (var i = 0; i < returnedNumberArray.length; i++) {
      var listItem = document.createElement("li");
      listItem.innerHTML = returnedNumberArray[i];
      var numberList = document.getElementById("ping-pong");
      numberList.appendChild(listItem);
    }

    $("#result").show();

    event.preventDefault();
  });
});
