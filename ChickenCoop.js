// var totalchickens = 1; 
// const chickenValue = 500;
// const buyInput = parseFloat(document.getElementById("buyChickenNum").toFixed(0));
// const sellInput = parseFloat(document.getElementById("sellChickenNum").toFixed(0));
// const boughtValue = chickenValue*buyInput;
// const soldValue = chickenValue*sellInput;

// document.getElementById("sellButton").addEventListener("click", sellChicken());
// document.getElementById("buyButton").addEventListener("click", buyChicken());

// function buyChicken() {
//     if (currentBalance >= chickenValue){
//         totalchickens = (totalchickens + buyInput).toFixed(0)
//         deductBalance(boughtValue);
//         document.getElementsByClassName("buyMessage").textContent = "You bought" + buyInput + " chickens!";
//     }
//     else{
//         document.getElementsByClassName("buyMessage").textContent = "You don't have enough money!"; 
//     }
// }

// function sellChicken() {
//     totalchickens = (totalchickens-sellInput).toFixed(0);
//         addBalance((soldValue));
//         document.getElementsByClassName("buyMessage").textContent = "You sold" + sellInput + " chickens!";
    // if (totalchickens >= buyInput) {
    //     totalchickens = (totalchickens-sellInput).toFixed(0);
    //     addBalance((soldValue));
    //     document.getElementsByClassName("buyMessage").textContent = "You sold" + sellInput + " chickens!";
    // }
    
    // else {
    //     document.getElementsByClassName("sellMessage").textContent = "You don't have any chickens!"; 
    // }
// }

function chickenImage(){
    let img = document.createElement('img');
    img.src = 'images/chicken.png';
    img.style.height = '50px';
    img.style.width = '50px';
    img.style.position = 'absolute';
    img.style.top = document.body.clientHeight * Math.random() + 'px';
    img.style.left = document.body.clientWidth * Math.random() + 'px';
}

function addChicken(){
    for (var i = 0; i < currentBalance.toFixed(0); i++){
        document.getElementById("chicken").src="";
    }
}    

// updateChickensOnScreen();