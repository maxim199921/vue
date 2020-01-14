const form = document.forms["testForm"];
form.addEventListener('submit', sendForm);

const checkboxes = document.querySelectorAll('[data-select-picture]');
const resetElement = document.getElementById('reset');

if (resetElement) {
    for(let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', function (event) {
            for(let i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) {
                    checkboxes[i].parentElement.classList.add('wizzard-focus');
                } else {
                    checkboxes[i].parentElement.classList.remove('wizzard-focus');
                }
            }
            if (event.target.value !== 'other') {
                resetElement.checked = false;
                resetElement.parentElement.classList.remove('wizzard-focus');
            } else if (resetElement.checked) {
                for(let i = 0; i < checkboxes.length; i++) {
                    if (resetElement !== checkboxes[i]) {
                        checkboxes[i].checked = false;
                        checkboxes[i].parentElement.classList.remove('wizzard-focus');
                    }
                }
            }
        });
    }
}

function sendForm(event) {
    event.preventDefault();
    let favorite_pet = [];
    for(let i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            favorite_pet.push(checkboxes[i].value);
        }
    }
    executeAjax(favorite_pet)
}

function executeAjax(data) {
    console.log(data);
    //AJAX REQUEST
}
