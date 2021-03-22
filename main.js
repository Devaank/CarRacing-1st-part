var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var car1Width = 120;
var car1Height = 70;
var car1Image = "dark-green-car.png";
var car1X = 10;
var car1Y = 10;
var car2Width = 120;
var car2Height = 70;
var car2Image = "red-car.png";
var car2X = 10;
var car2Y = 100;
var backgroundImage = "racing.jpg";
function add() {
backgroundImageTag = new Image();
backgroundImageTag.src=backgroundImage;
backgroundImageTag.onload=uploadBackground;
car1ImageTag = new Image();
car1ImageTag.src=car1Image;
car1ImageTag.onload=uploadCar1;
car2ImageTag = new Image();
car2ImageTag.src=car2Image;
car2ImageTag.onload=uploadCar2;
}
function uploadBackground() {
ctx.drawImage(backgroundImageTag,0,0,canvas.width,canvas.height);
}
function uploadCar1() {
    ctx.drawImage(car1ImageTag,car1X,car1Y,car1Width,car1Height);
    }
    function uploadCar2() {
        ctx.drawImage(car2ImageTag,car2X,car2Y,car2Width,car2Height);
        }
window.addEventListener("keydown",myKeydown);
function myKeydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=="37") {
        car1Left();
        console.log("left");
    }
    if (keyPressed=="38") {
        car1Up();
        console.log("up");
    }
    if (keyPressed=="39") {
     car1Right();
        console.log("right");
    }
    if (keyPressed=="40") {
        car1Down();
        console.log("down");
    }
    if (keyPressed=="87") {
        car2Up();
        console.log("key w");
    }
    if (keyPressed=="83") {
        car2Down();
        console.log("key s");
    }
    if (keyPressed=="65") {
        car2Left();
        console.log("key a");
    }
    if (keyPressed=="68") {
        car2Right();
        console.log("key d");
    }
}
function car1_up() {
    if (car1Y>=0) {
        car1Y=car1Y-10;
        console.log("When up arrow is clicked X= "+car1X+", Y= "+car1Y);
        uploadBackground();
        uploadcar1();
    }
}
function car1_down() {
    if (car1Y<=510) {
        car1Y=car1Y+10;
        console.log("When down arrow is clicked X= "+car1X+", Y= "+car1Y);
        uploadBackground();
        uploadCar1();
    }
}
function car1_left() {
    if (car1X>=0) {
        car1X=car1X-10;
        console.log("When left arrow is clicked X= "+car1X+", Y= "+car1Y);
        uploadBackground();
        uploadCar1();
    }
}
function car1_right() {
    if (car1<=700) {
        car1X=car1X+10;
        console.log("When right arrow is clicked X= "+car1X+", Y= "+car1Y);
        uploadBackground();
        uploadCar1();
    }
}
function car2_up() {
    if (car2Y>=0) {
        car2Y=car2Y-10;
        console.log("When up arrow is clicked X= "+car2X+", Y= "+car2Y);
        uploadBackground();
        uploadcar2();
    }
}
function car2_down() {
    if (car2Y<=510) {
        car2Y=car2Y+10;
        console.log("When down arrow is clicked X= "+car2X+", Y= "+car2Y);
        uploadBackground();
        uploadCar2();
    }
}
function car2_left() {
    if (car2X>=0) {
        car2X=car2X-10;
        console.log("When left arrow is clicked X= "+car2X+", Y= "+car2Y);
        uploadBackground();
        uploadCar2();
    }
}
function car2_right() {
    if (car2<=700) {
        car2X=car2X+10;
        console.log("When right arrow is clicked X= "+car2X+", Y= "+car2Y);
        uploadBackground();
        uploadCar2();
    }
}