export default class Calculator {
  constructor(currentValue) {
    this.currentValue = currentValue;
    this.output = 0;
  }

  ResetValues() {
    this.currentValue.textContent = "";
  }

  appendNumbers(no) {
    const str = this.currentValue.textContent.split(" ");
    for (let i = 0; i < str.length; i++) {
      if (str[str.length - 1].includes(no) && no == ".") return;
    }

    if (this.currentValue.textContent == "0") {
      this.currentValue.textContent = "";
    }
    
    this.currentValue.append(no);
  }

  chooseOperation(operation, operators) {
    const lastValue = this.currentValue.textContent.charAt(
      this.currentValue.textContent.length - 2
    );
    // ^length - 2, not - 1 because there is an extra space presents after any operator
    // ^ this space helps in splitting the string into array

    const space = this.currentValue.textContent.charAt(
      this.currentValue.textContent.length - 1
    );

    // &prevent typing duplicate operators
    operators.forEach((opr) => {
      if (lastValue == opr && space == " ") {
        const newValue = this.currentValue.textContent.slice(0, -3);
        //^[' ', '+', ' '] ==> slice(0,-3) to remove the 2 spaces at the start & the end & also remove the prev operator
        this.currentValue.textContent = newValue;
      }
    });

    this.currentValue.append(` ${operation} `);
  }

  computeResults() {
    // &trim is used to prevent any extra space element to be present at the end of
    // &the array when using an operator without entering a second operand after it
    let results = this.currentValue.textContent.trim().split(" ");
    const operations = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b,
    };

    results = results.map((num) => {
      if (num == "x") {
        return "*";
      }
      return num;
    });

    if (results.length < 3) {
      // &what happens if user enters 1st operand & the operator only then clicks the = btn
      this.currentValue.textContent = results[0];
    } else {
      results.map((num, indx) => {
        // ^ this if condition prevents splicing from the end of the array if the loop is at index 0
        if (indx > 0) {
          if (num == "+") {
            this.output = operations["+"](
              +results[indx - 1],
              +results[indx + 1]
            );
          } else if (num == "-") {
            this.output = operations["-"](
              +results[indx - 1],
              +results[indx + 1]
            );
          } else if (num == "*") {
            this.output = operations["*"](
              +results[indx - 1],
              +results[indx + 1]
            );
          } else if (num == "/") {
            this.output = operations["/"](
              +results[indx - 1],
              +results[indx + 1]
            );
          }
          // ^['10','+','5','+','5'] ==> index of 1st + operator is 1. after splice ==> ['15','+','5'] the browser
          // ^continues to loop, but now the index is 2 which matches the number 5 in the spliced array, so if
          // ^ I didn't place 0 at the 1st index after every splice, the last number will not be included in
          // ^ any calculation ==> ['0','15','+','5']

          // &I always spliced starting from the index before the index of the operator (indx of 1st operand)
          results.splice(indx - 1, 3, 0, this.output);
        }
      });
      if (this.output || this.output == 0) {
      if (this.output || this.output == 0) {
        this.currentValue.textContent = this.output;
      }
    }
  }

  delValue() {
    if (this.currentValue.textContent.length > 0) {
      let newValue;
      if (
        this.currentValue.textContent[
          this.currentValue.textContent.length - 1
        ] == " "
      ) {
        newValue = this.currentValue.textContent.slice(0, -2);
      } else {
        newValue = this.currentValue.textContent.slice(0, -1);
      }
      this.currentValue.textContent = newValue;
    }
  }
}
