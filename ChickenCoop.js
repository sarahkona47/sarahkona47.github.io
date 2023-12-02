function updateChickens(){
    // document.getElementById("myChickens").innerHTML = "";
    for (var i = 0; i < currentBalance.toFixed(0); i++){
        let img = document.createElement('img');
        img.src = 'images/chicken.png';
        img.style.height = '50px';
        img.style.width = '50px';
        document.getElementById("myChickens").append(img);
        console.log("chicken added");
    }
}    

// Window.onload = addStartingChicken();

function betChickens(){
    for (var i = 0; i < document.getElementById("numberInput").value; i++){
        let img = document.createElement('img');
        img.src = 'images/chicken.png';
        img.style.height = '50px';
        img.style.width = '50px';
        document.getElementById("betChickens").append(img);
        console.log("chicken bet");
    }
}

function clearChickens(){
    document.getElementById("myChickens").innerHTML = "";
    document.getElementById("betChickens").innerHTML = "";
}
