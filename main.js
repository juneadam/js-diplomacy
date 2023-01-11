'use strict';

const colorChange = document.querySelectorAll('.color-change');

const colorButton = document.querySelector('.color-changer');

colorButton.addEventListener('click', () => {
    for (const element of colorChange) {
        element.classList.add('red');
    }
});

const numForm = document.querySelector('.number-form')

numForm.addEventListener('submit', (evt) => { 
    const numberInput = document.querySelector('input[name="number"]');

    if (numberInput.value.length >= 10) {
        evt.preventDefault()
        document.querySelector("#formFeedback").innerHTML = "Please enter a smaller number.";
    }
    else if (numberInput.value.length < 10) {
        evt.preventDefault()
        document.querySelector("#formFeedback").innerHTML = " You are good to go!"
    }
});
