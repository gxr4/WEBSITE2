function calculate() {
    let num = parseInt(document.getElementById("num1").value);
    let text = document.getElementById("num2").value;

    let output = "";

    for (let i = 1; i <= num; i++) {
        output += i + ". " + text + "<br>";
    }

    document.getElementById("forResult").innerHTML = output;
}

function calcw() {
    let num = parseInt(document.getElementById("whilenum").value);
    let text = document.getElementById("whilet").value;

    let output = "";
    let i = 1;

    while (i <= num) {
        output += i + ". " + text + "<br>";
        i++;
    }

    document.getElementById("whileResult").innerHTML = output;
}

function calcdw() {
    let num = parseInt(document.getElementById("dwnum").value);
    let text = document.getElementById("dwt").value;

    let output = "";
    let i = 1;

    do {
        output += i + ". " + text + "<br>";
        i++;
    } while (i <= num);

    document.getElementById("dwResult").innerHTML = output;
}

function clearResult(id) {
    document.getElementById(id).innerHTML = "";
}