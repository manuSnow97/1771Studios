window.addEventListener('load', () => {
    // console.log('aca estoy');

    const form = document.querySelector('#login');

    validateEmail = (email) =>{
        let errorMsg='';
        let regEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if(email.length == 0){
            errorMsg = `<p class="error">El email es obligatorio</p>`;
        } else if (!regEX.test(email)){
            errorMsg = `<p class="error">El email debe ser valido</p>`;
        };
        return errorMsg;
    }

    validatePassword = (password) =>{
        let errorMsg = '';
        if(password.length == 0){
            errorMsg = `<p class="error">La contraseña es obligatoria</p>`;
        };
        return errorMsg;
    }

    form.addEventListener('submit', async(event) => {
        
        let errors = 0;
        // INPUTS
        const email = document.querySelector('#email');
        const password = document.querySelector('#password');
        // DIVS
        const emailErrors = document.querySelector('.email-errors');
        const passwordErrors = document.querySelector('.password-errors');
        
        // EMAIL VALIDATION
        let emailValidation = validateEmail(email.value);
        if(emailValidation){
            errors +=1;
            emailErrors.innerHTML=emailValidation;
            email.classList.add('invalid');
        } else{
            emailErrors.innerHTML='';
            email.classList.remove('invalid')
        }

        // PASSWORD VALIDATION
        let passwordValidation = validatePassword(password.value);
        if(passwordValidation){
            errors +=1;
            passwordErrors.innerHTML=passwordValidation
            password.classList.add('invalid');
        } else{
            passwordErrors.innerHTML='';
            password.classList.remove('invalid')
        }
        if (errors > 0) {
            event.preventDefault();
        }
        
    })
});