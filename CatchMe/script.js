var no = document.getElementById('no');

no.addEventListener("mouseenter", fn);


//taking care of random no..
function fn() {
    console.log("Hello");
    var a = Math.random() * 100;
    if (a >= 30) {
        no.style.left = Math.random() * 100 + "%";
        no.style.top = Math.random() * 100 + "%";
    } else {
        no.style.left = Math.random() * 100 + "%";
    }
}
