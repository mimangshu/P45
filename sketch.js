

function preload() {
button=loadImage("button1.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight)
  start=createSprite(width/2,height/2+200)
  start.addImage(button)
  //start.link("www.google.com")
}
function draw() {
  background("lightblue")
  textSize(100)
  fill(0)
 // str=text("WELCOME TO THE GAMING MAZE", width/4-320,height/2)
  //str.link("www.google.com")

drawSprites()
}