function appendToDisplay(value) {
    const display = document.getElementById('display');
    const currentValue = display.value;
    
    if (currentValue === 'Error') {
        clearDisplay();
    }

    if (currentValue === '0' && !isOperator(value)) {
        display.value = value;
        return;
    }

    if (isOperator(value) && (currentValue === '' || isOperator(currentValue.slice(-1)))) {
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