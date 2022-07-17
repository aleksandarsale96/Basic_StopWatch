//definisanje pocetnog vremena:
let seconds = 0;
let minutes = 0;
let hours = 0;

//logika da ne krene vreme cim se otvori stranica nego kada se pritisne na button:
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//hold setInterval() funkcija:
let interval = null;

let status0 = "stopped";

//funkcija:
function stopWatch() {
    seconds++;

    //kada predje 60sekundi i 60minuta:
    if(seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    //dodavanje da budu dve nule:
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }
    //Display updated time values to user:
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

// window.setInterval(stopWatch, 1000);

//start:
function startStop(){

    if(status0 === "stopped"){

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status0 = "started";

    }
    else{

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status0 = "stopped";

    }

}

//Function to reset the stopwatch
function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";

}