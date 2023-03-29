var xEye = 200;
var xEye2 = 290;
var eyeDirection = 1;
var eyeDirection2 = 1;
var browDirection = 1;

var yBrow1 = 200;
var yBrow2 = 200;

var movement = 2;
var size = 22;

var count = 0;
var sizeDirection = 2;

var xBody = 320;
var yBody = 440;
var bodyDirection = 1;

var yNose = 270;
var yNose1 = 230;
var noseDirection = 1;

function setup() {
  movement = floor(random() * 10) + 1;
    createCanvas(500,500);
  }
  
  function draw() {
    
    background(220);
    
    //hair
    rect(160, 150, 180, 300);
    

//head 2.0
ellipse(180,250,60,70)
ellipse(320,250,60,70)

//neck
triangle(250, 350, 0, 500, 500, 500);
rect(210, 300, 80, 90);


    // head
    ellipse(250,250,170,200);
    ellipse(250,300,40,20);
    line(231, 300, 270, 300);
    rect(180, yBrow1, 35, 10);
    rect(270, yBrow2, 35, 10);
    
    //body
    triangle(250, yNose1, 240, yNose, 260, yNose);
    yNose += noseDirection;
    
    if(yNose >= 280 || yNose <= 250)
    {
       noseDirection *= -1;
    }
    square(xBody,yBody,40);
    xBody += bodyDirection;
    yBody += bodyDirection;
    if(xBody >= 350 || xBody <= 250)
    {
       bodyDirection *= -1;
    }
    if(yBody >= 500 || yBody <= 0)
    {
      bodyDirection *= -1;
    }
    line(320,450,360,450);


    // eyes
    circle(xEye,235,30);
    circle(xEye2,235,30);
    point(200,235);
    point(290,235);
    xEye+=eyeDirection;
    xEye2+=eyeDirection2;
    if(xEye2 >= 310 || xEye2 <= 290)
    {
       eyeDirection2 *= -1;
    }

    if(xEye >= 220 || xEye <= 200)
    {
       eyeDirection *= -1;
    }


    //hair 2.0
    
    arc(330, 150, 190, 100, HALF_PI, PI);
    arc(165, 150, 160, 100, PI + PI, HALF_PI);
    
    //text\
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text('Self Portrait', 10, 20);
    textSize(12);
    text('Morgan Speicher', 10, 40);
  }