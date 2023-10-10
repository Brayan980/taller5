// Función para calcular el IMC
function calcularIMC(peso, altura) {
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        return "Por favor, ingresa un peso y altura válidos.";
    }

    const imc = peso / (altura * altura);

    let resultado = `Tu IMC es ${imc.toFixed(2)}, `;

    if (imc < 18.5) {
        resultado += "estás en el rango de bajo peso.";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado += "estás en el rango de peso normal.";
    } else if (imc >= 25 && imc < 29.9) {
        resultado += "estás en el rango de sobrepeso.";
    } else {
        resultado += "estás en el rango de obesidad.";
    }

    return resultado;
}

// Manejo del formulario de calcular IMC
document.getElementById('calcularImcForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value.replace(',', '.'));

    const resultado = calcularIMC(peso, altura);

    document.getElementById('resultado').textContent = resultado;
});
