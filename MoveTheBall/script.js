document.addEventListener("keypress", fn);
var ball = document.getElementById('ball');

var keyPressHappened = false;

var leftPos = 0;
var topPos = 0;

let inWidth = window.innerWidth;
let inHeight = window.innerHeight;

function fn(event) {
    if (keyPressHappened == false) {
        keyPressHappened = true;
        var key = event.key;
        console.log(key);
        var interval = setInterval(fn2, 10);
        function fn2() {
            let current = ball.getBoundingClientRect();
            if ((key == 'd' || key == 'D') && (ball.offsetWidth + current.left <= inWidth)) {
                leftPos += 0.5;
                ball.style.left = leftPos + '%';
            } else if ((key == 'a' || key == 'A') && (current.left >= 0)) {
                leftPos -= 0.5;
                ball.style.left = leftPos + '%';
            } else if ((key == 'w' || key == 'W') && (current.top >= 0)) {
                topPos -= 0.5;
                ball.style.top = topPos + '%';
            } else if ((key == 's' || key == 'S') && (current.top + ball.offsetHeight <= inHeight)) {
                topPos += 0.5;
                ball.style.top = topPos + '%';
            }
        }

        document.addEventListener("keyup", clInt);
        function clInt() {
            keyPressHappened = false;
            clearInterval(interval);
        }
    }
}
