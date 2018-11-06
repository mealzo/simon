// biz logic
var userArray = [];
var simonArray = [];
var turn;
var id = 0;
var color = 0;
var correct;
//continuous values for each button
var greenButton = 1;
var redButton = 2;
var yellowButton = 3;
var blueButton = 4;

// //how many times each button is clicked
// var redPress = 0;
// var bluePress = 0;
// var greenPress = 0;
// var yellowPress = 0;
///start game
function startGame(){
  userArray= [];
  simonArray= [];
  turn = 0;
  turn++;
  computerTurn();
}
///computer Turn Function
function computerTurn(){
  x = rndNumber();
  simonArray.push(x);
  console.log(simonArray);
  // debugger;

    for (var i = 0; i < simonArray.length; i++) {
     if(simonArray[i] === greenButton){
         playSample("green-sound");
     }if (simonArray[i] === redButton) {
       playSample("red-sound");
     }if (simonArray[i] === yellowButton) {
       playSample("yellow-sound");
     }if (simonArray[i] === blueButton){
       playSample("blue-sound");
     }
     if (i == simonArray.length) {
      clearInterval(myinterval);
     }
   }



    //loop through array and display color and play sound in sequence

  // }, 1000);
  userTurn();
  console.log(simonArray);
}
///user turn Function
function userTurn(){
  $("#q1").click(function() {
    playSample("green-sound");
    userArray.push(greenButton);
     // greenPress += 1;
     console.log(userArray);
  });
  $("#q2").click(function() {
    playSample("red-sound");
    userArray.push(redButton);
     // redPress += 1;
     console.log(userArray);
  });
  $("#q3").click(function() {
    playSample("yellow-sound");
    userArray.push(yellowButton);
     // yellowPress += 1;
     console.log(userArray);
  });
  $("#q4").click(function() {
    playSample("blue-sound");
    userArray.push(blueButton);
     // bluePress += 1;
     console.log(userArray);
  });
  if(compare()){
    turn++;
    computerTurn();
  }else {
    startGame();
  }
}
///function for checking arrays are equal
function compare() {
    if (simonArray.toString() === userArray.toString()) {
      correct = true
    }
     else if (simonArray.toString() != userArray.toString()) {
      correct = false
    }
     else {
      alert("Oh, oh. You broke the game.")
    };
    return correct;
};

// time LOGIc
//////STARTS practice logic
var myVar;

function timerFunction() {
    myVar = setInterval(alertFunc, 800);
}

function alertFunc() {
    console.log(simonArray);
}

function myStopFunction() {
    clearInterval(myVar);
}


 //RICHARD'S BIZ random number gen
function rndNumber() {
  return Math.floor(Math.random() * 4) + 1;
};
 // generate random number between 1 and 4
 function rndArray() {
  for (var i = 0; i < array.length; i++) {
    simonArray.push(x);
  }
};

// play audio
function playSample(sampleName) {
  var sample = document.getElementById(sampleName);
    if (sample.paused) {
        sample.play();
    }else{
        sample.currentTime = 0
    }
}

$(document).ready(function() {
  $("#start-button").click(function(){
      startGame();
  });

  $("#q1").click(function() {
    playSample("green-sound");
    userArray.push(greenButton);
    function removeStyle() {
      $("#q1").removeAttr('style');
    }
    $(this).css("background-image", "radial-gradient(white, #0bc455, #194c2d)");
    setInterval(removeStyle, 1000);
     // greenPress += 1;
     console.log(userArray);

  });
  $("#q2").click(function() {
    playSample("red-sound");
    userArray.push(redButton);
     // redPress += 1;
     function removeStyle() {
      $("#q2").removeAttr('style');
    }
    $("#q2").css("background-image", "radial-gradient(white, #e00808, #4c1818)");
     setInterval(removeStyle, 1000);
     console.log(userArray);

  });
  $("#q3").click(function() {
    playSample("yellow-sound");
    userArray.push(yellowButton);
    function removeStyle() {
      $("#q3").removeAttr('style');
    }
    $("#q3").css("background-image", "radial-gradient(white, #c0c40b, #484c19)");
     setInterval(removeStyle, 1000);
     // yellowPress += 1;
     console.log(userArray);
  });
  $("#q4").click(function() {
    playSample("blue-sound");
    userArray.push(blueButton);
    function removeStyle() {
      $("#q4").removeAttr('style');
    }
    $("#q4").css("background-image", "radial-gradient(white, #0b45c4, #19224c)");
     setInterval(removeStyle, 1000);
     // bluePress += 1;
     console.log(userArray);
  });
});

//  //RICHARD'S USER LOGIC
//   $("#test-button").click(function(event) {
//     event.preventDefault();
//     x = rndNumber();
//     simonArray.push(x);
//     console.log(simonArray);
//   });
//
//   $(document).ready(function() {
//   $("#new-button").click(function(event) {
//     event.preventDefault();
//
//     timerFunction();
//
//   });
// });

// $(document).ready(function() {
//   $("#stop-time").click(function(event) {
//     event.preventDefault();
//
//     myStopFunction();
//
//   });
// });
 // //AZUl'S USER LOGIC
 //  $("#compareBtn").click(function() {
 //    if (simonArray.toString() === userArray.toString()) {
 //      alert("Your memory is impeccable!")
 //    }
 //     else if (simonArray.toString() != userArray.toString()) {
 //      alert("Womp, womp. Try again!")
 //    }
 //     else {
 //      alert("Oh, oh. You broke the game.")
 //    };
