// Definición de las preguntas y respuestas
const preguntas = [
    { pregunta: "¿Cuál es la capital de Francia?", respuesta: "Paris" },
    { pregunta: "¿Quién escribió 'Cien años de soledad'?", respuesta: "Gabriel Garcia Marquez" }
];

// Variables para llevar el seguimiento de la puntuación
let puntuacion = 0;
let preguntaActual = 0;

// Función para mostrar la siguiente pregunta
function mostrarSiguientePregunta() {
    if (preguntaActual < preguntas.length) {
        document.getElementById('pregunta').textContent = preguntas[preguntaActual].pregunta;
    } else {
        // Todas las preguntas se han respondido
        mostrarResultado();
    }
}

// Función para mostrar el resultado final
function mostrarResultado() {
    const resultado = `Puntuación: ${puntuacion} de ${preguntas.length} respuestas correctas`;
    document.getElementById('resultado').textContent = resultado;
}

// Manejo del formulario de preguntas
document.getElementById('preguntasForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const respuestaUsuario = document.getElementById('respuesta').value;
    const respuestaCorrecta = preguntas[preguntaActual].respuesta;
    if (respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
        puntuacion++;
    }
    preguntaActual++;
    mostrarSiguientePregunta();
    document.getElementById('respuesta').value = "";
});

// Inicializar el juego mostrando la primera pregunta
mostrarSiguientePregunta();
