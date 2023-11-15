const startingChickens = 1;
var boughtChicken = 0;
const totalchickens = startingChickens + boughtChicken; 
const chickenValue = 500;

function popup(){
    show popup window with chicken store;
    buy and sell chickens here;
}

function buychicken{
    if (bankbalance > chickenValue){
        buy chicken
        totalchickens =+ 1
    }
    else{
        message " you don't have money to buy chickens"
        totalchickens = totalchickens;
    }
}

function sellchicken{
    if (totalchickens >=1) {
        totalchickens =-1
        currentBalance += chickenValue
    }
    
    else {
        message "you don't have any chickens to sell"
        currentBalance = currentBalance;
    }
}

function chickencoop{
    display on screen totalchickens bouncing around
}

