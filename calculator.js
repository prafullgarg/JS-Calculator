function clearDisplay() {
    const display = document.getElementById('display')
    display.value = ''
}

function deleteLast() {
    const display = document.getElementById('display')
    display.value = display.value.slice(0, -1)
}

function appendDisplay(value) {
    const display = document.getElementById('display')
    display.value += value
}


let historyList = []
function calculateExpression() {
    try {
        const expression = document.getElementById('display').value
        const result = eval(expression)
        display.value = result

        addTohistory(expression + ' = ' + result)
    } catch (error) {
        alert('Invalid Expresion!')
        clearDisplay();
    }
}

function addTohistory(entry) {
    historyList.push(entry)
    renderHistory()
}

function renderHistory() {
    const historyDiv = document.getElementById('history')
    historyDiv.innerHTML = ""

    for (let item of historyList.reverse()) {
        let div = document.createElement('div')
        div.className = 'history-item'
        div.textContent = item
        historyDiv.appendChild(div)
    }
}

function calculate(operation) {
    const display = document.getElementById('display')
    const value = parseFloat(display.value)
    switch (operation) {
        case 'sin':
            display.value = Math.sin(value)
            break;
        case 'cos':
            display.value = Math.cos(value)
            break;
        case 'tan':
            display.value = Math.tan(value)
            break;
        case 'Math.sqrt':
            display.value = Math.sqrt(value)
            break;
        case 'Math.exp':
            display.value = Math.exp(value)
            break;
        case '^':
            let exponent = prompt("Enter the exponent:", "2");
            display.value = Maths.pow(value, parseFloat(exponent))
            break;
        default:
            alert('Invalid Opretion!')
            clearDisplay()
    }
}


document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '+':
        case '-':
        case '*':
        case '/':
            appendDisplay(event.key)
            break;
        case 'Enter':
            calculateExpression();
            break;
        case 'Backspace':
            deleteLast();
            break;
        case 'Escape':
            clearDisplay();
            break;
    }
})



