// Objeto para almacenar la información de los estudiantes
const estudiantes = {};

// Función para agregar estudiantes
function agregarEstudiante(nombre, edad, identificacion) {
    estudiantes[identificacion] = {
        nombre: nombre,
        edad: edad,
        identificacion: identificacion
    };
}

// Función para buscar estudiantes por número de identificación
function buscarEstudiante(identificacion) {
    const estudiante = estudiantes[identificacion];
    if (estudiante) {
        return `Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}, Número de Identificación: ${estudiante.identificacion}`;
    } else {
        return "Estudiante no encontrado";
    }
}

// Manejo del formulario de agregar estudiantes
document.getElementById('agregarForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const identificacion = parseInt(document.getElementById('identificacion').value);
    agregarEstudiante(nombre, edad, identificacion);
    alert("Estudiante agregado con éxito.");
});

// Manejo del formulario de buscar estudiantes
document.getElementById('buscarForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const buscarIdentificacion = parseInt(document.getElementById('buscarIdentificacion').value);
    const resultado = buscarEstudiante(buscarIdentificacion);
    document.getElementById('resultado').textContent = resultado;
});
