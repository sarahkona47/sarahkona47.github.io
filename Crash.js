// Declare Variables
const previous_crashes = [];

// const earnElement = document.getElementById("earn");
const numberInput = document.getElementById("numberInput");
const timerElement = document.getElementById("timer");

// Probability
const probability_ranges = [
    {"min_time": 2, "max_time": 5, "total_probability": 0.1},  // 2-5: 10% crash
    {"min_time": 8, "max_time": 14, "total_probability": 0.1},  // 8-14: 10% crash
    {"min_time": 16, "max_time": 25, "total_probability": 0.1},  // 16-25: 10% crash
    {"min_time": 30, "max_time": 35, "total_probability": 0.1},  // 30-35: 10% crash
    {"min_time": 40, "max_time": 45, "total_probability": 0.1},  // 40-45: 10% crash
    {"min_time": 50, "max_time": 55, "total_probability": 0.1},  // 50-55: 10% crash
    ];

let startTime = Date.now();
let crashTime = Math.floor(Math.random() *10000);

// Timer Update
function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - startTime)/1000;
    const displayTime = (elapsedTime * 0.1) + 1
    timerElement.textContent = displayTime.toFixed(2) + 'x';

    if (displayTime >= 2 && displayTime <= 5 && Math.random() < 0.10) {
        timerElement.textContent = displayTime.toFixed(2) + "x Crash!";
        prevCrashes('Crashed at ' + displayTime.toFixed(2) + 'x \n');        
        disableButton();
    } else if (displayTime >= 8 && displayTime <= 14 && Math.random() < 0.10){
        timerElement.textContent = displayTime.toFixed(2) + "x Crash!";
        prevCrashes('Crashed at ' + displayTime.toFixed(2) + 'x \n');        
        disableButton();
    } else if (displayTime >= 16 && displayTime <= 25 && Math.random() < 0.10){
        timerElement.textContent = displayTime.toFixed(2) + "x Crash!";
        prevCrashes('Crashed at ' + displayTime.toFixed(2) + 'x \n');        
        disableButton();
    } else if (displayTime >= 30 && displayTime <= 35 && Math.random() < 0.10){
        timerElement.textContent = displayTime.toFixed(2) + "x Crash!";
        prevCrashes('Crashed at ' + displayTime.toFixed(2) + 'x \n');                
        disableButton();
    } else if (displayTime >= 40 && displayTime <= 45 && Math.random() < 0.10){
        timerElement.textContent = displayTime.toFixed(2) + "x Crash!";
        prevCrashes('Crashed at ' + displayTime.toFixed(2) + 'x \n');                
        disableButton();
    } else if (displayTime >= 50 && displayTime <= 55 && Math.random() < 0.10){
        timerElement.textContent = displayTime.toFixed(2) + "x Crash!";
        prevCrashes('Crashed at ' + displayTime.toFixed(2) + 'x \n');        
        disableButton();
    } else {
        requestAnimationFrame(updateTimer);
    }
}
   
// Multiplier
function multiplier(){
    startTime = Date.now();
    crashTime = Math.floor(Math.random() *10000);
    updateTimer();
    setInterval(updateCurrentTime, 1000);
}

// Multiplier
function multiplyNumber(){
    const numberInput = document.getElementById("numberInput").value;
    const parsedNumber = parseFloat(numberInput);
    const currentTimestamp = parseFloat(timerElement.textContent);
    const earn = parsedNumber * currentTimestamp;

    document.getElementById("earn").textContent = "You won $" + earn.toFixed(3);
}

//Disable button
function disableButton(){
    const betButton = document.getElementById("bet");
    const cashoutButton = document.getElementById("cashout");

    betButton.disabled = true;
    cashoutButton.disabled = true;
}

//Enable button
function enableButton(){
    betButton = document.getElementById("bet");
    cashoutButton = document.getElementById("cashout");
    
    betButton.disabled = false;
    cashoutButton.disabled = false;
}

//Previous Crashes
function prevCrashes(message){
    previous_crashes.push(message);
    const crashTrends = document.getElementById('trends');
    const crashList = document.createElement('li');
    crashList.textContent = message;
    crashTrends.appendChild(crashList);
}
