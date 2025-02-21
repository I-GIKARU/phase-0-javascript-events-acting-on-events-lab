// Your code here
function moveDodgerLeft() {
    const dodger = document.getElementById("dodger");
    const left = parseInt(dodger.style.left.replace("px", ""), 10);

    if (left > 0) {
        dodger.style.left = `${left - 10}px`;
    }
}

function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
    const left = parseInt(dodger.style.left.replace("px", ""), 10);

    if (left < 360) { // Assuming the game container width is 400px
        dodger.style.left = `${left + 10}px`;
    }
}
