// Sell chickens popup window
// function sellPopupWin() {
//     var popup = document.getElementById("sellChickenPopup");
//     popup.classList.toggle("show");
//   }


// Buy chickens popup window
// function buyPopupWin() {
//   var popup = document.getElementById("buyChickenPopup");
//   popup.classList.toggle("show");
// }


// page refresh pop ups 
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("overlay").style.display = "flex";
});

function closePopup() {
  document.getElementById("overlay").style.display = "none";
}