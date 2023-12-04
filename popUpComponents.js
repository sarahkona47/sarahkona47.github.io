
function showLosePopup() {
  document.getElementById('losepopup').style.display = 'block';
}

// Close the popup
function closeLosePopup() {
  document.getElementById('losepopup').style.display = 'none';
}

document.getElementById('close-btn').addEventListener('click', closeLosePopup);
