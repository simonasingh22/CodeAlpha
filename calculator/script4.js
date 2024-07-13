const display = document.getElementById('display');
let displayValue = '0';
let currentOperator = null;
let firstOperand = null;
let secondOperand = null;

function clearDisplay() {
    displayValue = '0';
    display.innerText = displayValue;
    currentOperator = null;
    firstOperand = null;
    secondOperand = null;
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1) || '0';
    display.innerText = displayValue;
}

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = number.toString();
    } else {
        displayValue += number.toString();
    }
    display.innerText = displayValue;
}

function appendOperator(operator) {
    if (currentOperator !== null) {
        calculateResult();
    }
    firstOperand = parseFloat(displayValue);
    currentOperator = operator;
    displayValue = '0';
}

function calculateResult() {
    if (currentOperator === null || displayValue === '0') return;
    secondOperand = parseFloat(displayValue);
    let result;
    switch (currentOperator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
    }
    displayValue = result.toString();
    display.innerText = displayValue;
    currentOperator = null;
    firstOperand = result;
}
