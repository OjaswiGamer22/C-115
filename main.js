function preload(){
clown_nose=loadImage("https://i.postimg.cc/JzZ08T8g/clown-removebg-preview.png");
devil=loadImage("https://i.postimg.cc/WpxJPqrd/devil-removebg-preview.png");
left_wing=loadImage("https://i.postimg.cc/L5kS7WLB/lefft-removebg-preview.png");
right_wing=loadImage("https://i.postimg.cc/d0ZzpXKk/rright-removebg-preview.png");
sunglasses=loadImage("https://i.postimg.cc/MTdbD6ry/sunglasses-removebg-preview.png");
moustache=loadImage("https://i.postimg.cc/qR5QrBXp/moustache-removebg-preview.png");
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,ModelLoaded);
posenet.on("pose",gotResults);
}

function draw(){
image(video,0,0,300,300);
}

function snap(){
   save("filter_image.png");
}

function ModelLoaded(){
   console.log("PoseNet is initialized");
}

function gotResults(results){
if(results.length > 0){
   console.log(results);
   console.log("Nose x is ="+results[0].pose.nose.x);
   console.log("Nose y is ="+results[0].pose.nose.y);

}
}