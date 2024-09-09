//*dark mode button
const darkMode = document.querySelector('#color-mode');
const body = document.body;
let darkModeLocalStorage = localStorage.getItem('dark-mode');
//*Variable Historial
let historial = [];

//*Información en los inputs
const inputNombre = document.querySelector('#nombre');
const inputPrecio = document.querySelector('#precio');
const inputDescuento = document.querySelector('#descuento');
const inputCorreo = document.querySelector('#correo');
const botonForm = document.querySelector('#boton-form');

const form = document.querySelector('#registro');
form.addEventListener('submit', constructor);

//*Construcción del objeto
function constructor(e){
    e.preventDefault();
    let nombre = inputNombre.value;
    let precio = inputPrecio.value;
    let descuento =  inputDescuento.value;
    let precioDescuento =(inputPrecio.value) - ((inputPrecio.value) * (inputDescuento.value / 100));
    let correo = inputCorreo.value;
    form.reset();
    inputNombre.focus();
    return {nombre, precio, descuento, precioDescuento, correo};
}

//*Agregar al historial
function agregarHistorial (nombre, precio, descuento, precioDescuento, correo){
    historial.push({
        nombre,
        precio,
        descuento,
        precioDescuento,
        correo
    });
}

//*Mostrar en lista ordenada 
const lista = document.querySelector('#lista-historial')
function mostrarHistorial(){
historial.forEach((historia) =>{
    const li = document.createElement('li')
    li.innerText = `Nombre Producto: ${historia.nombre}
Precio Producto: ${historia.precio}
Descuento Producto: ${historia.descuento}%
Precio Con Descuento: ${historia.precioDescuento}
Correo: ${historia.correo}`
lista.appendChild(li)
})
}

function ejecutar(){
    let nombreRetornado = nombre();
    let opcion = opciones(nombreRetornado);
    
    while (true) {
        if(opcion === 1){
            let construccion = constructor();
            agregarHistorial(construccion.nombre, construccion.precio, construccion.descuento, construccion.precioDescuento);
            opcion = opciones(nombreRetornado);  // Volvemos a pedir la opción después de agregar un producto
        } else if (opcion === 2){
            if (historial.length === 0){
                alert('No has hecho ninguna cotización');
            } else {
                mostrarHistorial();
            }
            opcion = opciones(nombreRetornado);  // Volvemos a pedir la opción después de mostrar el historial
        } else {
            alert('Muchas gracias por entrar a trabajar con nosotros');
            break;  // Salimos del ciclo infinito si elige cancelar
        }
    }
}

ejecutar();