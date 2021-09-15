noseX=0;
noseY=0;

function preload(){
clownface=loadImage('https://i.postimg.cc/L4GZwGFK/Lips1234.png');
}

function setup(){
    canvas = createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("poseNet Is Initialized");
}
function draw(){
image(video,0,0,400,300);
}

function take_snapshot(){
    save('PersonWithLipstick.png');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

    }
    noseX=results[0].pose.nose.x-120;
    noseY=results[0].pose.nose.y-60;
}

function draw(){
    image(video,0,0,400,300);
    image(clownface,noseX,noseY,200,150);
    fill(0,255,0);
    stroke(255,0,0);
    //circle(noseX,noseY,70);
}