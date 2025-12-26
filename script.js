let currentInput = '0';
let previousInput = '';
let operator = '';
let shouldResetScreen = false;

const screen = document.getElementById('calculatorScreen');
const buttons = document.querySelectorAll('.calculator-btn');

function updateScreen() {
    screen.textContent = currentInput;
}

// ito yung function na naglalagay ng number sa screen pag pinindot mo yung numbers
function handleNumberClick(value) {
    if (shouldResetScreen) {
        currentInput = '0';
        shouldResetScreen = false;
    }
    
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else if (value === '.' && currentInput.includes('.')) {
        return;
    } else {
        currentInput += value;
    }
    
    updateScreen();
}

// function para doon sa  paglalagay ng operator like plus ganun
function handleOperatorClick(op) {
    const inputValue = parseFloat(currentInput);
    
    if (previousInput === '') {
        previousInput = inputValue;
    } else if (operator) {
        const result = calculate();
        previousInput = result;
        currentInput = String(result);
        updateScreen();
    }
    
    shouldResetScreen = true;
    operator = op;
}

//dito na yung pag caclculate yan yung mismong natitriger
function calculate() {
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    if (isNaN(prev) || isNaN(current)) {
        return current;
    }
    
    switch (operator) {
        case '+':
            return prev + current;
        case '-':
            return prev - current;
        case '*':
            return prev * current;
        case '/':
            if (current === 0) {
                alert('Hindi pwedeng mag-divide sa zero!');
                return prev;
            }
            return prev / current;
        default:
            return current;
    }
}

//lastly dito namn yung sa equal sign pag clinick yan mamacacalculate ny na
function handleEquals() {
    if (previousInput === '' || operator === '') {
        return;
    }
    
    const result = calculate();
    currentInput = String(result);
    previousInput = '';
    operator = '';
    shouldResetScreen = true;
    updateScreen();
}

function handleClear() {
    currentInput = '0';
    previousInput = '';
    operator = '';
    shouldResetScreen = false;
    updateScreen();
}

function handleDelete() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateScreen();
}

function addLoadingState(button) {
    button.classList.add('loading');
}

function removeLoadingState(button) {
    button.classList.remove('loading');
}


function handleButtonClick(event) {
    const button = event.currentTarget;
    const action = button.getAttribute('data-action');
    const value = button.getAttribute('data-value');
    
    addLoadingState(button);
    
    setTimeout(function() {
        if (action === 'number') {
            handleNumberClick(value);
        } else if (action === 'operator') {
            handleOperatorClick(value);
        } else if (action === 'equals') {
            handleEquals();
        } else if (action === 'clear') {
            handleClear();
        } else if (action === 'delete') {
            handleDelete();
        }
        
        removeLoadingState(button);
    }, 150);
}

buttons.forEach(function(button) {
    button.addEventListener('click', handleButtonClick);
});

