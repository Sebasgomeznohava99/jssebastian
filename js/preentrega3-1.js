

//*Traer todos los inputs y formulario 

const form = document.querySelector('#registro');
const nombreInput = document.querySelector('#nombre');
const precioInput = document.querySelector('#precio');
const descuentoInput = document.querySelector('#descuento');
const correoInput = document.querySelector('#correo');

//*Historial Vacio
let historial = [];

//*Evento de submit para el formulario
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!isNaN(nombreInput.value)){
        nombreInput.value = '';
        nombreInput.focus();
        return
    }
    if(isNaN(precioInput.value) || (precioInput.value) < 1){
        precioInput.value = '';
        precioInput.focus();
        return
    }
    if(isNaN(descuentoInput.value) || (descuentoInput.value) < 0 || (descuentoInput.value) > 100){
        descuentoInput.value = '';
        descuentoInput.focus();
        return
    }
    const construccion = constructor();
    agregarHistorial(construccion);
    mostrarHistorial();
    agregarLocalStorage();
    form.reset();
    nombreInput.focus();
})

//*Funcion constructora
function constructor (){
    let nombre = nombreInput.value;
    let precio = parseFloat(precioInput.value);
    let descuento = parseFloat(descuentoInput.value);
    let precioDescuento = (precio) - ((precio) * (descuento / 100));
    let correo = correoInput.value;
    return {nombre, precio, descuento, precioDescuento, correo}
}

//* Funcion agregar al historial 
function agregarHistorial (producto){
    historial.push(producto)
}

//*Traer la lista 
const lista = document.querySelector('#lista-historial');

//*Crear el elemento y agregarlo al historial para mostrarlo 
function mostrarHistorial (){
    lista.innerHTML = '';
historial.forEach((historia, index) => {
    let li = document.createElement('li');
    li.innerText = `Producto # ${index + 1}
Nombre : ${historia.nombre}
Precio: ${historia.precio}
Descuento: ${historia.descuento}
Precio Con Descuento: ${historia.precioDescuento}
Correo Electronico: ${historia.correo}`
lista.appendChild(li)
})
}

//* Agregar historial al storage 
function agregarLocalStorage (){
    localStorage.setItem('historial', JSON.stringify(historial));
}
//*Traer todo del local storage
function historialEnLocalStorage(){
    const historialLS = JSON.parse(localStorage.getItem('historial'));
    if (historialLS.lenght != 0) {  
        historialLS.forEach(producto => {
            agregarHistorial(producto);  
        });
        mostrarHistorial();  
    }

    nombreInput.focus();  
}
historialEnLocalStorage();