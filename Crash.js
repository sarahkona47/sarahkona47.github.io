// Declare Variables
var previousCrashes = [];
const intervals = [];
const startBalance = 1000;
var currentBalance = 1000;

const numberInput = document.getElementById("numberInput");
const timerElement = document.getElementById("timer");
// var parsedNumber = parseFloat(numberInput);

const cashoutButton = document.getElementById("cashout");
const betButton = document.getElementById("bet");

// Probability ranges used by generate_intervals
const probabilityRanges = [
    { minTime: 1.00, maxTime: 1.50, totalProbability: 0.05 }, // 2.00-3.00: 5% crash
    { minTime: 1.50, maxTime: 2.10, totalProbability: 0.2 }, // 2.00-3.00: 20% crash
    { minTime: 3.00, maxTime: 4.00, totalProbability: 0.1 }, // 3.00-4.00: 10% crash
    { minTime: 4.00, maxTime: 5.00, totalProbability: 0.08 }, // 4.00-5.00: 8% crash
    // { minTime: 5.00, maxTime: 6.00, totalProbability: 0.05 }, // 5.00-6.00: 5% crash
    // { minTime: 6.00, maxTime: 9.00, totalProbability: 0.05 }, // 6.00-9.00: 5% crash
    // { minTime: 9.00, maxTime: 15.00, totalProbability: 0.02 }, // 9.00-15.00: 2% crash
    // { minTime: 15.00, maxTime: 100.00, totalProbability: 0.01 }, // 15.00-100.00: 1% crash
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
        // disableButton();
        deductFromBalance();
        timerElement.textContent = displayTime.toFixed(2) + "x Crash!";
        prevCrashes('Crashed at ' + displayTime.toFixed(2) + 'x \n'); 
        enableButton();
        intervals.length = 0;
        reset(numberInput);
    } else{
        requestAnimationFrame(updateTimer);
    }
}

// Shows possible profits on screen 
function updateWinnableAmount() {
    const numberInput = parseFloat(document.getElementById("numberInput").value);
    const displayTime = parseFloat(timerElement.textContent);
    const winnableAmount = numberInput * displayTime;
    // Update the winnable amount in the UI
    document.getElementById("winnableAmount").textContent = "$" + winnableAmount.toFixed(2);
}

//** Generate different intervals based on fixed probability ranges defined as probabilityRanges above */ 

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

//** Called in generate_intervals for randomization */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// need to add in a function that validates input type WORK IN PROGRESS
function validateInput() {
    const numberInput = document.getElementById("numberInput");

    numberInput.addEventListener("bet", function(event) {
        const inputValue = event.target.value;
        const regex = /\$?\d+(,\d{3})*(\.\d{2})?$/; // Regular expression to match up to two decimal points
        if (!regex.test(inputValue)) {
            // If the input does not match the pattern, clear the input field or handle the error accordingly
            document.getElementById("numberInput").textContent = " ";
            event.target.value = inputValue.slice(0, -1); // Remove the last character (invalid input)
            // You can also show an error message to the user if needed
            // For example: errorElement.textContent = "Please enter a number with up to two decimal points";
        }
        else {
            return numberInput; 
        }
    });
}

// Makes sure that bet amount is less than bank balance
function checkBetAmount(){
    const numberInput = parseFloat(document.getElementById("numberInput").value);
    if (numberInput <= currentBalance){
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
    // we need to add the validation function here - validateInput();
    if (checkBetAmount()){
        updateTimer();
        setInterval(updateCurrentTime, 1000);
    }
    else{
        document.getElementById("earn").textContent = "Only bet what you have!";
    }
}
  

// Multiply bet and win multiplier - static 
function winAmount(){
    const numberInput = document.getElementById("numberInput").value;
    const parsedNumber = parseFloat(numberInput);
    const currentTimestamp = parseFloat(timerElement.textContent);
    const earn = parsedNumber * currentTimestamp;
    document.getElementById("earn").textContent = "You won $" + earn.toFixed(2) + "!";
}

// Need a function to reset all the text when a bet is finished
function reset(target) {
    target.value = "";
}

//Disable all button
function disableButton(){
    const cashoutButton = document.getElementById("cashout");
    const betButton = document.getElementById("bet");

    cashoutButton.disabled = true;
    betButton.disabled = true;
    numberInput.disabled = true; 
}

//Check if select button is disabled
function checkDisabled(button){
    if (button.disabled === true){
        return true;
    }
    else{
        return false;
    }
}

//Enable button
function enableButton(){
    const cashoutButton = document.getElementById("cashout");
    const betButton = document.getElementById("bet");

    betButton.disabled = false;
    cashoutButton.disabled = false;
    numberInput.disabled = false; 
}

//Previous Crashes
function prevCrashes(message){
    previousCrashes.push(message);
    const crashTrends = document.getElementById('trends');
    const crashList = document.createElement('li');
    crashList.textContent = message;
    crashTrends.appendChild(crashList);
}

// If cashout button is clicked, add earned money to bank balance 
function addToBalance(){
    const numberInput = document.getElementById("numberInput").value;
    const parsedNumber = parseFloat(numberInput);
    const currentTimestamp = parseFloat(timerElement.textContent);
    const earn = parsedNumber * currentTimestamp;

    currentBalance = parseFloat(currentBalance+earn);
    document.getElementById("myBalance").textContent = currentBalance.toFixed(2);
}

// If cashout button is still enabled (the user didn't press it), deducts lost money from bank balance
function deductFromBalance(){
    const numberInput = document.getElementById("numberInput").value;
    const parsedNumber = parseFloat(numberInput);

    if (checkDisabled(cashoutButton)){
        currentBalance = currentBalance;
    }
    else{
        currentBalance = parseFloat(currentBalance-parsedNumber);
        document.getElementById("myBalance").textContent = currentBalance.toFixed(2);
        if (currentBalance == 0){
            document.getElementById("earn").textContent = "Oh no! You lost all your money! Sell a chicken to earn more!";
        }
        else{
            document.getElementById("earn").textContent = "Oh no! You lost $" + parsedNumber.toFixed(2) + "!";
        }
    }
}

// export{currentBalance}
