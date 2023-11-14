var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var interval;

var hourheading = document.getElementById("hour");
var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var msecheading = document.getElementById("msec");


function StartTimer(){
    msec++;
    msecheading.innerHTML = msec;
    if(msec >=60){
        sec++;
        secheading.innerHTML=sec;
        msec = 0;
    }
    else if (sec >=60){
        min++;
        minheading.innerHTML=min;
        sec=0;
    }
    else if (min>=60){
        hour++;
        hourheading.innerHTML=hour;
        min=0;
    }
}

function start(){
    interval = setInterval(StartTimer,10);
}

function pause(){
    clearInterval(interval);
}

function reset(){
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;
    hourheading.innerHTML = hour;
    minheading.innerHTML = min;
    secheading.innerHTML = sec;
    msecheading.innerHTML = msec;
    pause();
}