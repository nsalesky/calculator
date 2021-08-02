const display = document.querySelector("#screen");

function add(num1: number, num2: number): number {
    return num1 + num2;
}

function subtract(num1: number, num2: number): number {
    return num1 - num2;
}

function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

function divide(num1: number, num2: number): number {
    return num1 / num2;
}

enum Operator {
    Add,
    Subtract,
    Multiply,
    Divide,
}

function operate(op: Operator, num1: number, num2: number): number {
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

// sets the screen display to the specified string value
function setDisplay(text: string) {
    if (display != null) {
        display.textContent = text;
    }
}

let currentNumBuffer: number = 0;

// inputs the specified number into the buffer
function inputNumber(num: number) {
    if (currentNumBuffer === 0) {
        currentNumBuffer = num;
    } else {
        currentNumBuffer = (currentNumBuffer * 10) + num;
    }

    setDisplay(currentNumBuffer.toString());
}

// initializes event handlers
function init() {
    document.querySelector("#zero-button").addEventListener("click", e => inputNumber(0));
    document.querySelector("#one-button").addEventListener("click", e => inputNumber(1));
    document.querySelector("#two-button").addEventListener("click", e => inputNumber(2));
    document.querySelector("#three-button").addEventListener("click", e => inputNumber(3));
    document.querySelector("#four-button").addEventListener("click", e => inputNumber(4));
    document.querySelector("#five-button").addEventListener("click", e => inputNumber(5));
    document.querySelector("#six-button").addEventListener("click", e => inputNumber(6));
    document.querySelector("#seven-button").addEventListener("click", e => inputNumber(7));
    document.querySelector("#eight-button").addEventListener("click", e => inputNumber(8));
    document.querySelector("#nine-button").addEventListener("click", e => inputNumber(9));
}

init();