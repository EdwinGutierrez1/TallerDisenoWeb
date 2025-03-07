const navLinks = document.querySelectorAll('.navbar a');

// Recorrer los enlaces y agregar eventos para cada uno
navLinks.forEach(link => {
    // Evento mouseenter para agregar la clase
    link.addEventListener('mouseenter', () => {
        link.classList.add('efecto-hover');
    });

    // Evento mouseout para quitar la clase
    link.addEventListener('mouseout', () => {
        link.classList.remove('efecto-hover');
    });
});

/* Script relacionado con el funcionamiento del carrusel */
let lista = document.querySelector('.carrusel .lista');
let items = document.querySelectorAll('.carrusel .lista .item')
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let activa = 0; 
let longitudItems = items.length - 1;


next.onclick = function(){
    if(activa + 1 > longitudItems){
        activa= 0;
    }else{
        activa = activa + 1;
    }
    recargarCarrusel();
}

prev.onclick = function(){
    if(activa - 1 < 0){ //Ya no hay más espacio para objetos
        activa = longitudItems;
    }else{
        activa = activa - 1;
    }
    recargarCarrusel();
    }

//Cada 3 segundos, hace la acción de hacer click en un botón de manera automática. 
let refrescarCarrusel = setInterval(()=>{next.click()},5000)
function recargarCarrusel(){
    let checkleft = items[activa].offsetLeft
    lista.style.left = -checkleft + 'px';

    /*Cuando se presiona algun botón, debe reiniciarse el intervalo en el que
    el sistema lleva a cabo de manera automática, la acción que este evento desata. esto para
    que el usuario tenga suficiente tiempo para ver la imagen*/
    
    clearInterval(refrescarCarrusel); //Se reinicia el intervalo
    
    refrescarCarrusel = setInterval(()=>{next.click()},5000) 
    /*Se vuelve a definir un intervalo de 5 segundos para llevar a cabo
    la acción correspondiente cuando se hace click en un botón*/
}

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
