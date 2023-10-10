// Espera a que el documento HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Tu código JavaScript aquí
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    
    let intentos = 0;
    
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const conjetura = parseInt(document.querySelector('#guess').value);
        
        intentos++;
        
        if (conjetura === numeroAleatorio) {
            document.querySelector('#message').textContent = `¡Felicidades! Adivinaste el número en ${intentos} intentos.`;
        } else if (conjetura < numeroAleatorio) {
            document.querySelector('#message').textContent = 'Más alto. Intenta de nuevo.';
        } else {
            document.querySelector('#message').textContent = 'Más bajo. Intenta de nuevo.';
        }
    });
 });
 