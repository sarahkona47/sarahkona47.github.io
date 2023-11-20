import { currentBalance } from "./Crash";

const startingChickens = 1;
const totalchickens = startingChickens; 
const chickenValue = 500;

function buyChicken() {
    if (currentBalance > chickenValue){
        totalchickens = (totalchickens + 1).toFixed(0)
    }
    else{
        document.getElementsByClassName("navber_buy").textContent = "You don't have enough money!"; 
    }
}

function sellChicken() {
    if (totalchickens >=1) {
        totalchickens = (totalchickens-1).toFixed(0);
        currentBalance = currentBalance + chickenValue
    }
    
    else {
        document.getElementsByClassName("navber_sell").textContent = "You don't have any chickens!"; 
    }
}

function chickenImage(){
    let img = document.createElement('img');
    img.src = 'images/chicken.png';
    img.style.height = '50px';
    img.style.width = '50px'; 
    document.getElementById('chickencoop').appendChild(img);
}

function updateChickensOnScreen(){
    for (let chicken in totalchickens) {
        chickenImage();
    }
}

updateChickensOnScreen();