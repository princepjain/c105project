Webcam.set({
    width:400, height:400, 
    image_format:"png", png_quality:90 
});


webcamm = document.getElementById("Webcamm")

Webcam.attach("#Webcamm")

function capture(){
    Webcam.snap(function(e){
        document.getElementById("image_result").innerHTML = "<img id='result_image' src=' " + e +"'>"
    })
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/JOYL6xR8H/model.json", modelloaded)

function modelloaded(){
    console.log("hiiiiiiiiiii")

}



function identify(){
    img = document.getElementById("result_image")
    classifier.classify(img, gotresult)
}

function gotresult(error, results){
    if(error){
        console.log(error)
    }else{
        console.log(results)
      document.getElementById("result_object").innerHTML = results[0].label
      document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(3)
    }
}



























