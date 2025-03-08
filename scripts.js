
/* Código relacionado con el Navbar */

const navLinks = document.querySelectorAll('.navbar a'); // Selecciona todos los enlaces dentro del navbar

// Recorre los enlaces y agregar eventos para cada uno
navLinks.forEach(link => {
    //Evento mouseenter para agregar la clase
    link.addEventListener('mouseenter', () => {
        if (link.id !== 'logoPagina') { //Evita que el logo de la página tenga el efecto hover
            link.classList.add('efecto-hover'); //Se agrega la clase de efecto hover
        }
    });

    // Evento mouseout para quitar la clase
    link.addEventListener('mouseout', () => {
        link.classList.remove('efecto-hover'); // Elimina la clase de efecto hover al salir del enlace
    });
});


/* Código relacionado con el funcionamiento del carrusel */

let lista = document.querySelector('.carrusel .lista'); //Obtiene el contenedor de los elementos del carrusel
let items = document.querySelectorAll('.carrusel .lista .item'); // Selecciona todos los elementos del carrusel
let prev = document.getElementById('prev'); // Botón para retroceder en el carrusel
let next = document.getElementById('next'); // Botón para avanzar en el carrusel
let headerLinks = document.querySelectorAll('header a'); // Selecciona todos los enlaces dentro del header

let activa = 0; // Índice de la imagen actualmente visible en el carrusel
let longitudItems = items.length - 1; // Cantidad total de elementos en el carrusel (restando 1 para manejar los índices correctamente)

// Evento al hacer clic en el botón "next"
next.onclick = function() {
    if (activa + 1 > longitudItems) { // Si se llega al último elemento, vuelve al inicio
        activa = 0;
    } else {
        activa = activa + 1; // Avanza al siguiente elemento
    }
    recargarCarrusel(); // Llama a la función para actualizar la posición del carrusel
}

// Evento al hacer clic en el botón "prev" 
prev.onclick = function() {
    if (activa - 1 < 0) { // Si se encuentra en el primer elemento, vuelve al último
        activa = longitudItems;
    } else {
        activa = activa - 1; // Retrocede al elemento anterior
    }
    recargarCarrusel(); // Llama a la función para actualizar la posición del carrusel
}

// Cada 5 segundos, simula un clic en el botón "next" para cambiar de imagen automáticamente
let refrescarCarrusel = setInterval(() => { next.click() }, 5000);


function recargarCarrusel() {
    let checkleft = items[activa].offsetLeft; // Obtiene la posición izquierda del elemento activo
    lista.style.left = -checkleft + 'px'; // Mueve la lista de elementos para mostrar el actual

    //Se Cambia el color del texto de los enlaces dependiendo de la imagen activa
    if (activa === 0) { // Si es la primera imagen, usa la clase "header-alternativo"
        headerLinks.forEach(link => {
            link.classList.add('header-alternativo');
            link.classList.remove('header-blanco');
        });
    } else { // Para las demás imágenes, se usa la clase "header-blanco"
        headerLinks.forEach(link => {
            link.classList.add('header-blanco');
            link.classList.remove('header-alternativo');
        });
    }

    /* Cuando se presiona algún botón, se debe reiniciar el intervalo del carrusel automático 
       para que el usuario tenga suficiente tiempo para ver la imagen antes de que cambie automáticamente */
    
    clearInterval(refrescarCarrusel); //Detiene/Reinicia el intervalo actual
    
    // Se vuelve a definir el intervalo de 5 segundos para continuar el cambio automático de imágenes
    refrescarCarrusel = setInterval(() => { next.click() }, 5000);
}



/*Codigo relacionado con las imagenes del cast */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".Cuadro").forEach(cuadro => {
        const capa = cuadro.querySelector(".Nombre"); // Seleccionamos el nombre
        const imagen = cuadro.querySelector(".Foto"); // Seleccionamos la imagen

        if (capa && imagen) {
            cuadro.addEventListener("mouseover", () => {
                capa.style.opacity = "1"; // Hace visible el nombre
                capa.style.transition = "opacity 0.3s ease-in-out"; // Transición suave
                imagen.style.transform = "scale(1.1)"; // Agranda la imagen
                imagen.style.transition = "transform 0.3s ease-in-out"; // Animación suave
            });

            cuadro.addEventListener("mouseout", () => {
                capa.style.opacity = "0"; // Oculta el nombre
                imagen.style.transform = "scale(1)"; // Vuelve al tamaño normal
            });
        } else {
            console.warn("No se encontró .Nombre o .Foto dentro de un .Cuadro", cuadro);
        }
    });
});
