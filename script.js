//your JS code here. If required.

const inputs = document.querySelectorAll('.code');

// Add event listeners to inputs
inputs.forEach((input, index) => {
  input.addEventListener('input', (event) => {
    const currentValue = event.target.value;
    if (currentValue.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && index > 0) {
      if (inputs[index].value === '') {
        inputs[index - 1].focus();
      }
    }
  });
});