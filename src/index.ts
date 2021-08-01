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


// debug
const display = document.querySelector("#screen");

function setDisplay(text: string) {
    if (display != null) {
        display.textContent = text;
    }
}