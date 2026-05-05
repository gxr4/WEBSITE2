
function lowercase(){
    let input = document.getElementById("mainString").value;
    let lower = input.toLowerCase();

    document.getElementById("result").innerHTML = "The string in lowercase is: " + lower;
}