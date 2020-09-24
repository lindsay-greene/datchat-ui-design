var title = document.getElementById("title");
var ready = document.getElementById("ready");
var step1 = document.getElementById("step1");
var option1 = document.getElementById("option1");
var own = document.getElementById("own");
var preset = document.getElementById("preset");
var results1 = document.getElementById("results1");
var step2 = document.getElementById("step2");
var option2 = document.getElementById("option2");
var avg = document.getElementById("avg");
var range = document.getElementById("range");
var maxMin = document.getElementById("max-min");
var trend = document.getElementById("trend");
var results3 = document.getElementById("results3");
var step3 = document.getElementById("step3");
var option3 = document.getElementById("option3");
var newData = document.getElementById("new-data");
var newInfo = document.getElementById("new-info");
var exit = document.getElementById("exit");
var placeholder = document.getElementById("placeholder"); 

ready.onclick = function() {
    step1.style.visibility = "visible";
    option1.style.visibility = "visible";
    // ready.style.visibility = "hidden";
}

own.onclick = function() {
    results1.style.visibility = "visible";
    step2.style.visibility = "visible";
    option2.style.visibility = "visible";
}

preset.onclick = function() {
    results1.style.visibility = "visible";
    step2.style.visibility = "visible";
    option2.style.visibility = "visible";
}

avg.onclick = function() {
    results2.innerHTML = "The average of the data is XX";
    results2.style.visibility = "visible";
    step3.style.visibility = "visible";
    option3.style.visibility = "visible";
}

range.onclick = function() {
    results2.innerHTML = "The range of the data is XX";
    results2.style.visibility = "visible";
    step3.style.visibility = "visible";
    option3.style.visibility = "visible";
}

maxMin.onclick = function() {
    results2.innerHTML = "The max of the data is XX and the min of the data is XX";
    results2.style.visibility = "visible";
    step3.style.visibility = "visible";
    option3.style.visibility = "visible";
}

trend.onclick = function() {
    results2.innerHTML = "The overall trend of the data is XX";
    results2.style.visibility = "visible";
    step3.style.visibility = "visible";
    option3.style.visibility = "visible";
}

newData.onclick = function() {
    results1.style.visibility = "hidden";
    step2.style.visibility = "hidden";
    option2.style.visibility = "hidden";
    results2.style.visibility = "hidden";
    step3.style.visibility = "hidden";
    option3.style.visibility = "hidden";
}

newInfo.onclick = function() {
    results2.style.visibility = "hidden";
    step3.style.visibility = "hidden";
    option3.style.visibility = "hidden";
}

exit.onclick = function() {
    title.style.visibility = "hidden";
    ready.style.visibility = "hidden";
    step1.style.visibility = "hidden";
    option1.style.visibility = "hidden";
    results1.style.visibility = "hidden";
    step2.style.visibility = "hidden";
    option2.style.visibility = "hidden";
    results2.style.visibility = "hidden";
    step3.style.visibility = "hidden";
    option3.style.visibility = "hidden";   
    placeholder.innerHTML = "Thank you for using DatChat.";
}