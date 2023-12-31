//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

inputs.forEach((input,index) => {
	input.addEventListener('input', (event) => {
	const inputLength = event.target.value.length;
		if(inputLength === 1 && index < inputs.length - 1){
			inputs[index + 1].focus();
		}	
	});

	input.addEventListener('keydown', (event) => {
		if(event.key === 'Backspace' && index > 0){
			if(inputs[index].value === ''){
				inputs[index - 1].focus();
			}
		}
	});
	
});
