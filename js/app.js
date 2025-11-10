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

function getCustomAmount() {
    const input = document.getElementById('customAmount');
    if (!input) return 1;
    const value = parseFloat(input.value);
    return isNaN(value) ? 1 : value;
}

function increase() {
    const amt = getCustomAmount();
    count += amt;
    updateDisplay();
}

function decrease() {
    const amt = getCustomAmount();
    count -= amt;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}
