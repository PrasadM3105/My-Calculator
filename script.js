const display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;

        if (!isNaN(value) || value === '.') {
            currentInput += value;
            display.innerText = currentInput;
        } else if (value === 'AC') {
            currentInput = '';
            firstOperand = '';
            secondOperand = '';
            operator = '';
            display.innerText = '0';
        } else if (['+', '-', '*', '/', '%'].includes(value)) {
            firstOperand = currentInput;
            operator = value;
            currentInput = '';
        } else if (value === '^2') {
            currentInput = (parseFloat(currentInput) ** 2).toString();
            display.innerText = currentInput;
        } else if (value === '=') {
            secondOperand = currentInput;
            performCalculation();
        }
    });
});

function performCalculation() {
    let result = 0;
    if (operator === '+') {
        result = parseFloat(firstOperand) + parseFloat(secondOperand);
    } else if (operator === '-') {
        result = parseFloat(firstOperand) - parseFloat(secondOperand);
    } else if (operator === '*') {
        result = parseFloat(firstOperand) * parseFloat(secondOperand);
    } else if (operator === '/') {
        result = parseFloat(firstOperand) / parseFloat(secondOperand);
    } else if (operator === '%') {
        result = parseFloat(firstOperand) % parseFloat(secondOperand);
    }

    display.innerText = result;
    currentInput = result.toString();
}
