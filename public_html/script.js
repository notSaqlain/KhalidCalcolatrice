function appendToDisplay(value) {
    const display = document.getElementById('display');
    const currentValue = display.value;
    
    if (isOperator(value) && isOperator(currentValue.slice(-1))) {
        return;
    }
    
    display.value += value;
}

function isOperator(char) {
    return ['+', '-', '*', '/', '.'].includes(char);
}

function Soluzione() {
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