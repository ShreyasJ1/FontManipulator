difference = 0;
left_wrist_x = 0;
right_wrist_x = 0;


function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(600, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("model is loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);
        console.log("left wrist x = " + left_wrist_x + ", right wrist x = " + right_wrist_x + ", difference = " + difference);
    }
}

function draw() {
    fill("white");
    stroke("black");
    textSize(difference);
    text("Shreyas" , 50 , 50);
    document.getElementById("font_size").innerHTML = "Font size of the text is - " + difference + "px";
}