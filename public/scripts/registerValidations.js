window.addEventListener('load', () => {
    console.log('aca estoy');

    const form = document.querySelector('#register');

    const validateNombre = (nombre) => {
        let errorMsg = '';
        if (nombre.length == 0) {
            errorMsg = `<p class="error">Tienes que escribir un nombre</p>`;
        };
        return errorMsg;
    };

    const validateApellido = (apellido) => {
        let errorMsg = '';
        if (apellido.length == 0) {
            errorMsg = `<p class="error">Tienes que escribir un apellido</p>`;
        };
        return errorMsg;
    };

    const validateDireccion = (direccion) => {
        let errorMsg = '';
        if (direccion.length == 0) {
            errorMsg = `<p class="error">Completar</p>`;
        };
        return errorMsg;
    };

    const validateCiudad = (ciudad) => {
        let errorMsg = '';
        if (ciudad.length == 0) {
            errorMsg = `<p class="error">Completar</p>`;
        };
        return errorMsg;
    };

    const validateEstado = (estado_provincia) => {
        let errorMsg = '';
        if (estado_provincia.length == 0) {
            errorMsg = `<p class="error">Completar</p>`;
        };
        return errorMsg;
    };

    const validatePais = (pais) => {
        let errorMsg = '';
        if (pais.length == 0) {
            errorMsg = `<p class="error">Completar</p>`;
        };
        return errorMsg;
    };

    const validateEmail = (email) => {
        let errorMsg = '';
        let regEX = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (email.length == 0) {
            errorMsg = `<p class="error">Tienes que escribir un correo electrónico</p>`;
        } else if (!regEX.test(email)) {
            errorMsg = `<p class="error">Debes escribir un formato de correo válido</p>`;
        };
        return errorMsg;
    };

    const validateTelefono = (telefono) => {
        let errorMsg = ''
        let regEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
        if (!regEx.test(telefono)) {
            errorMsg = `<p class="error">Completar</p>`;
        } else if (telefono.length > 12) {
            errorMsg = `<p class="error">Superaste el límite de caracteres</p>`;
        };
        return errorMsg;
    };

    const validateCodigoPostal = (codigo_postal) => {
        let errorMsg = ''
        let regEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
        if (!regEx.test(codigo_postal) && codigo_postal.length > 5) {
            errorMsg = `<p class="error">Completar</p>`;
        }
        return errorMsg;
    };

    const validatePassword = (password) => {
        let errorMsg = '';
        if (password.length == 0) {
            errorMsg = `<p class="error">Tienes que escribir una contraseña</p>`;
        };
        return errorMsg;
    };

    const validateImg = (profile_image) => {
        console.log(profile_image)
        let supportedFormats = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];
        let errorMsg = '';

        if (!supportedFormats.includes(profile_image?.type)) {
            errorMsg = `<p class="error">Archivo no valido</p>`
        }
        return errorMsg;
    };

    form.addEventListener('submit', async (event) => {
        // const sendData = () => {
        // console.log(event);
        
        let errors = 0;


        // INPUTS
        const nombre = document.querySelector('#nombre');
        const apellido = document.querySelector('#apellido');
        const direccion = document.querySelector('#direccion');
        const ciudad = document.querySelector('#ciudad');
        const estado = document.querySelector('#estado_provincia');
        const pais = document.querySelector('#pais');
        const codigoPostal = document.querySelector('#codigo_postal');
        const profileImage = document.querySelector('#profile_image');
        const email = document.querySelector('#email');
        const telefono = document.querySelector('#telefono');
        const password = document.querySelector('#password');

        // DIV's
        const nombreErrors = document.querySelector('.nombre-errors');
        const apellidoErrors = document.querySelector('.apellido-errors');
        const direccionErrors = document.querySelector('.direccion-errors');
        const ciudadErrors = document.querySelector('.ciudad-errors');
        const estadoErrors = document.querySelector('.estado-errors');
        const paisErrors = document.querySelector('.pais-errors');
        const codigo_postalErrors = document.querySelector('.codigo-errors');
        const telefonoErrors = document.querySelector('.telefono-errors');
        const emailErrors = document.querySelector('.email-errors');
        const passwordErrors = document.querySelector('.password-errors');
        const profileImageErrors = document.querySelector('.image-errors');

        // NOMBRE VALIDATION
        console.log(validateNombre(''));
        let nombreValidation = validateNombre(nombre.value);
        if (nombreValidation) {
            errors += 1;
            nombreErrors.innerHTML = nombreValidation
            nombre.classList.add('nombre-errors')
        } else {
            nombreErrors.innerHTML = '';
            nombre.classList.remove('nombre-errors')
        }

        // APELLIDO VALIDATION
        let apellidoValidation = validateApellido(apellido.value);
        if (apellidoValidation) {
            errors += 1;
            apellidoErrors.innerHTML = apellidoValidation
            apellido.classList.add('apellido-errors')
        } else {
            apellidoErrors.innerHTML = '';
            apellido.classList.remove('apellido-errors')
        }

        // DIRECCION VALIDATION
        let direccionValidation = validateDireccion(direccion.value);
        if (direccionValidation) {
            errors += 1;
            direccionErrors.innerHTML = direccionValidation
            direccion.classList.add('direccion-errors')
        } else {
            direccionErrors.innerHTML = '';
            direccion.classList.remove('direccion-errors')
        }

        // CIUDAD VALIDATION
        let ciudadValidation = validateCiudad(ciudad.value);
        if (ciudadValidation) {
            errors += 1;
            ciudadErrors.innerHTML = ciudadValidation
            ciudad.classList.add('ciudad-errors')
        } else {
            ciudadErrors.innerHTML = '';
            ciudad.classList.remove('ciudad-errors')
        }

        // ESTADO VALIDATION
        let estadoValidation = validateEstado(estado.value);
        if (estadoValidation) {
            errors += 1;
            estadoErrors.innerHTML = estadoValidation
            estado.classList.add('estado-errors')
        } else {
            estadoErrors.innerHTML = '';
            estado.classList.remove('estado-errors')
        }

        // PAIS VALIDATION
        let paisValidation = validatePais(pais.value);
        if (paisValidation) {
            errors += 1;
            paisErrors.innerHTML = paisValidation
            pais.classList.add('pais-errors')
        } else {
            paisErrors.innerHTML = '';
            pais.classList.remove('pais-errors')
        }

        // CODIGO POSTAL VALIDATION
        let codigoPostalValidation = validateCodigoPostal(codigoPostal.value);
        if (codigoPostalValidation) {
            errors += 1;
            codigo_postalErrors.innerHTML = codigoPostalValidation
            codigoPostal.classList.add('codigo-errors')
        } else {
            codigo_postalErrors.innerHTML = '';
            codigoPostal.classList.remove('codigo-errors')
        }

        // TELEFONO VALIDATION
        let telefonoValidation = validateTelefono(telefono.value);
        if (telefonoValidation) {
            errors += 1;
            telefonoErrors.innerHTML = telefonoValidation
            telefono.classList.add('telefono-errors')
        } else {
            telefonoErrors.innerHTML = '';
            telefono.classList.remove('telefono-errors')
        }

        // EMAIL VALIDATION
        let emailValidation = validateEmail(email.value);
        if (emailValidation) {
            errors += 1;
            emailErrors.innerHTML = emailValidation
            email.classList.add('email-errors')
        } else {
            emailErrors.innerHTML = '';
            email.classList.remove('email-errors')
        }

        // PASSWORD VALIDATION
        let passwordValidation = validatePassword(password.value);
        if (passwordValidation) {
            errors += 1;
            passwordErrors.innerHTML = passwordValidation
            password.classList.add('password-errors')
        } else {
            passwordErrors.innerHTML = '';
            password.classList.remove('password-errors')
        }

        // PERFIL IMAGEN VALIDATION
        let profileImageValidation = validateImg(profileImage?.files[0]);
        if (profileImageValidation) {
            errors += 1;
            profileImageErrors.innerHTML = profileImageValidation
            profileImage.classList.add('invalid')
        } else {
            profileImageErrors.innerHTML = '';
            profileImage.classList.remove('invalid')
        }
        if (errors > 0) {
            event.preventDefault();
        }

    })
    
})
