var submitB = document.getElementById('sub');
var next = document.getElementById('next');
var current = document.getElementById('current');


submitB.addEventListener('click', fn);


function fn() {
    let inputVal = document.getElementById('take').value;
    var interval = setInterval(fn, 1000);
    function fn() {
        next.classList.add('animate');
        setTimeout(function () {
            let nextVal = next.innerHTML;
            current.innerHTML = nextVal;
            nextVal++;
            if (nextVal > inputVal) {
                clearInterval(interval);
            }
            console.log(nextVal);
            next.classList.remove('animate');
            next.innerHTML = nextVal;
        }, 900);
    }
}

