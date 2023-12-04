// manageBalance manages balance, transactions
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

function winningCondition() {
    if (Number(currentBalance) >= 100) {
        showWinPopup();
        console.log("you won")
    }
}


// function addBalance(val){
//     currentBalance = parseFloat(currentBalance+parseFloat(val));
//     document.getElementById("chickenBalance").textContent = currentBalance.toFixed(2);
// }

// function addChicken() {
//     // Create a new chicken element
//     const img = document.createElement('Chicken');

//     img.src = 'chicken.png'; 
//     img.alt = 'Chicken';

//     img.width = 100; 
//     img.height = 100; 

//     document.body.appendChild(img);
//   }

//   // Call the function to add the image when the page loads
//   addImage();

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
        if (currentBalance == 0){
            document.getElementById("earn").textContent = "Oh no! You lost all your chickens!";
            updateChickens();
            showLosePopup();
            winAmountReset();
            }
        else{
            document.getElementById("earn").textContent = "Oh no! You lost " + parsedNumber.toFixed(0) + " chicken(s)!";
            updateChickens();
            winAmountReset();
        }
    }
}

// function deductBalance(val){
//     currentBalance = parseFloat(currentBalance-parseFloat(val));
//     document.getElementById("chickenBalance").textContent = currentBalance.toFixed(2);
// }