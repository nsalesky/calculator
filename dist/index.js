"use strict";
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
var Operator;
(function (Operator) {
    Operator[Operator["Add"] = 0] = "Add";
    Operator[Operator["Subtract"] = 1] = "Subtract";
    Operator[Operator["Multiply"] = 2] = "Multiply";
    Operator[Operator["Divide"] = 3] = "Divide";
})(Operator || (Operator = {}));
function operate(op, num1, num2) {
    switch (op) {
        case Operator.Add:
            return add(num1, num2);
        case Operator.Subtract:
            return subtract(num1, num2);
        case Operator.Multiply:
            return multiply(num1, num2);
        case Operator.Divide:
            return divide(num1, num2);
        default:
            throw "Unsupported operation";
    }
}
// debug
var display = document.querySelector("#screen");
function setDisplay(text) {
    if (display != null) {
        display.textContent = text;
    }
}
