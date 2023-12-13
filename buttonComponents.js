// Manages button components

// Disable elements
// Disable bet button
function disableBetButton(){
    const betButton = document.getElementById("bet");
    betButton.disabled = true;
}

// Disable cash out button
function disableCashOutButton(){
    const cashoutButton = document.getElementById("cashout");
    cashoutButton.disabled = true;
}

// Disables number input
function disableNumberInput(){
    numberInput.disabled = true;
}

// Check if select button is disabled
function checkDisabled(button){
    if (button.disabled === true){
        return true;
    }
    else{
        return false;
    }
}

// Enable elements
// Enables cash out button
function enableCashButton(){
    const cashoutButton = document.getElementById("cashout");
    cashoutButton.disabled = false;
}

// Enables bet button
function enableBetButton(){
    const betButton = document.getElementById("bet");
    betButton.disabled = false;
}

// Enables number input
function enableNumberInput(){
    numberInput.disabled = false;
}

// Activates the rage button by displaying chicken crushed image when clicked
function rageButtonActivate(){
    document.getElementById("rageButton").src="images/IMG_0011.gif";
    setTimeout(() => {   document.getElementById("rageButton").src="images/IMG_0025.gif"; }, 200);
}

// Refreshes on load
function refresh() {
    location.reload();
}