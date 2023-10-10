// Función para calcular la media
function calcularMedia(numeros) {
    const numerosArray = numeros.split(',').map(Number);
    const suma = numerosArray.reduce((total, num) => total + num, 0);
    return suma / numerosArray.length;
}

// Función para calcular la mediana
function calcularMediana(numeros) {
    const numerosArray = numeros.split(',').map(Number);
    numerosArray.sort((a, b) => a - b);
    const mid = Math.floor(numerosArray.length / 2);
    if (numerosArray.length % 2 === 0) {
        return (numerosArray[mid - 1] + numerosArray[mid]) / 2;
    } else {
        return numerosArray[mid];
    }
}

// Función para calcular la desviación estándar
function calcularDesviacionEstandar(numeros) {
    const numerosArray = numeros.split(',').map(Number);
    const media = calcularMedia(numeros);
    const sumCuadrados = numerosArray.reduce((total, num) => total + Math.pow(num - media, 2), 0);
    const desviacionEstandar = Math.sqrt(sumCuadrados / numerosArray.length);
    return desviacionEstandar;
}

// Manejo del formulario de cálculo
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const numeros = document.getElementById('numeros').value;
    const media = calcularMedia(numeros);
    const mediana = calcularMediana(numeros);
    const desviacionEstandar = calcularDesviacionEstandar(numeros);
    const resultado = `Media: ${media.toFixed(2)}, Mediana: ${mediana.toFixed(2)}, Desviación Estándar: ${desviacionEstandar.toFixed(2)}`;
    document.getElementById('resultado').textContent = resultado;
});
