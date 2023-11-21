let popup = document.getElementsByClassName("rules")[0];
let closeBtn = document.getElementById("rulesClose");

function rulesPopupWin() {
    popup.style.transform = "translateY(0)";
  }

closeBtn.addEventListener("click", (e) => {
    popup.style.transform = "translateY(-70vh)";
});

window.onload = rulesPopupWin();