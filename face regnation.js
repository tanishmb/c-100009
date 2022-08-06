Webcam.set({
    width:500,
    height:400,
    image_format:'png',
    png_quality:99
});
camera=document.getElementById("camera");
Webcam.attach(camera)

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="capture_img" src="'+data_uri+'"/>';
    });
}
console.log("ml5_version", ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/E9nc7FJDo/")
function modelLoaded(){
    console.log("modelLoaded");
}