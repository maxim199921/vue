const form = document.forms["testForm"];
form.addEventListener('submit', sendForm);

const checkboxes = document.getElementsByName("favorite_pet");
const other = document.querySelector("[value='other']");

if (other) {
    for(let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', function (event) {
            if (event.target.value !== 'other') {
                other.checked = false;
            } else if (other.checked) {
                for(let i = 0; i < checkboxes.length; i++) {
                    if (other !== checkboxes[i]) {
                        checkboxes[i].checked = false;
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
