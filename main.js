
Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:100,
    })
    camera=document.getElementById("camera");
    Webcam.attach("#camera");
    
    function click(){
    
    Webcam.snap(function(data_uri){
    document.getElementById("photodiv").innerHTML=`<img id=photo src=${data_uri}>`;
    })
    
    }
    
    
    console.log("ml5 version: ",ml5.version);
    
    link= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/MkIY_54Z3/model.json",modelLoaded);
    function modelLoaded(){
        console.log("Model loaded successfully");
    }