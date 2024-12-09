function appendToDisplay(value) {
    const display = document.getElementById('display');
    const currentValue = display.value;
    
    // Prevent multiple operators in a row or starting with an operator except minus for negative numbers
    if (isOperator(value) && (currentValue === '' || isOperator(currentValue.slice(-1)))) {
        return;
    }
    
    display.value += value;
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}