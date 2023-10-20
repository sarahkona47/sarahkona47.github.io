// Declare Variables
const previousCrashes = [];
const intervals = [];

// const earnElement = document.getElementById("earn");
const numberInput = document.getElementById("numberInput");
const timerElement = document.getElementById("timer");

// Probability
const probabilityRanges = [
    { minTime: 1.00, maxTime: 1.50, totalProbability: 0.05 }, // 2.00-3.00: 10% crash
    { minTime: 1.50, maxTime: 2.10, totalProbability: 0.50 }, // 2.00-3.00: 10% crash
    { minTime: 3.00, maxTime: 4.00, totalProbability: 0.1 }, // 3.00-4.00: 10% crash
    { minTime: 4.00, maxTime: 5.00, totalProbability: 0.1 }, // 4.00-5.00: 10% crash
    { minTime: 5.00, maxTime: 6.00, totalProbability: 0.07 }, // 5.00-6.00: 10% crash
];

let startTime = Date.now();
// let crashTime = Math.floor(Math.random() *10000);

// Timer Update
function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - startTime)/1000;
    const displayTime = (elapsedTime * 0.1) + 1
    timerElement.textContent = displayTime.toFixed(2) + 'x';
    intervals.push(...generate_intervals(probabilityRanges));

    if (displayTime >= intervals[0]) {
        timerElement.textContent = displayTime.toFixed(2) + "x Crash!";
        prevCrashes('Crashed at ' + displayTime.toFixed(2) + 'x \n');        
        disableButton();
        intervals.length = 0;
    } else{
        requestAnimationFrame(updateTimer);
    }
    

    // if (displayTime >= 2 && displayTime <= 5 && Math.random() < generatedIntervals) {
    //     timerElement.textContent = displayTime.toFixed(2) + "x Crash!";
    //     prevCrashes('Crashed at ' + displayTime.toFixed(2) + 'x \n');        
    //     disableButton();
    // } else if (displayTime >= 8 && displayTime <= 14 && Math.random() < generatedIntervals){
    //     timerElement.textContent = displayTime.toFixed(2) + "x Crash!";
    //     prevCrashes('Crashed at ' + displayTime.toFixed(2) + 'x \n');        
    //     disableButton();
    // } else if (displayTime >= 16 && displayTime <= 25 && Math.random() < generatedIntervals){
    //     timerElement.textContent = displayTime.toFixed(2) + "x Crash!";
    //     prevCrashes('Crashed at ' + displayTime.toFixed(2) + 'x \n');        
    //     disableButton();
    // } else if (displayTime >= 30 && displayTime <= 35 && Math.random() < generatedIntervals){
    //     timerElement.textContent = displayTime.toFixed(2) + "x Crash!";
    //     prevCrashes('Crashed at ' + displayTime.toFixed(2) + 'x \n');                
    //     disableButton();
    // } else if (displayTime >= 40 && displayTime <= 45 && Math.random() < generatedIntervals){
    //     timerElement.textContent = displayTime.toFixed(2) + "x Crash!";
    //     prevCrashes('Crashed at ' + displayTime.toFixed(2) + 'x \n');                
    //     disableButton();
    // } else if (displayTime >= 50 && displayTime <= 55 && Math.random() < generatedIntervals){
    //     timerElement.textContent = displayTime.toFixed(2) + "x Crash!";
    //     prevCrashes('Crashed at ' + displayTime.toFixed(2) + 'x \n');        
    //     disableButton();
}

function generate_intervals(probabilityRange){
    const intervals = [];
    probabilityRange.forEach(rangeInfo => {
        const minTime = rangeInfo.minTime;
        const maxTime = rangeInfo.maxTime;
        const totalProbability = rangeInfo.totalProbability;
        // Calculate the number of intervals based on the total probability
        const numIntervalsInRange = Math.round(totalProbability * 100); // Assuming probabilities as percentages
        for (let i = 0; i < numIntervalsInRange; i++) {
            intervals.push(Number((Math.random() * (maxTime - minTime) + minTime).toFixed(2)));
        }
    });
    shuffleArray(intervals); // Shuffle the intervals to randomize their order
    return intervals;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
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

    document.getElementById("earn").textContent = "You won $" + earn.toFixed(2);
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
    previousCrashes.push(message);
    const crashTrends = document.getElementById('trends');
    const crashList = document.createElement('li');
    crashList.textContent = message;
    crashTrends.appendChild(crashList);
}
