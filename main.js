Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });
  camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}
function draw() {
}