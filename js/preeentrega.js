// Variables de precios
const precioCamisas = 10000;
const precioPantalones = 15000;
const precioHoddies = 20000;
const precioZapatos = 50000;

let precioTotal = 0;
let cantidad = 0;
let descuento = '';

// Bienvenida
function saludar() {
    let nombre = prompt('Por favor dinos tu nombre');
    while (nombre === '' || !isNaN(nombre) || nombre === null) {
        nombre = prompt('Por favor dinos tu nombre');
    }
    alert(`Bienvenido ${nombre}!!!`);
    return nombre;
}

// Elección Prenda
function escoger(nombre) {
    let prenda = Number(prompt(`Por favor ${nombre} decinos que prenda queres que coticemos para su fabricación: (escoge con el número de la prenda)
1. Camisas
2. Pantalones
3. Hoddies
4. Tenis`));
    while (prenda === '' || isNaN(prenda) || prenda === null || prenda < 1 || prenda > 4) {
        alert('Por favor escoge entre las opciones que te dimos y con los valores numéricos de cada uno de ellos');
        prenda = Number(prompt(`Por favor ${nombre} decinos que prenda queres que coticemos para su fabricación: (escoge con el número de la prenda)
1. Camisas
2. Pantalones
3. Hoddies
4. Tenis`));
    }
    return prenda;
}

// Cálculo de precios
function calcularPrecio(precioUnitario, cantidad) {
    if (cantidad >= 10 && cantidad < 20) {
        precioUnitario -= precioUnitario * (10 / 100);
        descuento = '10%';
    } else if (cantidad >= 20 && cantidad < 30) {
        precioUnitario -= precioUnitario * (25 / 100);
        descuento = '25%';
    } else if (cantidad >= 30 && cantidad < 40) {
        precioUnitario -= precioUnitario * (35 / 100);
        descuento = '35%';
    } else if (cantidad >= 40) {
        precioUnitario -= precioUnitario * (45 / 100);
        descuento = '45%';
    } else {
        descuento = '0%';
    }
    return precioUnitario * cantidad;
}

function obtenerCantidad(prenda) {
    cantidad = Number(prompt(`Por favor dinos la cantidad de ${prenda} que deseas fabricar`));
    while (cantidad === '' || cantidad <= 0 || isNaN(cantidad)) {
        alert(`Dinos por favor la cantidad de ${prenda} que deseas generar`);
        cantidad = Number(prompt(`Por favor dinos la cantidad de ${prenda} que deseas fabricar`));
    }
    return cantidad;
}

// Funciones para cada prenda
function camisas() {
    obtenerCantidad('camisas');
    return calcularPrecio(precioCamisas, cantidad);
}

function pantalones() {
    obtenerCantidad('pantalones');
    return calcularPrecio(precioPantalones, cantidad);
}

function hoddies() {
    obtenerCantidad('hoddies');
    return calcularPrecio(precioHoddies, cantidad);
}

function zapatos() {
    obtenerCantidad('zapatos');
    return calcularPrecio(precioZapatos, cantidad);
}

// Mensaje final
function mensajeFinal(precioTotal, nombre, cantidad, prenda, descuento) {
    let mensaje = `Hola, ${nombre}. Muchas gracias por haber pasado por todo el proceso con nosotros de compra. El día de hoy el precio total por la compra de ${cantidad} ${prenda}, es de ${precioTotal}. Has obtenido un descuento de ${descuento}.`;
    alert(mensaje);
}

// Ejecución del programa
function ejecutar() {
    let nombre = saludar();
    let prenda = escoger(nombre);
    if (prenda == 1) {
        prenda = 'camisas';
        precioTotal = camisas();
    } else if (prenda == 2) {
        prenda = 'pantalones';
        precioTotal = pantalones();
    } else if (prenda == 3) {
        prenda = 'hoddies';
        precioTotal = hoddies();
    } else {
        prenda = 'zapatos';
        precioTotal = zapatos();
    }
    mensajeFinal(precioTotal, nombre, cantidad, prenda, descuento);
}

ejecutar();