const navLinks = document.querySelectorAll('.navbar a');

// Recorrer los enlaces y agregar eventos para cada uno
navLinks.forEach(link => {
    // Evento mouseenter para agregar la clase
    link.addEventListener('mouseenter', () => {
        link.classList.add('efecto-hover'); // Agrega la clase 'efecto-hover'
    });

    // Evento mouseout para quitar la clase
    link.addEventListener('mouseout', () => {
        link.classList.remove('efecto-hover'); // Quita la clase 'efecto-hover'
    });
});