window.addEventListener('load', () => {
    console.log('aca estoy');

    const form = document.querySelector('#crearSala');

    const validateTitulo = (titulo) => {
        let errorMsg = '';
        if (titulo.length == 0) {
            errorMsg = `<p class="error">Completar</p>`;
        };
        return errorMsg;
    };

    const validateTamaño = (metros_cuadrados) => {
        let errorMsg = '';
        if (metros_cuadrados.length == 0) {
            errorMsg = `<p class="error">Completar</p>`;
        };
        return errorMsg;
    };

    const validateTurno = (turno_sala) => {
        let errorMsg = '';
        if (turno_sala.length == 0) {
            errorMsg = `<p class="error">Falta</p>`;
        };
        return errorMsg;
    };

    const validatePrecio = (precio) => {
        let errorMsg = ''
        if (!parseInt(precio)) { 
            errorMsg = `<p class="error">Formato numerico</p>`;
        };
        // let regEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
        // if (!regEx.test(precio)) {
        //     errorMsg = `<p class="error">Formato numerico</p>`;
        // };
        return errorMsg;
    };

    const validateImg = (images) => {
        console.log({images})
        let supportedFormats = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif', '.JPG'];
        let errorMsg = '';
        if (!images) {
            return errorMsg;
        }
        if (!supportedFormats.includes(images?.type)) {
            errorMsg = `<p class="error">Archivo no valido</p>`
        }
        return errorMsg;
    };

    const validateDescripcion = (descripcion) => {
        let errorMsg = '';
        if (descripcion.length == 0) {
            errorMsg = `<p class="error">Completar</p>`;
        };
        return errorMsg;
    };

    form.addEventListener('submit', async (event) => {

        let errors = 0;

        //INPUTS
        const titulo = document.querySelector('#sala-titulo');
        const tamaño = document.querySelector('#metros_cuadrados');
        const turno = document.querySelector('#turno_sala');
        const precio = document.querySelector('#precio');
        const imagen = document.querySelector('#images');
        const descripcion = document.querySelector('#descripcion');

        //DIVS
        const tituloErrors = document.querySelector('.sala-titulo-errors');
        const tamañoErrors = document.querySelector('.tamaño-errors');
        const turnoErrors = document.querySelector('.turno-errors');
        const precioErrors = document.querySelector('.precio-sala-errors');
        const imagenErrors = document.querySelector('.img-sala-errors');
        const descripcionErrors = document.querySelector('.descripcion-sala-errors');

        console.log(validateTitulo(''));
        let tituloValidation = validateTitulo(titulo.value);
        if (tituloValidation) {
            errors += 1;
            tituloErrors.innerHTML = tituloValidation
            titulo.classList.add('sala-titulo-errors')
        } else {
            tituloErrors.innerHTML = '';
            titulo.classList.remove('sala-titulo-errors')
        }

        console.log(validateTamaño(''));
        let tamañoValidation = validateTamaño(tamaño.value);
        if (tamañoValidation) {
            errors += 1;
            tamañoErrors.innerHTML = tamañoValidation
            tamaño.classList.add('tamaño-errors')
        } else {
            tamañoErrors.innerHTML = '';
            tamaño.classList.remove('tamaño-errors')
        }

        console.log(validateTurno(''));
        let turnoValidation = validateTurno(turno.value);
        if (turnoValidation) {
            errors += 1;
            turnoErrors.innerHTML = turnoValidation
            turno.classList.add('turno-errors')
        } else {
            turnoErrors.innerHTML = '';
            turno.classList.remove('turno-errors')
        }

        console.log(validatePrecio(''));
        let precioValidation = validatePrecio(precio.value);
        if (precioValidation) {
            errors += 1;
            precioErrors.innerHTML = precioValidation
            precio.classList.add('precio-sala-errors')
        } else {
            precioErrors.innerHTML = '';
            precio.classList.remove('precio-sala-errors')
        }

        let imagenValidation = validateImg(imagen?.files[0]);
        if (imagenValidation) {
            errors += 1;
            imagenErrors.innerHTML = imagenValidation
            imagen.classList.add('img-sala-errors')
        } else {
            imagenErrors.innerHTML = '';
            imagen.classList.remove('img-sala-errors')
        }

        console.log(validateDescripcion(''));
        let descripcionValidation = validateDescripcion(descripcion.value);
        if (descripcionValidation) {
            errors += 1;
            descripcionErrors.innerHTML = descripcionValidation
            descripcion.classList.add('descripcion-sala-errors')
        } else {
            descripcionErrors.innerHTML = '';
            descripcion.classList.remove('descripcion-sala-errors')
        }


        if (errors > 0) {
            event.preventDefault();
        }


    })

})