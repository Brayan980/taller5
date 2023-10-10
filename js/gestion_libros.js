// Objeto para almacenar la información de los libros
const libros = [];

// Función para agregar libros
function agregarLibro(titulo, autor, anio) {
    libros.push({ titulo, autor, anio });
}

// Función para buscar libros por título o autor
function buscarLibro(texto) {
    const resultados = libros.filter(libro =>
        libro.titulo.toLowerCase().includes(texto.toLowerCase()) ||
        libro.autor.toLowerCase().includes(texto.toLowerCase())
    );

    return resultados;
}

// Manejo del formulario de agregar libros
document.getElementById('agregarForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const titulo = document.getElementById('tituloAgregar').value;
    const autor = document.getElementById('autorAgregar').value;
    const anio = parseInt(document.getElementById('anioAgregar').value);
    agregarLibro(titulo, autor, anio);
    alert("Libro agregado con éxito.");
});

// Manejo del formulario de buscar libros
document.getElementById('buscarForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const buscarTexto = document.getElementById('buscarTexto').value;
    const resultados = buscarLibro(buscarTexto);

    // Mostrar resultados en el elemento con ID "resultado"
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';

    if (resultados.length === 0) {
        resultadoElement.textContent = "No se encontraron resultados.";
    } else {
        resultados.forEach(libro => {
            const resultadoTexto = `Título: ${libro.titulo}, Autor: ${libro.autor}, Año de Publicación: ${libro.anio}`;
            const resultadoParrafo = document.createElement('p');
            resultadoParrafo.textContent = resultadoTexto;
            resultadoElement.appendChild(resultadoParrafo);
        });
    }
});
