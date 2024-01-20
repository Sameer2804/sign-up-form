const passwordFields = document.querySelectorAll('input[type=password]');
const email = document.querySelector('input[type=email');
const form = document.querySelector('form');
const errorPrompt = document.querySelector('input+span');

form.addEventListener("submit", (event) => {
    let values = [];
    passwordFields.forEach((field) => {
        values.push(field.value);
    })
    const isPasswordsMatch = values.every(password => password === values[0])
    if(!isPasswordsMatch){
        passwordFields.forEach((password) => {
            password.style.cssText = 'border-color: red';
        })
        errorPrompt.textContent = '* Passwords do not match';
     event.preventDefault();
    }
    
})