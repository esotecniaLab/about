// script.js
// Aquí agregaremos la funcionalidad de los botones más adelante

document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo de cómo podrías manejar clics en los botones de navegación
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', () => {
            // Lógica para navegar entre secciones
            console.log(`Navigating to ${button.innerText}`);
        });
    });
});

