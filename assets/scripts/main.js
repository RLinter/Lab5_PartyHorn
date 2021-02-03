// main.js
var volnum = document.getElementById("volume-number");
var volslide = document.getElementById("volume-slider");
var volimg = document.getElementById("volume-image");
var hornimg = document.getElementById("sound-image");
var horn = document.getElementById("horn-sound");

// Events for volume slider
document.getElementById("volume-slider").addEventListener(
    "input", changeVolnum
);
function changeVolnum() {
    horn.volume = volslide.value / 100;
    if(horn.volume == 0){
        document.getElementById("honk-btn").disabled = true;
    } else {
        document.getElementById("honk-btn").disabled = false;
    }
    volnum.value = volslide.value;
    if(volslide.value >= 67){
        volimg.src = "./assets/media/icons/volume-level-3.svg";
    } else if(volslide.value >=34 && volslide.value <67){
        volimg.src = "./assets/media/icons/volume-level-2.svg";
    } else if(volslide.value >=1 && volslide.value <34){
        volimg.src = "./assets/media/icons/volume-level-1.svg";
    } else {
        volimg.src = "./assets/media/icons/volume-level-0.svg";
    }
}

// Events for volume number
document.getElementById("volume-number").addEventListener(
    "input", changeVolslide
);
function changeVolslide() {
    horn.volume = volnum.value / 100;
    if(horn.volume == 0){
        document.getElementById("honk-btn").disabled = true;
    } else {
        document.getElementById("honk-btn").disabled = false;
    }
    volslide.value = volnum.value;
    if(volnum.value >= 67){
        volimg.src = "./assets/media/icons/volume-level-3.svg";
    } else if(volnum.value >=34 && volnum.value <67){
        volimg.src = "./assets/media/icons/volume-level-2.svg";
    } else if(volnum.value >=1 && volnum.value <34){
        volimg.src = "./assets/media/icons/volume-level-1.svg";
    } else {
        volimg.src = "./assets/media/icons/volume-level-0.svg";
    }
}

// Events for selecting audio
document.getElementById("radio-air-horn").addEventListener(
    "click", function(){
        hornimg.src = "./assets/media/images/air-horn.svg";
        horn.src = "./assets/media/audio/air-horn.mp3";
    }
);
document.getElementById("radio-car-horn").addEventListener(
    "click", function(){
        hornimg.src = "./assets/media/images/car.svg";
        horn.src = "./assets/media/audio/car-horn.mp3";
    }
);
document.getElementById("radio-party-horn").addEventListener(
    "click", function(){
        hornimg.src = "./assets/media/images/party-horn.svg";
        horn.src = "./assets/media/audio/party-horn.mp3"
    }
);

// Events for honk
document.getElementById("honk-btn").addEventListener(
    "click", function(event){
        document.getElementById("horn-sound").play();
        event.preventDefault();
    }
);
