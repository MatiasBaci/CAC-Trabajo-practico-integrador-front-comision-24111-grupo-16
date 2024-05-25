const formulario = document.getElementById('formulario-login'); 
const btnInicio = document.getElementById("boton-submit-login");

console.log(formulario);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validarFormulario()) {
        formulario.submit();
    }
});

function validarFormulario() {
    let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let email = document.getElementById("email");
    let contraseña = document.getElementById("password");

    if (email.value === "") {
        email.placeholder = 'Completá el email!';
        return false;
    } else if (!validEmail.test(email.value)) {
        alert('Email no valido');
        return false;
    }

    if (contraseña.value === "") {
        contraseña.placeholder = 'Completá la contraseña!';
        return false;
    }

    return true;
}

btnInicio.addEventListener('click', (e) => {
    e.preventDefault();
    if (validarFormulario()) {
        formulario.submit();
    }
});

