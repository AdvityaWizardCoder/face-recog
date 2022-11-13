Webcam.set({
    width :500 ,
    height:400,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function takesnapshot()
{
    Webcam.snap (function(data_uri){
    document.getElementById("results").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    });
    
}
console.log("ml5 version", ml5.version);

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/67_z-CEFh/model.json',modelLoaded);
function modelLoaded(){
    console.log("modeloaded!")
}