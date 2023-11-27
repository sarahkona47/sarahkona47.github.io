// Function to create and update the sloping line
function updateCrashBar() {
    let slopingLine = document.getElementById('slopingLine');
    if (!slopingLine) {
      slopingLine = document.createElement('div');
      slopingLine.id = 'slopingLine';
      slopingLine.style.position = 'absolute';
      slopingLine.style.top = '0';
      slopingLine.style.right = '0';
      slopingLine.style.borderLeft = '2px solid blue';
      slopingLine.style.transition = 'height 0.5s';
      document.getElementById('crashContainer').appendChild(slopingLine);
    }
  
    // Update the height of the sloping line based on the crash level
    slopingLine.style.height = `${crashLevel}px`;
}
  
  // Function to increase crash level
function increaseCrashLevel() {
    // Increase the crash level (for demonstration purposes)
    crashLevel += 10;
  
    // Update the width of the crash bar based on the crash level
    const crashBar = document.getElementById('crashBar');
    crashBar.style.width = `${crashLevel}%`;
  
    // Update the sloping line
    updateCrashBar();
}
  