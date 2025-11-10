let count = 0;
const display = document.getElementById('display');

function updateDisplay() {
    display.textContent = count;

    display.classList.remove('positive', 'negative', 'zero');
    if (count > 0) {
        display.classList.add('positive');
    } else if (count < 0) {
        display.classList.add('negative');
    } else {
        display.classList.add('zero');
    }
}

function increase() {
    count++;
    updateDisplay();
}

function decrease() {
    count--;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}

// Initial display update
updateDisplay();