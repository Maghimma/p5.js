function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 300);
    
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    
    fill("rgb(255, 175, 175)");
    stroke("rgb(255, 175, 175)");
    circle(30, 30, 50);

    fill("rgb(155, 232, 255)");
    stroke("rgb(155, 232, 255)");
    circle(610, 30, 50);

    fill("rgb(217, 170, 255)");
    stroke("rgb(217, 170, 255)");
    circle(30, 450, 50);

    fill("rgb(174, 179, 255)");
    stroke("rgb(174, 179, 255)");
    circle(610, 450, 50);
}

function take_snapshot() {
    save('picture.png')
}

function filter_tint() {
    tint_color = document.getElementById("color").value;
}
