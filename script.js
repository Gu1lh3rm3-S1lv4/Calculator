let display = document.getElementById('display');
let historyList = document.getElementById('history');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    const expression = display.value;

    try {
        const result = eval(expression);
        display.value = result;
        addToHistory(expression + ' = ' + result);
    } catch (e) {
        display.value = 'Erro';
    }
}

function addToHistory(entry) {
    const li = document.createElement('li');
    li.textContent = entry;
    historyList.prepend(li); // adiciona no topo da lista
}
function addToHistory(entry) {
    const li = document.createElement('li');
    const btn = document.createElement('history');
    
    btn.textContent = entry;
    btn.style.width = '100%'; // botão ocupa toda a largura do li
    btn.style.textAlign = 'left'; // texto alinhado à esquerda
    
    //* Quando clicar no botão, coloca a expressão no display para editar
    btn.onclick = function() {
        // Pega só a parte da expressão antes do "="
        const expr = entry.split('=')[0].trim();
        display.value = expr;
    };

    li.appendChild(btn);
    historyList.prepend(li);
}
function toggleHistory() {
    const historyList = document.getElementById('history');
    if (historyList.style.display === 'none') {
        historyList.style.display = 'block';
    } else {
        historyList.style.display = 'none';
    }
}




