window.addEventListener('load', () => {
    console.log('aca estoy');

    const form = document.querySelector('#crearCurso');

    const validateTitulo = (titulo) => {
        let errorMsg = '';
        if (titulo.length == 0) {
            errorMsg = `<p class="error">Completar</p>`;
        };
        return errorMsg;
    };

    const validateDuracion = (duracion) => {
        let errorMsg = '';
        if (duracion.length == 0) {
            errorMsg = `<p class="error">Falta</p>`;
        };
        return errorMsg;
    };

    const validatePrecio = (precio) => {
        let errorMsg = ''
        let regEx = /^[0-9]+$/;
        if (!regEx.test(precio)) {
            errorMsg = `<p class="error">Formato numerico</p>`;
        };
        return errorMsg;
    };

    const validateImg = (images) => {
        console.log(images)
        let supportedFormats = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];
        let errorMsg = '';

        if (!supportedFormats.includes(images?.type)) {
            errorMsg = `<p class="error">Archivo no valido</p>`
        }
        return errorMsg;
    };

    form.addEventListener('submit', async (event) => {

        let errors = 0;

        //INPUTS
        const titulo = document.querySelector('#curso-titulo');
        const duracion = document.querySelector('#duracion');
        const precio = document.querySelector('#precio-curso');
        const imagen = document.querySelector('#images');

        //DIVS
        const tituloErrors = document.querySelector('.curso-titulo-errors');
        const duracionErrors = document.querySelector('.duracion-errors');
        const precioErrors = document.querySelector('.precio-curso-errors');
        const imagenErrors = document.querySelector('.img-curso-errors');

        console.log(validateTitulo(''));
        let tituloValidation = validateTitulo(titulo.value);
        if (tituloValidation) {
            errors += 1;
            tituloErrors.innerHTML = tituloValidation
            titulo.classList.add('curso-titulo-errors')
        } else {
            tituloErrors.innerHTML = '';
            titulo.classList.remove('curso-titulo-errors')
        }

        console.log(validateDuracion(''));
        let duracionValidation = validateDuracion(duracion.value);
        if (duracionValidation) {
            errors += 1;
            duracionErrors.innerHTML = duracionValidation
            duracion.classList.add('duracion-errors')
        } else {
            duracionErrors.innerHTML = '';
            duracion.classList.remove('duracion-errors')
        }

        console.log(validatePrecio(''));
        let precioValidation = validatePrecio(precio.value);
        if (precioValidation) {
            errors += 1;
            precioErrors.innerHTML = precioValidation
            precio.classList.add('precio-curso-errors')
        } else {
            precioErrors.innerHTML = '';
            precio.classList.remove('precio-curso-errors')
        }

        console.log(validateImg(''));
        let imagenValidation = validateImg(imagen?.files[0]);
        if (imagenValidation) {
            errors += 1;
            imagenErrors.innerHTML = imagenValidation
            imagen.classList.add('img-curso-errors')
        } else {
            imagenErrors.innerHTML = '';
            imagen.classList.remove('img-curso-errors')
        }

        if (errors > 0) {
            event.preventDefault();
        }


    })

})