// biz logic
// time LOGIc

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

 //AMELIA'S BIZ
//continuous values for each button
var redButton = 1;
var blueButton = 2;
var greenButton = 3;
var yellowButton = 4;
 ///array of user presses
var userArray = [];
//function to clear userArray
var clear = function(){
 }
 //how many times each button is clicked
var redPress = 0;
var bluePress = 0;
var greenPress = 0;
var yellowPress = 0;
 //RICHARD'S BIZ
function rndNumber() {
  return Math.floor(Math.random() * 4) + 1;
};

// array of computer-generated presses
 simonArray = [];

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
  $("#q1").click(function() {
    playSample("green-sound");
  });
  $("#q2").click(function() {
    playSample("red-sound");
  });
  $("#q3").click(function() {
    playSample("yellow-sound");
  });
  $("#q4").click(function() {
    playSample("blue-sound");
  });
});

 // user logic
$(document).ready(function() {
//AMELIA'S USER LOGIC
  $("#red").click(function(){
    userArray.push(redButton);
     redPress += 1;
     console.log(userArray);
     //console.log(redPress);
  });
  $("#blue").click(function(){
    userArray.push(blueButton);
     bluePress += 1;
     console.log(userArray);
     //console.log(bluePress);
  });
  $("#green").click(function(){
    userArray.push(greenButton);
     greenPress += 1;
     console.log(userArray);
     //console.log(greenPress);
  });
  $("#yellow").click(function(){
    userArray.push(yellowButton);
     yellowPress += 1;
     console.log(userArray);
   //console.log(yellowPress);
  });
 //RICHARD'S USER LOGIC
  $("#test-button").click(function(event) {
    event.preventDefault();
    x = rndNumber();
    simonArray.push(x);
    console.log(simonArray);
  });

  $(document).ready(function() {
  $("#new-button").click(function(event) {
    event.preventDefault();

    timerFunction();

  });
});

$(document).ready(function() {
  $("#stop-time").click(function(event) {
    event.preventDefault();

    myStopFunction();

  });
});
 //AZUl'S USER LOGIC
  $("#compareBtn").click(function() {
    if (simonArray.toString() === userArray.toString()) {
      alert("Your memory is impeccable!")
    }
     else if (simonArray.toString() != userArray.toString()) {
      alert("Womp, womp. Try again!")
    }
     else {
      alert("Oh, oh. You broke the game.")
    };
});
 });
