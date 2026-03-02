


// 1. Seleccionamos el botón y el elemento de destino
const boton = document.getElementById('miBoton');
const destino = document.getElementById('destino');

// 2. Agregamos el "escuchador" de eventos para el clic
boton.addEventListener('click', () => {
    // 3. Aplicamos el scroll suave hacia el elemento destino
    destino.scrollIntoView({
        behavior: 'smooth', // Define el movimiento suave
        block: 'start'      // Alinea el elemento al inicio de la pantalla
    });
});