const input = document.getElementById('input');

const buttons = document.querySelectorAll('.button');


let currentInput = '';
let resultDisplayed = false;


function updateDisplay(value) {
    input.value = value;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText ;


        if (value === 'AC') {
            currentInput = '' ;
            resultDisplayed = false ;
            updateDisplay(currentInput);
        } 
        else if (value === 'DEL') {
            if (resultDisplayed) {
                currentInput = '';
                resultDisplayed = false;
            } else {
                currentInput = currentInput.slice(0, -1);
            }
            updateDisplay(currentInput);
        } 
        else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
                resultDisplayed = true;
                updateDisplay(currentInput);
            } catch (e) {
                updateDisplay('Error');
            }
        } 
        else {
            if (resultDisplayed) {
                currentInput = value;
                resultDisplayed = false;
            } else {
                currentInput += value;
            }
            updateDisplay(currentInput);
        }
    });
});
