// var start = 0;
// var end = 400;
// var smoothScroll = setInterval(fn, 50);

// function fn() {
//     if (start >= end) {
//         clearInterval(smoothScroll);
//     }
//     start += 50;
//     window.scrollBy(0, 50);
// }

var exp = document.getElementById('exp');
exp.addEventListener('click', fn);

function fn(event) {
    event.preventDefault();
    var start = 0;
    var end = 700;
    function scroller() {
        if (start >= end) {
            clearInterval(smoothScroll);
        }
        start += 30;
        window.scrollBy(0, 30);
    }
    var smoothScroll = setInterval(scroller, 30);
}

// var atags = document.querySelectorAll('.navmenu a');

// for(var i = 0;i<atags.length;i++){
//     atags[i].addEventListener('click',function(event){
//         event.preventDefault();
//         var targetId = this.textContent.trim().toLowerCase();
//         var target = document.getElementById(targetId);
//         target.scrollIntoView({behavior:'smooth'});
//     });
// }

// function fn(target){
//     var targetCoordinates = target.getBoundingClientRect();
//     console.log(targetCoordinates.top);
//     if(targetCoordinates.top <=0){
//         clearInterval(scrollinterval);
//         return;
//     }
//     window.scrollBy(0,20);
// }


var skillsDisplay = document.getElementById('skillsDisplay');
var bars = document.querySelectorAll('#skillsDisplay .bars');


var animationDone = false;

document.addEventListener("scroll", checkScroll);

function checkScroll() {
    var coordinates = skillsDisplay.getBoundingClientRect();
    if (animationDone == false && coordinates.top <= window.innerHeight) {
        animationDone = true;
        console.log('visible');
        reset();
        fill();
    }else if(coordinates.top > window.innerHeight){
        animationDone = false;
        reset();
    }
}

function reset() {
    for (var bar of bars) {
        bar.style.width = 0 + '%';
        console.log(bar);
    }
}

function fill() {
    for (let bar of bars) {
        let target = bar.getAttribute('data-barWidth');
        let current = 0;
        let filling = setInterval(function () {
            if (current >= target) {
                clearInterval(filling);
            }
            current++;
            bar.style.width = current + '%';
        }, 5);
    }
}




