var characterX = 100;
var characterY = 100;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var shapeX1 = 100;
var shapeY1 = 20;
var shapeX1Speed;
var shapeY1Speed;

var mouseShapeX;
var mouseShapeY;

var shapeXs = [];
var shapeYs = [];
var myDiameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

var shape1, shape2, shape3;

function setup() {
    createCanvas(500, 500);
    shape1 = new Rectangle(100,100,20,30,120,20,200);
    shape2 = new Rectangle(200,300,50,80,220,120,20);
    shape3 = new Rectangle(150, 250, 30, 60, 170, 40, 80);
    for (var i = 0; i < 5; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        myDiameters[i] = getRandomNumber(30);
    }
    createCharacter(200, 350);
}

function draw() {
    background(173, 216, 230);
    var RColor = random(255);
    var GColor = random(255);
    var BColor = random(255);
    for (var i = 0; i < shapeXs.length; i++) {
        fill(RColor, GColor, BColor);
        circle(shapeXs[i], shapeYs[i], myDiameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

       Display();

        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];


        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }


    exit();
    createBorders(10);
    CelebrationMessage();
    drawCharacter();
    characterMovement();
    ObstacleCreation();
    ObstacleMovement();
}

function Display() {
    shape1.draw();
    shape2.draw();
    shape3.draw();
}

function CelebrationMessage() {
    if (characterX > width && characterY > width - 50) {
        fill(0);
        stroke(5);
        textSize(26);
        text("Hooray! You Win!", width / 2 - 50, height / 2 - 50);
    }

}

function exit() {
    textSize(16);
    fill(0,0,0);
    text("EXIT", width - 50, height - 50)
}

function characterMovement() {
    if (keyIsDown(w)) {
        characterY -= 5;
    }
    if (keyIsDown(s)) {
        characterY += 5;
    }
    if (keyIsDown(a)) {
        characterX -= 5;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) {
        characterX += 5;
    }

    MouseCharacter();
}

function ObstacleMovement() {
    shapeX1Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeY1Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    shapeX1 += shapeX1Speed;
    shapeY1 += shapeY1Speed;

    if (shapeX1 > width) {
        shapeX1 = 0;
    }
    if (shapeX1 < 0) {
        shapeX1 = width;
    }
    if (shapeY1 > height) {
        shapeY1 = 0;
    }
    if (shapeY1 < 0) {
        shapeY1 = height;
    }

    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    if (shapeX > width) {
        shapeX = 0;
    }
    if (shapeX < 0) {
        shapeX = width;
    }
    if (shapeY > height) {
        shapeY = 0;
    }
    if (shapeY < 0) {
        shapeY = height;
    }

}
function ObstacleCreation() {
    fill(100, 50, 150);
    circle(shapeX1, shapeY1, 20);
    fill(23, 40, 123);
    circle(shapeX, shapeY, 15);


}


function MouseCharacter() {
    fill(150, 90, 140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
    console.log(characterX);
}

function drawCharacter() {
    fill(23, 40, 123);
    circle(characterX, characterY, 35);
}

function createBorders(thickness) {
    fill(0,0,0);
    rect(0, 0, width, thickness);
    rect(0, 0, thickness, height);
    rect(0, height - thickness, width, thickness);
    rect(width - thickness, 0, thickness, height - 50);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
