document.getElementById('calculadoraForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener los valores ingresados por el usuario
    const capitalInicial = parseFloat(document.getElementById('capitalInicial').value);
    const tasaInteresAnual = parseFloat(document.getElementById('tasaInteres').value);
    const periodoAnios = parseInt(document.getElementById('periodoAnios').value);

    // Calcular el monto final con interés compuesto
    const tasaInteresDecimal = tasaInteresAnual / 100;
    const montoFinal = capitalInicial * Math.pow(1 + tasaInteresDecimal, periodoAnios);

    // Mostrar el resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `El monto final es de $${montoFinal.toFixed(2)}`;
});
