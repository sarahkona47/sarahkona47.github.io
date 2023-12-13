// Manages chicken coop elements

// Updated the number of chickens you currently have
function updateChickens(){
    document.getElementById("myChickens").innerHTML = "";
    for (var i = 0; i < currentBalance.toFixed(0); i++){
        console.log(i);
        console.log(currentBalance.toFixed(0));

        let img = document.createElement('img');
        img.src = 'images/chicken.png';
        img.style.height = '48px';
        img.style.width = '48px';
        document.getElementById("myChickens").append(img);
        console.log("chicken added");
    }
}    

// Shows the number of chickens you bet
function betChickens(){
    document.getElementById("betChickens").textContent = "You bet "
    for (var i = 0; i < document.getElementById("numberInput").value; i++){
        let img = document.createElement('img');
        img.src = 'images/chicken.png';
        img.style.height = '40px';
        img.style.width = '40px';
        document.getElementById("betChickens").append(img);
        console.log("chicken bet");
    }
}

// Clears the number of chickens you bet each time you bet a new amount
function clearChickens(){
    document.getElementById("betChickens").innerHTML = "";
}
