import { CalculatorModel, Operator } from "./model.js";
// todo: potentially unnecessary
const MAX_SCREEN_CHARS = 10;
const model = new CalculatorModel();
// sets the screen display to the specified string value
function setDisplay(text) {
    document.querySelector("#screen").textContent = text;
}
// initializes event listeners
function setupEventListeners() {
    document.querySelector("#zero-button").addEventListener("click", e => updateDigit(0));
    document.querySelector("#one-button").addEventListener("click", e => updateDigit(1));
    document.querySelector("#two-button").addEventListener("click", e => updateDigit(2));
    document.querySelector("#three-button").addEventListener("click", e => updateDigit(3));
    document.querySelector("#four-button").addEventListener("click", e => updateDigit(4));
    document.querySelector("#five-button").addEventListener("click", e => updateDigit(5));
    document.querySelector("#six-button").addEventListener("click", e => updateDigit(6));
    document.querySelector("#seven-button").addEventListener("click", e => updateDigit(7));
    document.querySelector("#eight-button").addEventListener("click", e => updateDigit(8));
    document.querySelector("#nine-button").addEventListener("click", e => updateDigit(9));
    document.querySelector("#plus-button").addEventListener("click", e => selectOp(Operator.Add));
    document.querySelector("#minus-button").addEventListener("click", e => selectOp(Operator.Subtract));
    document.querySelector("#multiply-button").addEventListener("click", e => selectOp(Operator.Multiply));
    document.querySelector("#divide-button").addEventListener("click", e => selectOp(Operator.Divide));
    document.querySelector("#equal-button").addEventListener("click", e => {
        model.apply();
        setDisplay(model.getCurrentValue());
    });
}
function updateDigit(digit) {
    model.pushDigit(digit);
    setDisplay(model.getCurrentValue());
}
function selectOp(op) {
    model.selectOp(op);
    setDisplay(model.getCurrentValue());
}
window.addEventListener("load", function () {
    setupEventListeners();
});
