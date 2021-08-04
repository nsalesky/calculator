enum Operator {
    Add,
    Subtract,
    Multiply,
    Divide,
}

/**
 * A model storing the state of numbers enterred into the calculator and exposing operations
 * that can be applied to them.
 */
class CalculatorModel {
    // the number previously constructed/calculated or null if no such number has been created yet
    private prevNumber: number | null;
    
    // the number currently being constructed or null if the user hasn't begun constructing a number yet
    private stagedNumber: number | null;

    // the selected operator or null if no operator has been chosen yet
    private op: Operator| null;
    
    constructor() {
        this.prevNumber = null;
        this.stagedNumber = null;
        this.op = null;
    }

    /**
     * Selects the given operator to use with calculations. If one has already been chosen, but not yet applied, then
     * it first attempts to apply it
     * If successful, attempts to apply the operator
     * @param op the operator to choose
     */
    selectOp(op: Operator): string {
        if (this.stagedNumber === null) 
            return "";

        if (this.op === null) {
            this.op = op;
            this.swapBack();
        } else {
            this.calculate();
            
            this.op = op;
            this.swapBack();
        }

        return this.getOpName(op);
    }


    /**
     * Pushes the selected digit to the end of the number currently being staged.
     * @param digit the digit to add
     * @returns the current display output
     */
    pushDigit(digit: number): string {
        if (this.stagedNumber === null) {
            this.stagedNumber = digit;
        } else {
            this.stagedNumber = (this.stagedNumber * 10) + digit;
        }

        return this.stagedNumber.toString();
    }

    /**
     * Gets the current output value of the calculator model
     * @returns the output value to display
     */
    // getOutput(): string {
    //     if (this.stagedNumber !== null) {
    //         return this.stagedNumber.toString();
    //     } else {
    //         return "";
    //     }
    // }

    /**
     * Calculates the current state of the model.
     * Puts the new value into this.stagedNumber.
     * @returns the current display output
     */
    calculate(): string {
        if (this.op !== null && this.prevNumber !== null && this.stagedNumber !== null) {
            let newValue = this.processResult();

            if (typeof(newValue) === "number") {
                this.prevNumber = null;
                this.op = null;
                this.stagedNumber = newValue;

                return this.stagedNumber.toString(); // return calculated value
            } else {
                return newValue; // return error message
            }
        } else {
            return ""; // might want to give more information
        }
    }

    /**
     * Determines the result of applying this.prevNumber and this.stagedNumber with this.op.
     * If an error message is returned, clears the internal state of the calculator.
     * @returns either the numeric result or a string error message.
     */
    private processResult(): number | string {
        switch(this.op) {
            case Operator.Add:
                return this.prevNumber! + this.stagedNumber!;
            case Operator.Subtract:
                return this.prevNumber! - this.stagedNumber!;
            case Operator.Multiply:
                return this.prevNumber! * this.stagedNumber!;
            case Operator.Divide:
                if (this.stagedNumber === 0) {
                    return "Div by 0";
                }

                return this.prevNumber! / this.stagedNumber!;
            default:
                throw "Unsupported operation";
        }
    }

    /**
     * Swaps the value currently stored in this.stagedNumber to this.prevNumber, and sets this.stagedNumber to null
     */
    private swapBack() {
        this.prevNumber = this.stagedNumber;
        this.stagedNumber = null;
    }

    /**
     * Gets the 1-character symbol name of the specified operator.
     * @param op the operator to name
     * @returns the operator's string symbol name
     */
    private getOpName(op: Operator): string {
        switch (op) {
            case Operator.Add:
                return "+";
            case Operator.Subtract:
                return "-";
            case Operator.Multiply:
                return "*";
            case Operator.Divide:
                return "/";
        }
    }
}

export {CalculatorModel, Operator};