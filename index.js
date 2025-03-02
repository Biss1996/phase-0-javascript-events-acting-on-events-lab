// Your code here

const dodger = document.getElementById("dodger");
undefined
dodger.style.backgroundColor = "#000000";
'#000000'
dodger.style.backgroundColor = "#FF69B4";
'#FF69B4'
dodger.style.bottom = "100px";
'100px'
dodger.style.leftdodger.style.left      
      
dodger.style.left
'180px'
dodger.style.bottom = "0px";
'0px'
dodger.style.left = "0px";
'0px'
document.addEventListener("keydown", function (event) {
  console.log(event);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
  }
});
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    const gameWidth = 400; // Assuming the game field is 400px wide
    const dodgerWidth = 40; // The dodger is 40px wide
  
    if (left < gameWidth - dodgerWidth) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
undefined
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});
