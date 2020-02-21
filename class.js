let bubble1;
let bubble2;

function setup() {
    createCanvas(600, 400);
    bubble1 = new Bubble();
    bubble2 = new Bubble();
    bubble3 = new Bubble();
}

function draw() {
    background(0);
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
    bubble3.move();
    bubble3.show();
    console.log(bubble1);
}

class Bubble {
    constructor() {
        this.x = 200;
        this.y = 150;
    }
    move() {
        this.x = bubble1.x + random(-1, 1);
        this.y = bubble1.y + random(-1, 1);
        this.x = bubble2.x + random(-5, 5);
        this.y = bubble2.y + random(-5, 5);
        this.x = bubble3.x + random(-10, 10);
        this.y = bubble3.y + random(-10, 10);
    }
    show() {
        stroke('pink');
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    }
}

