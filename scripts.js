// Interactive Card Detials
let cvc_input = document.getElementById('cvc');
let cvc_output = document.querySelector('.cvc-output');

let name_input = document.getElementById('cname');
let name_output = document.querySelector('.cardholder-name');

let number_input = document.getElementById('cnumber');
let number_output = document.querySelector('.card-number');

let month_input = document.getElementById('cmonth');
let month_output = document.querySelector('.card-month');

let year_input = document.getElementById('cyear');
let year_output = document.querySelector('.card-year');

cvc_input.addEventListener("keyup",e => {
    cvc_output.innerText = e.target.value;
});

name_input.addEventListener("keyup", e => {
    name_output.innerText = e.target.value;
});

number_input.addEventListener("keyup", e=> {
    number_output.innerText = e.target.value.toString().replace(/\d{4}(?=.)/g, "$& ");
});

month_input.addEventListener("keyup", e=> {
    month_output.innerText = e.target.value;
});

year_input.addEventListener("keyup", e=> {
    year_output.innerText = e.target.value;
});

// Form Validation
let form = document.querySelector('form');
let success_page = document.querySelector('.success-page');
form.addEventListener('submit', e => {

    e.preventDefault();
    let success = true;

    // Form Errors (Failed Submit)
    if(!cvc_input.value) {
        errorFunc(cvc_input);
        success=false;
    }

    if(!name_input.value) {
        errorFunc(name_input);
        success=false;
    }

    if(!number_input.value) {
        errorFunc(number_input);
        success=false;
    }

    if(!month_input.value) {
        errorFunc(month_input);
        success=false;
    }

    if(!year_input.value) {
        errorFunc(year_input);
        success=false;
    }

    // Thank you page (Sucessful Submit)
    if (success) {
        form.classList.add('hidden');
        success_page.classList.remove('hidden');
    }

});

function errorFunc(element) {
    var elementContainer = element.parentElement;
    var error_message = elementContainer.querySelector('.error-message');
    error_message.innerText = "Can't be blank";
    element.classList.add('error')
}