// Función para generar una contraseña segura
function generarContraseña(longitud, incluirMayusculas, incluirMinusculas, incluirNumeros, incluirEspeciales) {
    const caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const caracteresMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const caracteresNumeros = "0123456789";
    const caracteresEspeciales = "!@#$%^&*()_-+=<>?/";

    let caracteresPermitidos = "";

    if (incluirMayusculas) {
        caracteresPermitidos += caracteresMayusculas;
    }
    if (incluirMinusculas) {
        caracteresPermitidos += caracteresMinusculas;
    }
    if (incluirNumeros) {
        caracteresPermitidos += caracteresNumeros;
    }
    if (incluirEspeciales) {
        caracteresPermitidos += caracteresEspeciales;
    }

    if (caracteresPermitidos === "") {
        return "Debes seleccionar al menos un tipo de caracter.";
    }

    let contraseña = "";
    for (let i = 0; i < longitud; i++) {
        const caracterAleatorio = caracteresPermitidos.charAt(Math.floor(Math.random() * caracteresPermitidos.length));
        contraseña += caracterAleatorio;
    }

    return contraseña;
}

// Manejo del formulario para generar contraseñas
document.getElementById('generadorForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const longitud = parseInt(document.getElementById('longitud').value);
    const incluirMayusculas = document.getElementById('mayusculas').checked;
    const incluirMinusculas = document.getElementById('minusculas').checked;
    const incluirNumeros = document.getElementById('numeros').checked;
    const incluirEspeciales = document.getElementById('especiales').checked;

    const resultadoElement = document.getElementById('resultado');
    const contraseñaGenerada = generarContraseña(longitud, incluirMayusculas, incluirMinusculas, incluirNumeros, incluirEspeciales);

    resultadoElement.textContent = contraseñaGenerada;
});
