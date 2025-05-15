const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const equalBtn = document.getElementById('equal');
const clearBtn = document.getElementById('clear');

let input = '';

function updateDisplay() {
  display.value = input;
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const key = button.getAttribute('data-key');
    if (key) {
      input += key;
      updateDisplay();
    }
  });
});

equalBtn.addEventListener('click', () => {
  try {
    input = eval(input).toString();
    updateDisplay();
  } catch (error) {
    input = 'Error';
    updateDisplay();
    setTimeout(() => {
      input = '';
      updateDisplay();
    }, 1500);
  }
});

clearBtn.addEventListener('click', () => {
  input = '';
  updateDisplay();
});

// Keyboard support
document.addEventListener('keydown', (e) => {
  if (/[0-9+\-*/.]/.test(e.key)) {
    input += e.key;
    updateDisplay();
  } else if (e.key === 'Enter') {
    equalBtn.click();
  } else if (e.key === 'Backspace') {
    input = input.slice(0, -1);
    updateDisplay();
  } else if (e.key === 'Escape') {
    clearBtn.click();
  }
});
