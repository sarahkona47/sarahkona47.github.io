// manageBalance manages chicken balance 

// Declare variables
const startBalance = 3;
var currentBalance = 3;

// If cashout button is clicked, add earned money to bank balance 
function addToBalance(){
    const numberInput = document.getElementById("numberInput").value;
    const parsedNumber = parseFloat(numberInput);
    const currentTimestamp = parseFloat(timerElement.textContent);
    const earn = (parsedNumber * currentTimestamp)-parsedNumber;

    currentBalance = parseFloat(currentBalance+earn);
    document.getElementById("chickenBalance").textContent = currentBalance.toFixed(0) + " chicken(s)";
    winningCondition();
}

// If you have more than 100 chickens, you win
function winningCondition() {
    if (Number(currentBalance) >= 100) {
        showWinPopup();
        console.log("you won")
        location.reload();
    }
}

// Losing message and popup
function losingCondition(){
    document.getElementById("earn").textContent = "Oh no! You lost all your chickens!";
    updateChickens();
    showLosePopup();
    clearMessages();  
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
        document.getElementById("chickenBalance").textContent = currentBalance.toFixed(0) + " chicken(s)";
        if (currentBalance.toFixed(0) == 0){
            losingCondition();           
        }
        else{
            document.getElementById("earn").textContent = "Oh no! You lost " + parsedNumber.toFixed(0) + " chicken(s)!";
            updateChickens();
            disableCashOutButton();
            enableBetButton();
        }
    }
}