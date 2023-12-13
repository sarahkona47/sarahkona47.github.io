// Manages button components

// Disable elements
function disableBetButton(){
    const betButton = document.getElementById("bet");
    betButton.disabled = true;
}

function disableCashOutButton(){
    const cashoutButton = document.getElementById("cashout");
    cashoutButton.disabled = true;
}

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
function enableCashButton(){
    const cashoutButton = document.getElementById("cashout");
    cashoutButton.disabled = false;
}

function enableBetButton(){
    const betButton = document.getElementById("bet");
    betButton.disabled = false;
}

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