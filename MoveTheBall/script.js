document.addEventListener("keypress", fn);
var ball = document.getElementById('ball');

var keyPressHappened = false;

var leftPos = 0;
var topPos = 0;

function fn(event) {
    if (keyPressHappened == false) {
        keyPressHappened = true;
        var key = event.key;
        console.log(key);
        var interval = setInterval(fn2, 10);
        function fn2() {
            if (key == 'd' || key == 'D') {
                leftPos++;
                ball.style.left = leftPos + '%';
            } else if (key == 'a' || key == 'A') {
                leftPos--;
                ball.style.left = leftPos + '%';
            } else if (key == 'w' || key == 'W') {
                topPos--;
                ball.style.top = topPos + '%';
            } else if (key == 's' || key == 'S') {
                topPos++;
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
