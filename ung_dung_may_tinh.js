function add() {
    let a = Number(document.getElementById("number1").value);
    let b = Number(document.getElementById("number2").value);
    let c = a + b;
    document.getElementById("result").innerHTML = "result:" + c;
}function sub() {
    let a = Number(document.getElementById("number1").value);
    let b = Number(document.getElementById("number2").value);
    let c = a - b;
    document.getElementById("result").innerHTML = "result:" + c;
}function multi() {
    let a = Number(document.getElementById("number1").value);
    let b = Number(document.getElementById("number2").value);
    let c = a * b;
    document.getElementById("result").innerHTML = ("result:" + c);
}function division() {
    let a = Number(document.getElementById("number1").value);
    let b = Number(document.getElementById("number2").value);
    let c = a / b;
    document.getElementById("result").innerHTML = ("result:" + c)
}




