starting chicken = 1 chicken;
totalchickens= update total chicken; 
chickenValue = 500?

function buy chicken{
    if (bankbalance > chickenValue){
        buy chicken
        totalchickens =+ 1
    }
    else{
        message " you don't have money to buy chickens"
        totalchickens = totalchickens;
    }
}

function sell chicken{
    if (totalchickens >=1) {
        totalchickens =-1
        currentBalance += chickenValue
    }
    
    if (totalchickens <1){
        message "you don't have any chickens to sell"
    }
}

function chickencoop{
    display on screen totalchickens bouncing around
}
