// Función para generar la tabla de multiplicar
function generarTabla(numero, filas) {
    let tabla = '<table border="1">';
    tabla += '<tr><th>Número</th><th>Multiplicador</th><th>Resultado</th></tr>';
    for (let i = 1; i <= filas; i++) {
        const resultado = numero * i;
        tabla += `<tr><td>${numero}</td><td>${i}</td><td>${resultado}</td></tr>`;
    }
    tabla += '</table>';
    return tabla;
}

// Manejo del formulario de generación de tabla
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const numero = parseInt(document.getElementById('numero').value);
    const filas = parseInt(document.getElementById('filas').value);
    const tabla = generarTabla(numero, filas);
    document.getElementById('resultado').innerHTML = tabla;
});
