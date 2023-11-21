// buttonComponents class manages all functions of the button 

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

// Activates the rage button by displaying chicken crushed image when clicked
function rageButtonActivate(){
    document.getElementById("rageButton").src="images/IMG_0011.gif";
    setTimeout(() => {   document.getElementById("rageButton").src="images/IMG_0003.gif"; }, 200);
}