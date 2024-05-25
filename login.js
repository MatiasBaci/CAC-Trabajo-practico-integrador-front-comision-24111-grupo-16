const formulario = document.getElementById('formulario'); 
const btnInicio = document.getElementsByClassName("boton")[0];

function completar() {
    let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let email = document.getElementById("email");
    let contraseña = document.getElementById("contraseña");

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
    if (completar()) {
        formulario.submit();
    }
});

