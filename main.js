const data = document.querySelectorAll(".data");
const information = document.querySelectorAll(".info");
const chart = document.querySelector("#results1");
let lastOption = null;

window.onload = function() {
    console.log("test");
    console.log(data);
    data.forEach((datum) => {
        datum.addEventListener("click", choose_data, false);
    });
    information.forEach((info) => {
        info.addEventListener("click", check_option, false);
    });
}

function choose_data(event) {
    const target = event.target;
    // TODO: figure out why it is not adding target id 
    // TODO: figure out why it is also changing the formatting 
    chart.innerHTML = target.id + " chart";
}

function check_option(event, option) {
    option = option || event.target.id;
    console.log(option);
    switch(option) {
        case "avg":
            average();
            break;
        case "range": 
            range();
            break;
        case "max-min": 
            maxMin();
            break;
        case "trend": 
            trend();
            break;
        case "repeat":
            repeat();
            break;
        default: 
            break;
    }
    lastOption = option;
}

function average(event) {
    console.log("this is average");
}

function range(event) {
    console.log("this is range");
}

function maxMin(event) {
    console.log("this is maxMin");
}

function trend(event) {
    console.log("this is trend");
}

function repeat(event) {
    check_option(null, lastOption);
    console.log("this is repeat, " + lastOption);
}