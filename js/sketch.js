let timer = 0.5;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    rectMode(CENTER);
}

function draw() {
    if (frameCount % (timer * 60) == 0 && !mouseIsPressed) {
        generator(width / 2, height / 2, height - 150);
    }
}

function generator(x, y, size) {
    for (let offset = size; offset > 0; offset -= 10) {
        fill(random(255, 100));


        noStroke();
        console.log(offset);
    }
    translate(width / 2, height / 2);
    translate(p5.Vector.fromAngle(millis() / 20, 400));
    rect(200, 200, 5500, 550);
    rect(200, 800, 5500, 55);
    rect(200, 800, 55, 5500);
    rect(100, 800, 5500, 550);

}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}