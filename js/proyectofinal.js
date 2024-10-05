/**
 * *1. Tengo que traerme todos los inputs para poder que se agreguen al historial
 * *2.Tengo que agregar el fecth para que me traiga los telefonos y se agreguen en el medio de todo mi contenedor
 * *3.  Agergar un boton que le de al body una clase que haga que se muestre   el recuadro con los objetos necesarios
 * *4. Agregar los productor con un inner html
 * *5.
 */

//*Traer todos los inputs y formulario

const form = document.querySelector("#registro");
const nombreInput = document.querySelector("#nombre");
const telefonoInput = document.querySelector("#telefono");
const paisinput = document.querySelector("#pais");
const correoInput = document.querySelector("#correo");

//*Historial Vacio
let historial = [];

//*Evento de submit para el formulario
form.addEventListener("submit", (e) => {
    e.preventDefault();
    Swal.fire({
        title: "Iinformación Agregada con Éxito",
        text: "Presiona OK para seguir utilizando la plataforma",
        icon: "success",
    });
    if (!isNaN(nombreInput.value)) {
        nombreInput.value = "";
        nombreInput.focus();
        return;
    }
    if (isNaN(telefonoInput.value) || telefonoInput.value.lenght < 10) {
        telefonoInput.value = "";
        telefonoInput.focus();
        return;
    }
    if (!isNaN(paisinput.value)) {
        paisinput.value = "";
        paisinput.focus();
        return;
    }
    const construccion = constructor();
    agregarHistorial(construccion);
    mostrarHistorial();
    agregarLocalStorage();
    form.reset();
    nombreInput.focus();
});

//*Funcion constructora
function constructor() {
    let nombre = nombreInput.value;
    let telefono = telefonoInput.value;
    let pais = paisinput.value;
    let correo = correoInput.value;
    return { nombre, telefono, pais, correo };
}

//* Funcion agregar al historial
function agregarHistorial(producto) {
    historial.push(producto);
}

//*Traer la lista
const lista = document.querySelector("#lista-historial");

//*Crear el elemento y agregarlo al historial para mostrarlo
function mostrarHistorial() {
    lista.innerHTML = "";
    historial.forEach((historia, index) => {
        let li = document.createElement("li");
        li.innerHTML = `Persona # ${index + 1} <br>
<strong>Nombre :</strong> ${historia.nombre} <br>
<strong>Telefono:</strong> ${historia.telefono} <br>
<strong>Pais:</strong> ${historia.pais} <br>
<strong>Correo Electronico:</strong> ${historia.correo}`;
        lista.appendChild(li);
    });
}

//* Agregar historial al storage
function agregarLocalStorage() {
    localStorage.setItem("historial", JSON.stringify(historial));
}
//*Traer todo del local storage
function historialEnLocalStorage() {
    const historialLS = JSON.parse(localStorage.getItem("historial"));
    if (historialLS && historialLS.lenght != 0) {
        historialLS.forEach((producto) => {
            agregarHistorial(producto);
        });
        mostrarHistorial();
    }

    nombreInput.focus();
}
historialEnLocalStorage();

//* Traer el contenedor para poder pintar las tarjetas

const contenedor = document.querySelector("#contenedor-productos");

//* Funcion para pintar los productos en el contenedor
function mostrarProductos(arr) {
    contenedor.innerHTML = "";
    let htmlInsertado;
    if (Array.isArray(arr) && arr.length > 0) {
        for (const elemento of arr) {
            const { img, id, nombre, precio } = elemento;
            htmlInsertado = `<div class="card">
            <img src="../img/${img}" alt="${nombre}">
            <hr>
            <h3>${nombre}</h3>
            <p class="parrafo-precio">Precio $: ${precio.toLocaleString(
                "es-Es"
            )}</p>
            <div class="card-action">
              <button class="btn btn-success agregar-producto" id="${id}">Agregar</button>
            </div>
          </div>`;
            contenedor.innerHTML += htmlInsertado;
        }

        // Seleccionamos todos los botones generados dinámicamente
        const botones = document.querySelectorAll(".agregar-producto");

        // Iteramos sobre cada botón para agregar el evento click
        botones.forEach((boton) => {
            boton.addEventListener("click", () => {
                Swal.fire({
                    title: "Producto Agregado con Éxito",
                    icon: "success",
                    text: `El producto con ID ${boton.id} fue agregado al carrito.`,
                });
            });
        });
    } else {
        htmlInsertado = `<div class="contenedor-no-resultados">
          <h2 class="no-resultados">No hay resultados</h2>
        </div>`;
        contenedor.innerHTML += htmlInsertado;
    }
}

fetch("../data/telefonos.json")
    .then((response) => response.json())
    .then((servicio) => {
        mostrarProductos(servicio);
    })
    .catch((error) => {
        mostrarProductos(error);
    });
