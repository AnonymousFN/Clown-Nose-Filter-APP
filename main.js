 function preload(){
var fqw=loadImage("https://i.postimg.cc/Cxjr3PxR/images-removebg-preview.png")
 }
 function setup(){
canvas=createCanvas(400,400)
canvas.center()
video=createCapture(VIDEO)
video.hide()
gg=ml5.poseNet(video,modelLoaded)
gg.on('pose',gotPoses)
 }
 function draw(){
image(video,0,0,400,400)
//fill(255,0,0)
//stroke(255,0,0)
//circle(x_nose,y_nose,24)
image(fqw,x_nose,y_nose,30,30)

 }
 function dg(){
save("bruh-bruh-bruh.png")
 }
 function modelLoaded(){
console.log("Posenet is initialized")
 }
 function gotPoses(result){
if(result.length>0){
console.log(result)
console.log("x value of nose="+result[0].pose.nose.x)
console.log("y value of nose="+result[0].pose.nose.y)
x_nose=result[0].pose.nose.x-100
y_nose=result[0].pose.nose.y-50
}
 }
var x_nose=0
var y_nose=0