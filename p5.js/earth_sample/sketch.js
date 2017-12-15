var angle = 0;
var value;
function preload(){
  img_mars = loadImage("./Mars2.jpg");
  img_earth = loadImage("./Earth_difuse.jpg");
  // img_moon = loadImage("./Moon.jpg");
}

function mouseDragged(){
  value = value + 5;
  if (value > 10000){
    value = 0;
    console.log(value);
  }
  return value;
}
function setup() {
  // put setup code here
  createCanvas(800, 800, WEBGL);
}

function draw() {
  background(51);
  texture(img_earth);
  // rotateY(angle);
  var v_inclinado = createVector(0,1,0);
  rotate(angle*0.1, v_inclinado);
  ellipsoid(100);


  translate(mouseDragged(), 0);

  // texture(img_mars);
  // ellipsoid(50);


  angle += 0.1;
  // ellipse(200,200, 100, 100);

}
