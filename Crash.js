// Declare Variables
const previous_crashes = [];
const probability_ranges = [
    {"min_time": 2, "max_time": 5, "total_probability": 0.1},  // 2-5: 10% crash
    {"min_time": 8, "max_time": 14, "total_probability": 0.1},  // 8-14: 10% crash
    {"min_time": 16, "max_time": 25, "total_probability": 0.1},  // 16-25: 10% crash
    {"min_time": 30, "max_time": 35, "total_probability": 0.1},  // 30-35: 10% crash
    {"min_time": 40, "max_time": 45, "total_probability": 0.1},  // 40-45: 10% crash
    {"min_time": 50, "max_time": 55, "total_probability": 0.1},  // 50-55: 10% crash
    ];

// const earnElement = document.getElementById("earn");
const numberInput = document.getElementById("numberInput");
const timerElement = document.getElementById("timer");

let startTime = Date.now();
let crashTime = Math.random() *20 *1000;
let timerInterval;

// Timer Update
function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - startTime)/1000;
    timerElement.textContent = elapsedTime.toFixed(2);

    if (elapsedTime >= crashTime) {
        timerElement.textContent = "Crashed!";
        
    } else {
        requestAnimationFrame(updateTimer);
    }
}
   
// Exponential Timer
function multiplier(){
    startTime = Date.now();
    crashTime = Math.random() *20 *1000;
    timerInterval = setInterval(updateTimer, 1000);
    setInterval(updateCurrentTime, 1000);
}


// Multiplier
function multiplyNumber(){
    const numberInput = document.getElementById("numberInput").value;
    const parsedNumber = parseFloat(numberInput);
    const currentTimestamp = parseFloat(timerElement.textContent);
    const earn = parsedNumber * currentTimestamp;

    document.getElementById("earn").textContent = "You won $" + earn;
}

//Disable button
function disableButton(){
    const betButton = document.getElementById("bet")
    const cashoutButton = document.getElementById("cashout")

    betButton.disabled = true;
    cashoutButton.disabled = true;
}





