import { currentBalance } from "./Crash";

const startingChickens = 1;
var boughtChicken = 0;
const totalchickens = startingChickens + boughtChicken; 
const chickenValue = 500;

function buyChicken() {
    if (currentBalance > chickenValue){
        totalchickens = totalchickens + 1
    }
    else{
        document.getElementsByClassName("navber_buy").textContent = "You don't have enough money!"; 
        // totalchickens = totalchickens;
    }
}

function sellChicken() {
    if (totalchickens >=1) {
        totalchickens =-1
        currentBalance = currentBalance + chickenValue
    }
    
    else {
        document.getElementsByClassName("navber_sell").textContent = "You don't have any chickens!"; 
        // currentBalance = currentBalance;
    }
}

function chickencoop(){
    let img = document.createElement('chicken');
    img.src = 'images/chicken.png';
    document.getElementById('chickencoop').appendChild(img);
}

