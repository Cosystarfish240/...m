//https://teachablemachine.withgoogle.com/models/seoWFGMw9/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/seoWFGMw9/', modelReady)
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    console.log(results)
}