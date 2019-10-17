
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function() {

  var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

});

}

  document.addEventListener("keypress", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});



function makeSound(key) {

    switch (key) {
      case "w":
          var tom1 = new Audio("https://raw.githubusercontent.com/mattk24/Drum-kit/master/tom-1.mp3");
          tom1.play();
        break;

        case "a":
        var tom2 = new Audio("https://raw.githubusercontent.com/mattk24/Drum-kit/master/tom-2.mp3");
        tom2.play();
      break;

      case "s":
      var tom3 = new Audio("https://raw.githubusercontent.com/mattk24/Drum-kit/master/tom-3.mp3");
      tom3.play();
    break;

      case "d":
      var tom4 = new Audio("https://raw.githubusercontent.com/mattk24/Drum-kit/master/tom-4.mp3");
      tom4.play();
    break;

      case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

      case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

      case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
    break;

      default: console.log(buttonInnerHTML);

    }
}

function buttonAnimation(currentkey) {

var activeButton = document.querySelector("." + currentkey);

activeButton.classList.add("pressed");

setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 100);

}
