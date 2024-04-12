//Haz tú validación en javascript acá
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formcontato__form');
    const botonEnviar = form.querySelector('.formcontato__botao');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validarFormulario()) {
            form.submit();
        }
    });

    function validarFormulario() {
        const nombre = form.nombre.value.trim();
        const email = form.email.value.trim();
        const asunto = form.asunto.value.trim();
        const mensaje = form.mensaje.value.trim();
        let valido = true;

        if (nombre === '') {
            mostrarError('El campo Nombre no puede estar vacío.');
            valido = false;
        } else if (nombre.length > 50) {
            mostrarError('El campo Nombre no puede tener más de 50 caracteres.');
            valido = false;
        }

        if (email === '') {
            mostrarError('El campo E-mail no puede estar vacío.');
            valido = false;
        } else if (!validarEmail(email)) {
            mostrarError('El formato del E-mail no es válido.');
            valido = false;
        }

        if (asunto === '') {
            mostrarError('El campo Asunto no puede estar vacío.');
            valido = false;
        } else if (asunto.length > 50) {
            mostrarError('El campo Asunto no puede tener más de 50 caracteres.');
            valido = false;
        }

        if (mensaje === '') {
            mostrarError('El campo Mensaje no puede estar vacío.');
            valido = false;
        } else if (mensaje.length > 300) {
            mostrarError('El campo Mensaje no puede tener más de 300 caracteres.');
            valido = false;
        }

        botonEnviar.disabled = !valido;
        return valido;
    }

    function mostrarError(mensaje) {
        const errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerText = mensaje;

        const botonEnviar = form.querySelector('.formcontato__botao');
        form.insertBefore(errorElement, botonEnviar.nextSibling);
    }

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
