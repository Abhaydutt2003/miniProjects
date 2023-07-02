var buttons = document.getElementsByClassName('btn');
var display = document.getElementById('display');
var operand1 = null;
var operand2 = null;
var operator = null;


function fn() {
    var value = this.getAttribute('data-value');
    if (value == 'AC') {
        display.innerText = "";
        operand1 = null;
        operand2 = null;
        operator = null;
    } else if (value == '!') {
        var text = display.innerHTML;
        if (text.charAt(0) == '-') {
            display.innerText = text.substring(1);
        } else {
            display.innerText = '-' + text;
        }
    } else if (value == '%') {

        operand1 = parseFloat(display.innerText);
        display.innerText = "";
        operator = "/";

    } else if (value == '/') {

        operand1 = parseFloat(display.innerText);
        display.innerText = "";
        operator = "/";

    } else if (value == '*') {

        operand1 = parseFloat(display.innerText);
        display.innerText = "";
        operator = "*";

    } else if (value == '-') {

        operand1 = parseFloat(display.innerText);
        display.innerText = "";
        operator = "-";

    } else if (value == '+') {

        operand1 = parseFloat(display.innerText);
        display.innerText = "";
        operator = "+";


    } else if (value == '=') {


        operand2 = parseFloat(display.innerText);
        var String = operand1;
        String += operator; String += operand2;
        var ans = eval(String);
        display.innerHTML = ans;


    } else if (value == '.') {
        var dot = ".";
        display.innerText += dot;
    } else {
        display.innerText += value;
    }
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', fn);
}
