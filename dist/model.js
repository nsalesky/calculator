var Operator;
(function (Operator) {
    Operator[Operator["Add"] = 0] = "Add";
    Operator[Operator["Subtract"] = 1] = "Subtract";
    Operator[Operator["Multiply"] = 2] = "Multiply";
    Operator[Operator["Divide"] = 3] = "Divide";
})(Operator || (Operator = {}));
/**
 * A model storing the state of numbers enterred into the calculator and exposing operations
 * that can be applied to them.
 */
class CalculatorModel {
    constructor() {
        this.prevNumber = null;
        this.stagedNumber = 0;
        this.op = null;
    }
    /**
     * Sets this model's operator to the given operator. Waits for the current operator to be applied if one has already been chosen.
     * If successful, attempts to apply the operator
     * @param op the operator to choose
     */
    selectOp(op) {
        if (this.op === null && this.stagedNumber !== null) {
            // first calculation in a chain
            this.op = op;
            this.prevNumber = this.stagedNumber;
            this.stagedNumber = null;
        }
        else if (this.op !== null && this.prevNumber !== null && this.stagedNumber !== null) {
            // chaining calculations into one call
            this.apply();
            this.op = op;
            this.prevNumber = this.stagedNumber;
            this.stagedNumber = null;
        }
    }
    pushDigit(digit) {
        if (this.stagedNumber === null) {
            this.stagedNumber = digit;
        }
        else {
            this.stagedNumber = (this.stagedNumber * 10) + digit;
        }
    }
    getCurrentValue() {
        if (this.stagedNumber !== null) {
            return this.stagedNumber.toString();
        }
        else {
            return "";
        }
    }
    /**
     * Applies the currently selected binary operator to the previous and staged numbers
     */
    apply() {
        if (this.op !== null && this.prevNumber !== null && this.stagedNumber !== null) {
            let newValue = this.calculateOp();
            this.prevNumber = null;
            this.op = null;
            this.stagedNumber = newValue;
        }
    }
    calculateOp() {
        switch (this.op) {
            case Operator.Add:
                return this.prevNumber + this.stagedNumber;
            case Operator.Subtract:
                return this.prevNumber - this.stagedNumber;
            case Operator.Multiply:
                return this.prevNumber * this.stagedNumber;
            case Operator.Divide:
                // todo: handle divide by zero
                return this.prevNumber / this.stagedNumber;
            default:
                throw "Unsupported operation";
        }
    }
}
export { CalculatorModel, Operator };
