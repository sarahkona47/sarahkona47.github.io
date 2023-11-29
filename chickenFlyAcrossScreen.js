const flyingObject = document.getElementById("chicken.png");

let position = 0;
let direction = 1;

function fly() {
  // Move the object
  position += 5 * direction;
  flyingObject.style.left = position + "px";

  // If hits border then bounce back
  if (position <= 0 || position >= window.innerWidth - 50) {
    direction *= -1;
  }
  requestAnimationFrame(fly);
}

fly();


