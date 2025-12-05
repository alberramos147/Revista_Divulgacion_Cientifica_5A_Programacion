document.addEventListener('DOMContentLoaded', () => {
    const gridCells = document.querySelectorAll('.grid-cell');
    
    gridCells.forEach(cell => {
        cell.addEventListener('click', () => {
            cell.classList.toggle('highlighted');
        });
    });

    const checkButton = document.getElementById('checkButton');
    
    checkButton.addEventListener('click', () => {
     
        const highlightedCells = document.querySelectorAll('.grid-cell.highlighted');

        if (highlightedCells.length >= 10) {
            alert('¡Felicidades! ¡Lo lograste! Eres un genio de la física');
            
            checkButton.textContent = '¡Juego Terminado! Gracias.';
            checkButton.disabled = true;

        } else if (highlightedCells.length > 0) {
             alert('Sigue buscando, ¡aún te faltan más palabras! ¡Tú puedes!');
        } else {
            alert('¡Vamos! Haz clic en las letras para empezar a encontrar las palabras.');
        }
    });

});