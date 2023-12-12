const emailError = document.querySelector('#emailError');
const email = document.querySelector('#email');
const userAddress = document.querySelector('#emailAddress');
const btnSubmit = document.querySelector('#submit');
const btnDismiss = document.querySelector('#dismiss');
const header = document.querySelector('.signup');
const success = document.querySelector('.success-message');
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let correctEmail = false;

btnSubmit.addEventListener('click', () => {
    validateEmailEntry();
    console.log(`user submitting the following email address: ${email.value}`);
});

btnDismiss.addEventListener('click', () => {
    removeSuccess();
});

const validateEmailEntry = () => {
    // validate the format of the email address 
    if(emailRegex.test(email.value)){
        correctEmail = true;
        console.log(correctEmail);
    } else {
        correctEmail = false;
        console.log(correctEmail);
    }

    // check if the email field has been left empty at point of click
    if(email.value === '' || email.value === null || correctEmail === false){
        emailError.style.display = 'inline';
        email.style.border = '0.5px red solid';
        email.style.background = 'hsl(4, 100%, 67%)';
        email.style.opacity = '0.3';
        setTimeout(() => {
            emailError.style.display = 'none';
            email.style.border = '1px silver solid ';
            email.style.background = 'none';
        },3000);
    } else if(correctEmail){
        // Hide the current page and display the success message 
        addSuccess();
        userAddress.textContent = `${email.value}`;
    }
}

const addSuccess = () => {
    header.style.display = 'none';
    success.classList.remove('success-message');
    success.classList.add('visible-success');
}

const removeSuccess = () => {
    header.style.display ='';
    success.classList.add('success-message');
    success.classList.remove('visible-success');
}