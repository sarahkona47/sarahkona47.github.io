// Manages crash probaiblity and multiplier

// Declare Variables
var previousCrashes = [];
const intervals = [];

const numberInput = document.getElementById("numberInput");
const timerElement = document.getElementById("timer");

const cashoutButton = document.getElementById("cashout");
const betButton = document.getElementById("bet");

// Probability ranges used by generate_intervals
const probabilityRanges = [
    { minTime: 1.00, maxTime: 1.50, totalProbability: 0.2 }, // 2.00-3.00: 20% crash
    { minTime: 1.50, maxTime: 2.10, totalProbability: 0.1 }, // 2.00-3.00: 10% crash
    { minTime: 3.00, maxTime: 4.00, totalProbability: 0.1 }, // 3.00-4.00: 10% crash
    { minTime: 4.00, maxTime: 5.00, totalProbability: 0.08 }, // 4.00-5.00: 8% crash
    { minTime: 5.00, maxTime: 6.00, totalProbability: 0.05 }, // 5.00-6.00: 5% crash
    { minTime: 6.00, maxTime: 9.00, totalProbability: 0.05 }, // 6.00-9.00: 5% crash
    { minTime: 9.00, maxTime: 15.00, totalProbability: 0.02 }, // 9.00-15.00: 2% crash
]

let startTime = Date.now();

// Timer visual updates for the crash multiplier as well as the winnable amount; enables/disables buttons after a bet; updates bank balanace
function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - startTime)/1000;
    const displayTime = (elapsedTime * 0.1) + 1

    timerElement.textContent = displayTime.toFixed(2) + 'x';
    updateWinnableAmount();
    intervals.push(...generate_intervals(probabilityRanges));
    if (displayTime >= intervals[0]) {
        deductFromBalance();
        timerElement.textContent = displayTime.toFixed(2) + "x Crash!";
        disableCashOutButton();
        enableBetButton();
        enableNumberInput();
        prevCrashes('Crashed at ' + displayTime.toFixed(2) + 'x \n'); 
        intervals.length = 0;
    } else{
        requestAnimationFrame(updateTimer);
    }
}

// Shows possible profits on screen 
function updateWinnableAmount() {
    const numberInput = parseFloat(document.getElementById("numberInput").value);
    const displayTime = parseFloat(timerElement.textContent);
    const winnableAmount = (numberInput * displayTime)-numberInput;
    // Update the winnable amount in the UI
    document.getElementById("winnableAmount").textContent = "You could have won " + winnableAmount.toFixed(0) + " chickens";
}

// Generate different intervals based on fixed probability ranges defined as probabilityRanges above 
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

// Called in generate_intervals for randomization
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Validates number input using Regex
function validateInput() {
    const regex = /^[1-9]\d*$/; 
    const numberInput = parseFloat(document.getElementById("numberInput").value);
    if (regex.test(numberInput) === false) {
    } else {
        return true; 
    }
}

// Makes sure that bet amount is less than bank balance
function checkBetAmount(){
    const numberInput = parseFloat(document.getElementById("numberInput").value);
    if (numberInput <= currentBalance.toFixed(0)){
        return true;
    }
    else{
        return false;
    }
}
   
// Start multiplier 
function multiplier(){
    startTime = Date.now();
    crashTime = Math.floor(Math.random() *10000);
    const numberInput = parseFloat(document.getElementById("numberInput").value);
    clearMessages();
    
    if (validateInput() === true && checkBetAmount()){
        disableBetButton();
        disableNumberInput();
        enableCashButton();
        betChickens();
        setInterval(updateTimer(), 1000);
    }
    else{
        document.getElementById("betChickens").textContent = "Only bet what you have!";
        enableBetButton();
        disableCashOutButton();
    }
}
  

// Multiply bet and win multiplier - static 
function winAmount(){
    const numberInput = document.getElementById("numberInput").value;
    const parsedNumber = parseFloat(numberInput);
    const currentTimestamp = parseFloat(timerElement.textContent);
    const earn = (parsedNumber * currentTimestamp) - parsedNumber;
    document.getElementById("earn").textContent = "You won " + earn.toFixed(0) + " chicken(s)!";
}

// function winAmountReset() {
//     document.getElementById("earn").textContent = ""
// }

// Previous Crashes
function prevCrashes(message) {
    previousCrashes.push(message);
    const crashTrends = document.getElementById('trends');
    const crashList = document.createElement('li');
    crashList.textContent = message;
    
    // Extract crash value from the message (assuming it's a number)
    const crashValue = parseFloat(message.match(/\d+\.\d+/)[0]);

    // Apply color directly to the crashList based on the crash value
    if (crashValue < 2) {
        crashList.style.color = 'purple';
    } else {
        crashList.style.color = 'green';
    }

    // Append the crashList to the crashTrends
    crashTrends.appendChild(crashList);
}

// Clears message showing earned amount and winnable amount
function clearMessages() {
    document.getElementById("earn").textContent = "";
    document.getElementById("winnableAmount").textContent = "";
}
