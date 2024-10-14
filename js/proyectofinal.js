//* Traer inputs
const form = document.querySelector("#registro");
const nombreInput = document.querySelector("#nombre");
const telefonoInput = document.querySelector("#telefono");
const paisinput = document.querySelector("#pais");
const correoInput = document.querySelector("#correo");

let historial = [];


function agregarHistorial(persona) {
    historial.push(persona);
    localStorage.setItem("historial", JSON.stringify(historial)); // Guardar el historial en localStorage
}


const lista = document.querySelector("#lista-historial");


function mostrarHistorial() {
    lista.innerHTML = "";
    historial.forEach((historia, index) => {
        let li = document.createElement("li");
        li.innerHTML = `Persona # ${index + 1} <br>
        <strong>Nombre :</strong> ${historia.nombre} <br>
        <strong>Telefono:</strong> ${historia.telefono} <br>
        <strong>Pais:</strong> ${historia.pais} <br>
        <strong>Correo Electronico:</strong> ${historia.correo}<br>
        <strong>Productos Comprados:</strong> ${historia.productosComprados.map(p => p.nombre + ' ($' + p.precio.toLocaleString("es-ES") + ')').join(", ")}`;
        lista.appendChild(li);
    });
}


function historialEnLocalStorage() {
    const historialLS = JSON.parse(localStorage.getItem("historial"));
    if (historialLS && historialLS.length > 0) {
        historial = historialLS; 
        mostrarHistorial(); 
    }
    nombreInput.focus();
}

historialEnLocalStorage();


const contenedor = document.querySelector("#contenedor-productos");
const productosSeleccionadosContainer = document.querySelector("#productos-seleccionados");
const finalizarCompraBtn = document.querySelector("#finalizar-compra");
let productosSeleccionados = []; 


function agregarProducto(producto) {
    productosSeleccionados.push(producto); 
    actualizarProductosSeleccionados();
}


function mostrarProductos(arr) {
    contenedor.innerHTML = ""; 
    let htmlInsertado;

    if (Array.isArray(arr) && arr.length > 0) {
        for (const elemento of arr) {
            const { img, id, nombre, precio } = elemento;
            htmlInsertado = `
            <div class="card">
                <img src="../img/${img}" alt="${nombre}">
                <hr>
                <h3>${nombre}</h3>
                <p class="parrafo-precio">Precio $: ${precio.toLocaleString("es-ES")}</p>
                <div class="card-action">
                    <button class="btn btn-success agregar-producto" data-id="${id}" data-nombre="${nombre}" data-precio="${precio}">Agregar</button>
                </div>
            </div>`;
            contenedor.innerHTML += htmlInsertado;
        }

   
        const botones = document.querySelectorAll(".agregar-producto");

   
        botones.forEach((boton) => {
            boton.addEventListener("click", (e) => {

                const id = e.target.getAttribute("data-id");
                const nombre = e.target.getAttribute("data-nombre");
                const precio = e.target.getAttribute("data-precio");


                const productoSeleccionado = {
                    id,
                    nombre,
                    precio: parseFloat(precio) 
                };


                agregarProducto(productoSeleccionado);

                Swal.fire({
                    title: "Producto Agregado con Éxito",
                    icon: "success",
                    text: `El producto "${nombre}" fue agregado al carrito.`,
                });
            });
        });
    } else {
        htmlInsertado = `
        <div class="contenedor-no-resultados">
            <h2 class="no-resultados">No hay resultados</h2>
        </div>`;
        contenedor.innerHTML += htmlInsertado;
    }
}


function actualizarProductosSeleccionados() {
    productosSeleccionadosContainer.innerHTML = ""; 
    productosSeleccionados.forEach(producto => {
        let li = document.createElement("li");
        li.textContent = `${producto.nombre} - $${producto.precio.toLocaleString("es-ES")}`;
        productosSeleccionadosContainer.appendChild(li);
    });


    const totalCarrito = productosSeleccionados.reduce((total, producto) => total + producto.precio, 0);
    document.querySelector("#total-carrito").textContent = totalCarrito.toLocaleString("es-ES");
}


function finalizarCompra() {
    const datosPersona = {
        nombre: nombreInput.value,
        telefono: telefonoInput.value,
        pais: paisinput.value,
        correo: correoInput.value,
        productosComprados: [...productosSeleccionados]  
    };

    agregarHistorial(datosPersona);  
    mostrarHistorial();  
    productosSeleccionados = [];  
    actualizarProductosSeleccionados(); 
    Swal.fire('Compra finalizada', 'Muchas gracias por su compra. Vuelva Pronto', 'success');
}

let servicio = []; // Declara la variable fuera del fetch para que sea accesible globalmente

fetch("../data/telefonos.json")
    .then((response) => response.json())
    .then((data) => {
        servicio = data; // Asigna los productos obtenidos a la variable servicio
        mostrarProductos(servicio); // Muestra todos los productos inicialmente

        const busquedaInput = document.querySelector("#busqueda");

        // Filtrar productos según búsqueda
        busquedaInput.addEventListener("input", () => {
            const terminoBusqueda = busquedaInput.value.toLowerCase(); 
            const productosFiltrados = servicio.filter((producto) => 
                producto.nombre.toLowerCase().includes(terminoBusqueda)
            );
            mostrarProductos(productosFiltrados); 
        });
    })
    .catch((error) => {
        console.error("Error al cargar los productos:", error);
    });



finalizarCompraBtn.addEventListener("click", finalizarCompra);
