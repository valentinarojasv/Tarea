function enviarFormulario() {
    // Captura la información del formulario
    const nombre = document.getElementById("nombre").value;

    // Crear documento XML
    const xmlData = `
    <usuario>
        <nombre>${nombre}</nombre>
    </usuario>
    `;

    // Almacenar el XML en el localStorage
    localStorage.setItem('usuarioXML', xmlData);

    // Redirigir a la página de visualización
    window.location.href = 'visualizar.html';

    // Evitar que el formulario se envíe de la manera tradicional
    return false;
}
