document.addEventListener("DOMContentLoaded", () => {
    const btnAgregarProducto = document.getElementById("btnAgregarProducto");
    const botonesEliminar = document.querySelectorAll(".btnEliminar");
    const botonesModificar = document.querySelectorAll(".btnModificar");

    // Evento para agregar producto
    btnAgregarProducto.addEventListener("click", () => {
        window.location.href = "formulario.html"; // Redirige al formulario de agregar producto
    });

    // Evento para modificar producto
    botonesModificar.forEach((boton) => {
        boton.addEventListener("click", () => {
            window.location.href = "formulario.html"; // Redirige al formulario de modificar
        });
    });

    // Evento para eliminar producto
    botonesEliminar.forEach((boton) => {
        boton.addEventListener("click", (event) => {
            const confirmacion = confirm("¿Estás seguro de que deseas eliminar este producto?");
            if (confirmacion) {
                const fila = event.target.closest("tr");
                fila.remove();
                alert("Producto eliminado.");
            }
        });
    });
});
