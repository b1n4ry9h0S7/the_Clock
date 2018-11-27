function setup() {
    createCanvas(1000,1000);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    translate(1000/2,1000/2);
    rotate(-90);
    let h = hour();
    let m = minute();
    let s = second();
    strokeWeight(8);
    stroke(255, 100, 150);
    noFill();
    let secondAngle = map(s, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, secondAngle);
    stroke(150, 100, 255);
    let minuteAngle = map(m, 0, 60, 0, 360);
    arc(0, 0, 280, 280, 0, minuteAngle);
    stroke(150, 255, 100);
    let hourAngle = map(h % 12, 0, 12, 0, 360);
    arc(0, 0, 260, 260, 0, hourAngle);
    push();
    rotate(secondAngle);
    stroke(255, 100, 150);
    line(0, 0, 100, 0);
    pop();
    push();
    rotate(minuteAngle);
    stroke(150, 100, 255);
    line(0, 0, 75, 0);
    pop();
    push();
    rotate(hourAngle);
    stroke(150, 255, 100);
    line(0, 0, 50, 0);
    pop();
    stroke(255);
    point(0, 0);
}