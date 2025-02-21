let char1 = null, char2 = null;
let operations = "";

function updateDisplay(value) {
    document.getElementById("answer").value = value;
}

function appendNumber(num) {
    let answer = document.getElementById("answer");

    if (operations === "") {
        char1 = parseFloat((char1 !== null ? char1 : "") + num);
        answer.value = char1;
    } else {
        char2 = parseFloat((char2 !== null ? char2 : "") + num);
        answer.value = char2;
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

function AC() {
    updateDisplay("");
    char1 = null;
    char2 = null;
    operations = "";
}

function C() {
   let answer = document.getElementById("answer").value;
   
   if (operations === "") {
         char1 = char1 ? Math.floor(char1 / 10) : null;
         updateDisplay(char1 !== null ? char1 : "");
   } else {
         char2 = char2 ? Math.floor(char2 / 10) : null;
         updateDisplay(char2 !== null ? char2 : "");
   }
}

function positiveNegative() {
   let answer = document.getElementById("answer");

   if (operations === "") {
       char1 = char1 !== null ? -char1 : null;
       updateDisplay(char1);
   } else {
       char2 = char2 !== null ? -char2 : null;
       updateDisplay(char2);
   }
}

function multiply() {
    if (char1 !== null) {
        operations = "multiply";
        updateDisplay(char1 + " *");
    }
}

function add() {
    if (char1 !== null) {
        operations = "add";
        updateDisplay(char1 + " +");
    }
}

function subtract() {
    if (char1 !== null) {
        operations = "subtract";
        updateDisplay(char1 + " -");
    }
}

function divide() {
    if (char1 !== null) {
        operations = "divide";
        updateDisplay(char1 + " /");
    }
}

function equals() {
    if (operations !== "" && char1 !== null && char2 !== null) {
        let result;
        switch (operations) {
            case "multiply":
                result = char1 * char2;
                break;
            case "add":
                result = char1 + char2;
                break;
            case "subtract":
                result = char1 - char2;
                break;
            case "divide":
                result = char2 !== 0 ? char1 / char2 : "ERROR";
                break;
            default:
                result = "ERROR";
        }

        updateDisplay(result);
        char1 = result; 
        char2 = null;
        operations = "";
    }
}
