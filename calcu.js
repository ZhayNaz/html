let char1 = null, char2 = null;
let operations = "";

function updateDisplay(value) {
    document.getElementById("answer").value = value;
}

function appendNumber(num) {
    let answer = document.getElementById("answer");

    if (num === "." && answer.value.includes(".")) return;

    answer.value += num;

    if (operations === "") {
        char1 = answer.value;
    } else {
        char2 = answer.value;
    }
}

function num0() { appendNumber("0"); }
function num1() { appendNumber("1"); }
function num2() { appendNumber("2"); }
function num3() { appendNumber("3"); }
function num4() { appendNumber("4"); }
function num5() { appendNumber("5"); }
function num6() { appendNumber("6"); }
function num7() { appendNumber("7"); }
function num8() { appendNumber("8"); }
function num9() { appendNumber("9"); }

function point() {
    let answer = document.getElementById("answer");

    if (answer.value === "" || answer.value === "-" || (operations !== "" && char2 === null)) {
        appendNumber("0."); 
    } else if (!answer.value.includes(".")) {
        appendNumber(".");
    }
}

function C() {
    updateDisplay("");
    char1 = null;
    char2 = null;
    operations = "";
}

function AC() {
    let answer = document.getElementById("answer").value;
    
    if (operations === "") {
        char1 = char1 ? char1.toString().slice(0, -1) : null;
        updateDisplay(char1 !== null ? char1 : "");
    } else {
        char2 = char2 ? char2.toString().slice(0, -1) : null;
        updateDisplay(char2 !== null ? char2 : "");
    }
}

function positiveNegative() {
    let answer = document.getElementById("answer");

    if (operations === "") {
        char1 = char1 !== null ? -parseFloat(char1) : null;
        updateDisplay(char1);
    } else {
        char2 = char2 !== null ? -parseFloat(char2) : null;
        updateDisplay(char2);
    }
}

function setOperation(op) {
    if (char1 !== null) {
        operations = op;
        updateDisplay("");
    }
}

function multiply() { setOperation("multiply"); }
function add() { setOperation("add"); }
function subtract() { setOperation("subtract"); }
function divide() { setOperation("divide"); }

function equals() {
    let answer = document.getElementById("answer");

    if (char1 !== null && char2 === null) {
        answer.value = char1;
        return;
    }

    if (char1 !== null && char2 !== null) {
        let num1 = parseFloat(char1);
        let num2 = parseFloat(char2);
        let result = 0;

        switch (operations) {
            case "multiply":
                result = num1 * num2;
                break;
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "divide":
                result = num2 !== 0 ? num1 / num2 : "ERROR"; 
                break;
            default:
                result = "ERROR";
        }

        answer.value = result;
        char1 = result.toString(); 
        char2 = null;
        operations = "";
    }
}
