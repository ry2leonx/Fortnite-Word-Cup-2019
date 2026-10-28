/* 
  ====================================================================
  CONTROL DE INTERACTIVIDAD CON JAVASCRIPT
  ==================================================================== 
*/

// Espera a que todo el contenido del documento HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // Selección de elementos del DOM por medio de sus IDs
    const formulario = document.getElementById('form-reserva');
    const btnAsistente = document.getElementById('btn-asistente');
    const btnLimpiar = document.getElementById('btn-limpiar');

    // 1. Interacción para el evento de envío (submit) del formulario
    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            // e.preventDefault() detiene el comportamiento por defecto de recarga inmediata
            e.preventDefault();
            
            // Obtenemos el nombre ingresado por el usuario
            const nombre = document.getElementById('nombre-huesped').value;
            
            // Mensaje de éxito interactivo simulado
            alert(`¡Estimado/a ${nombre}, su pre-reservación en el Hotel Paraíso Tropical se ha registrado con éxito!`);
            
            // Restablece/limpia todos los campos del formulario tras el éxito
            formulario.reset();
        });
    }

    // 2. Interacción para el botón de limpieza de datos (reset)
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', (e) => {
            // Muestra una ventana de advertencia para confirmar la acción
            const confirmar = confirm('¿Está seguro de que desea limpiar todos los campos?');
            if (!confirmar) {
                // Si el usuario cancela, se frena el reseteo predeterminado
                e.preventDefault();
            }
        });
    }

    // 3. Interacción para el botón del asistente virtual en línea (button genérico)
    if (btnAsistente) {
        btnAsistente.addEventListener('click', () => {
            alert('¡Hola! Soy el asistente virtual del Hotel Paraíso Tropical. ¿En qué puedo ayudarle con su estancia?');
        });
    }

});
    
    document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todos los botones de radio que tengan el nombre 'habitacion'
    const radiosHabitacion = document.querySelectorAll('input[name="habitacion"]');
    const imagenHabitacion = document.getElementById('imagen-habitacion');

    // URLs de ejemplo para cada tipo de habitación (puedes cambiarlas por tus propias imágenes)
    const imagenes = {
        'sencilla': 'img/sencilla.jpg', // Foto de ejemplo para Sencilla
        'suite': 'img/suite.avif'      // Foto de ejemplo para Suite de Lujo
    };

    // Recorremos cada botón de radio para escuchar cuando el usuario haga clic en él
    radiosHabitacion.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const valorSeleccionado = e.target.value; // Obtiene 'sencilla' o 'suite'
            
            // Cambia el atributo src de la imagen según la opción seleccionada
            if (imagenes[valorSeleccionado]) {
                imagenHabitacion.src = imagenes[valorSeleccionado];
            }
        });
    });
});