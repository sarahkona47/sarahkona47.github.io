// Declare Variables
const previousCrashes = [];
const intervals = [];
let startingBalance = 1000;

// const earnElement = document.getElementById("earn");
const numberInput = document.getElementById("numberInput");
const timerElement = document.getElementById("timer");


// Probability ranges used by generate_intervals
const probabilityRanges = [
    { minTime: 1.00, maxTime: 1.50, totalProbability: 0.05 }, // 2.00-3.00: 5% crash
    { minTime: 1.50, maxTime: 2.10, totalProbability: 0.2 }, // 2.00-3.00: 20% crash
    { minTime: 3.00, maxTime: 4.00, totalProbability: 0.1 }, // 3.00-4.00: 10% crash
    { minTime: 4.00, maxTime: 5.00, totalProbability: 0.08 }, // 4.00-5.00: 8% crash
    { minTime: 5.00, maxTime: 6.00, totalProbability: 0.05 }, // 5.00-6.00: 5% crash
    // { minTime: 6.00, maxTime: 9.00, totalProbability: 0.05 }, // 6.00-9.00: 5% crash
    // { minTime: 9.00, maxTime: 15.00, totalProbability: 0.02 }, // 9.00-15.00: 2% crash
    // { minTime: 15.00, maxTime: 100.00, totalProbability: 0.01 }, // 15.00-100.00: 1% crash
]

let startTime = Date.now();

// Timer visual updates for the crash multiplier as well as the winnable amount. Enables/disables buttons after a bet
function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - startTime)/1000;
    const displayTime = (elapsedTime * 0.1) + 1

    
    timerElement.textContent = displayTime.toFixed(2) + 'x';
    updateWinnableAmount();
    intervals.push(...generate_intervals(probabilityRanges));
    if (displayTime >= intervals[0]) {
        disableButton();
        timerElement.textContent = displayTime.toFixed(2) + "x Crash!";
        enableButton();
        prevCrashes('Crashed at ' + displayTime.toFixed(2) + 'x \n');        
        enableButton();
        intervals.length = 0;
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
   
// Multiplier
function multiplier(){
    startTime = Date.now();
    crashTime = Math.floor(Math.random() *10000);
    updateTimer();
    setInterval(updateCurrentTime, 1000);
}

// Multiply bet and win multiplier - static 
function multiplyNumber(){
    const numberInput = document.getElementById("numberInput").value;
    const parsedNumber = parseFloat(numberInput);
    const currentTimestamp = parseFloat(timerElement.textContent);
    const earn = parsedNumber * currentTimestamp;
    document.getElementById("earn").textContent = "You won $" + earn.toFixed(2) + "!";
}

//Disable button
function disableButton(){
    const cashoutButton = document.getElementById("cashout");
    const betButton = document.getElementById("bet");
    cashoutButton.disabled = true;
    betButton.disabled = true;
}

//Enable button
function enableButton(){
   const betButton = document.getElementById("bet");
   const cashoutButton = document.getElementById("cashout");
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


class BankBalance {

    startBalance = 1000;

    balance(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log('Insufficient Balance');
        }
    }
    updateBetBalance(numberInput) {
        if (numberInput <= this.balance) {
            this.balance -= amount;
        } else {
            console.log('Insufficient Balance');
        }
    }
    updateWinBalance(earn) {
        this.balance += earn;
    }
}
