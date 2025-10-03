// Declaramos el arreglo vacío
let lista = [];

// Referencias a los elementos del DOM
const formulario = document.getElementById("formulario");
const inputDato = document.getElementById("inputDato");
const contenedorLista = document.getElementById("contenedorLista");
const mensajeError = document.getElementById("mensajeError");

const btnEliminarPrimero = document.getElementById("btnEliminarPrimero");
const btnEliminarUltimo = document.getElementById("btnEliminarUltimo");
const btnOrdenar = document.getElementById("btnOrdenar");

// Función para mostrar la lista en pantalla
function mostrarLista() {
    if (lista.length === 0) {
        contenedorLista.innerHTML = "<p>La lista está vacía.</p>";
    } else {
        contenedorLista.innerHTML = "<ul>" + lista.map(item => `<li>${item}</li>`).join('') + "</ul>";
    }
}

// Manejo del formulario para añadir datos
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página

    const dato = inputDato.value.trim(); // Quitamos espacios al inicio y fin

    if (dato === "") {
        mensajeError.textContent = "⚠️ El campo no puede estar vacío.";
    } else {
        lista.push(dato); // Agregamos el dato al arreglo
        mensajeError.textContent = ""; // Limpiamos el error
        mostrarLista(); // Actualizamos la vista
    }

    inputDato.value = ""; // Limpiamos el campo de texto
});

// Botón: Eliminar el primer elemento
btnEliminarPrimero.addEventListener("click", function() {
    if (lista.length > 0) {
        lista.shift();
        mostrarLista();
    } else {
        mensajeError.textContent = "⚠️ No hay elementos para eliminar.";
    }
});

// Botón: Eliminar el último elemento
btnEliminarUltimo.addEventListener("click", function() {
    if (lista.length > 0) {
        lista.pop();
        mostrarLista();
    } else {
        mensajeError.textContent = "⚠️ No hay elementos para eliminar.";
    }
});

// Botón: Ordenar alfabéticamente
btnOrdenar.addEventListener("click", function() {
    if (lista.length > 0) {
        lista.sort();
        mostrarLista();
    } else {
        mensajeError.textContent = "⚠️ No hay elementos para ordenar.";
    }
});

// Inicializamos la vista
mostrarLista();
