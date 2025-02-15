let char1, char2 = null
let operations = ""
function num7() {
   document.getElementById("answer").value += "7";
   char1 = 7;
}
function num8() {
    document.getElementById("answer").value += "8";
 }
 function num9() {
    document.getElementById("answer").value += "9";
 }
 function num6() {
    document.getElementById("answer").value += "6";
 }
 function num5() {
    document.getElementById("answer").value += "5";
 }
 function num4() {
    document.getElementById("answer").value += "4";
 }
 function num3() {
    document.getElementById("answer").value += "3";
 }
 function num2() {
    document.getElementById("answer").value += "2";
 }
 function num1() {
    document.getElementById("answer").value += "1";
 }
 function num0() {
    document.getElementById("answer").value += "0";
 }
function AC() {
   document.getElementById("answer").value = "";
   char1, char2 = 0
}
 function multiply() {
    console.log(char1)
    if (char1 == null) {
        document.getElementById("answer").value = "ERROR"
    }else{
        document.getElementById("answer").value += "*";
    }
 }
 function Add() {
    document.getElementById("answer").value += "+";
 }
 function Subtract() {
    document.getElementById("answer").value += "-";
 }
 function Divide() {
    document.getElementById("answer").value += "/";
 }