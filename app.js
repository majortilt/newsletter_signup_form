const emailError = document.querySelector('#emailError');
const email = document.querySelector('#email');
const userAddress = document.querySelector('#emailAddress');
const btnSubmit = document.querySelector('#submit');
const btnDismiss = document.querySelector('#dismiss');
const header = document.querySelector('.signup');
const success = document.querySelector('.success-message');

btnSubmit.addEventListener('click', () => {
    validateEmailEntry();
    console.log(`user submitting the following email address: ${email.value}`);
});

btnDismiss.addEventListener('click', () => {
    removeSuccess();
});

/* TODO: Apply the validateEmail function into validateEmailEntry */
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const validateEmailEntry = () => {
    // check if the email field has been left empty at point of click
    if(email.value === '' || email.value === null){
        emailError.style.display = 'inline-block';
        email.style.border = '0.5px red solid';
        email.style.background = 'hsl(4, 100%, 67%)';
        email.style.opacity = '0.3';
        setTimeout(() => {
            emailError.style.display = 'none';
            email.style.border = '1px silver solid ';
            email.style.background = 'none';
        },3000);
    } else if(email.value.includes="@"){
        // Hide the current page and display the success message 
        userAddress.textContent = `${email.value}`;
        addSuccess();
    }
}

const addSuccess = () => {
    header.style.display = 'none';
    success.classList.remove('success-message');
    success.classList.add('visible-success');
}

const removeSuccess = () => {
    header.style.display = 'block';
    success.classList.add('success-message');
    success.classList.remove('visible-success');
}