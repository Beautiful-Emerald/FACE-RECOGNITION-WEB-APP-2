Webcam.set({
width:300,
height:350,
img_format:'png',
png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function snapshot(){

Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';

})}

console.log("ml5_version",ml5_version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/miBY48PWL/model.json',modalLoaded);