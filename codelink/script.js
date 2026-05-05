function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("show").innerHTML = "Please enter valid numbers.";
        return;
    }

    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;

    let quotient = "Cannot divide by zero";
    let remainder = "Cannot divide by zero";

    if (num2 !== 0) {
        quotient = num1 / num2;
        remainder = num1 % num2;
    }

    const formatsum = sum.toFixed(2);
    const formatdiff = difference.toFixed(2);
    const formatprod = product.toFixed(2);
    const formatquo = quotient.toFixed(2);
    const formatremainder = remainder.toFixed(2);

    document.getElementById("sum").innerHTML = "The sum is: " + formatsum;
    document.getElementById("difference").innerHTML = "The difference is: " + formatdiff;
    document.getElementById("product").innerHTML = "The product is: " + formatprod;
    document.getElementById("quotient").innerHTML = "The quotient is: " + formatquo;
    document.getElementById("remainder").innerHTML = "The remainder is: " + formatremainder;
}

function clearFields() {
    document.getElementById("sum").innerHTML = "";
    document.getElementById("difference").innerHTML = "";
    document.getElementById("product").innerHTML = "";
    document.getElementById("quotient").innerHTML = "";
    document.getElementById("remainder").innerHTML = "";
    document.getElementById("show").innerHTML = "";

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}