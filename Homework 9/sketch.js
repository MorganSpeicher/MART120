function setup() {
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
    rect(180, 200, 35, 10);
    rect(270, 200, 35, 10);
    triangle(250, 230, 240, 270, 260, 270);
    square(320,440,40);
    line(320,450,360,450);


    // eyes
    circle(200,235,30);
    circle(290,235,30);
    point(200,235);
    point(290,235);

    //hair 2.0
    
    arc(330, 150, 190, 100, HALF_PI, PI);
    arc(165, 150, 160, 100, PI + PI, HALF_PI);
    
    //text
    textSize(20);
    text('Self Portrait', 10, 20);
    textSize(12);
    text('Morgan Speicher', 10, 40);
  }