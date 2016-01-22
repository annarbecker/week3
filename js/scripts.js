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
    var returnedNumberArray = pingPong(number);

// empty ul so that when a new number is entered into the field the prexisting returnedNumberArray list is cleared
    $("ul").empty();

// loop through returnedNumberArray and add to list
    for (var i = 0; i < returnedNumberArray.length; i++) {
      var listItem = document.createElement("li");
      listItem.innerHTML = returnedNumberArray[i];
      var numberList = document.getElementById("ping-pong");
      numberList.appendChild(listItem);
    }

// in DOM user appendChild to add child element instead of append



    // $("#ping-pong").text(returnedNumberArray);
    $("#result").show();

    event.preventDefault();
  });
});
