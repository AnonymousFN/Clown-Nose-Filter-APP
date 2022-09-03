var x_nose=0
var y_nose=0
 function preload(){
var image1 =loadImage("https://i.postimg.cc/mZ3x9y9N/istockphoto-1192834521-612x612.jpg")
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

image(image1,x_nose,y_nose,30,30)

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
