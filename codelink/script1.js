function calcf() {
    let num = parseInt(document.getElementById("forn").value);
    let text = document.getElementById("fort").value;

    let output = "";

    for (let i = 1; i <= num; i++) {
        output += i + ". " + text + "\n";
    }

    document.getElementById("forResult").innerText = output;
}

function calcw() {
    let num = parseInt(document.getElementById("whilen").value);
    let text = document.getElementById("whilet").value;

    let output = "";
    let i = 1;

    while (i <= num) {
        output += i + ". " + text + "\n";
        i++;
    }

    document.getElementById("whileResult").innerText = output;
}

function calcdw() {
    let num = parseInt(document.getElementById("dwhilen").value);
    let text = document.getElementById("dwhilet").value;

    let output = "";
    let i = 1;

    do {
        output += i + ". " + text + "\n";
        i++;
    } while (i <= num);

    document.getElementById("dwResult").innerText = output;
}

function clearFields(type) {

    if (type === "for") {
        document.getElementById("forn").value = "";
        document.getElementById("fort").value = "";
        document.getElementById("forResult").innerText = "";
    }

    else if (type === "while") {
        document.getElementById("whilen").value = "";
        document.getElementById("whilet").value = "";
        document.getElementById("whileResult").innerText = "";
    }

    else if (type === "dwhile") {
        document.getElementById("dwhilen").value = "";
        document.getElementById("dwhilet").value = "";
        document.getElementById("dwResult").innerText = "";
    }
}