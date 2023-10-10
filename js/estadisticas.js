function calcularEstadisticas(calificaciones) {
    if (calificaciones.length === 0) {
        return {
            promedio: 0,
            calificacionMasAlta: null,
            calificacionMasBaja: null
        };
    }

    const calificacionesArray = calificaciones.split(',').map(parseFloat);

    let suma = 0;
    let calificacionMasAlta = calificacionesArray[0];
    let calificacionMasBaja = calificacionesArray[0];

    for (let i = 0; i < calificacionesArray.length; i++) {
        const calificacion = calificacionesArray[i];
        suma += calificacion;

        if (calificacion > calificacionMasAlta) {
            calificacionMasAlta = calificacion;
        }

        if (calificacion < calificacionMasBaja) {
            calificacionMasBaja = calificacion;
        }
    }

    const promedio = suma / calificacionesArray.length;

    return {
        promedio: promedio.toFixed(2),
        calificacionMasAlta: calificacionMasAlta,
        calificacionMasBaja: calificacionMasBaja
    };
}

document.getElementById('calificacionesForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const calificacionesInput = document.getElementById('calificaciones').value;
    const estadisticas = calcularEstadisticas(calificacionesInput);
    const resultadoElement = document.getElementById('resultado');

    resultadoElement.innerHTML = `<p>Promedio: ${estadisticas.promedio}</p>`;
    resultadoElement.innerHTML += `<p>Calificación más alta: ${estadisticas.calificacionMasAlta}</p>`;
    resultadoElement.innerHTML += `<p>Calificación más baja: ${estadisticas.calificacionMasBaja}</p>`;
});
