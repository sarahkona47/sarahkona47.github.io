// manageBalance manages balance, transactions

// If cashout button is clicked, add earned money to bank balance 
function addToBalance(){
    const numberInput = document.getElementById("numberInput").value;
    const parsedNumber = parseFloat(numberInput);
    const currentTimestamp = parseFloat(timerElement.textContent);
    const earn = parsedNumber * currentTimestamp;

    currentBalance = parseFloat(currentBalance+earn);
    document.getElementById("myBalance").textContent = currentBalance.toFixed(2);
}

// function addBalance(val){
//     currentBalance = parseFloat(currentBalance+parseFloat(val));
//     document.getElementById("myBalance").textContent = currentBalance.toFixed(2);
// }

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
            document.getElementById("earn").textContent = "Oh no! You lost all your money!";
        }
        else{
            document.getElementById("earn").textContent = "Oh no! You lost $" + parsedNumber.toFixed(2) + "!";
        }
    }
}

// function deductBalance(val){
//     currentBalance = parseFloat(currentBalance-parseFloat(val));
//     document.getElementById("myBalance").textContent = currentBalance.toFixed(2);
// }