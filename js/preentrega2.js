let historial = [];

const nombre = () => {
    let mensaje = '';
    let nombre = prompt(`Bienvenido, espero te encuentres demasiado bien!!!
Por favor dinos tu nombre para poder saber quien esta ingresando al sistema`);
    while(nombre === '' || !isNaN(nombre) || nombre.length < 2){
        alert('Por favor introduce tu nombre completo para poder saber con quien es la persona que estamos tratando y poder brindarte ayuda');
        nombre = prompt(`Bienvenido, espero te encuentres demasiado bien!!!
        Por favor dinos tu nombre para poder saber quien esta ingresando al sistema`);
    }
    mensaje = `Bienvenido ${nombre}. Espero te encuentres demasiado bien el día de hoy.`;
    return mensaje;
};

const opciones = (nombre) => {
    let opcion = parseInt(prompt(`${nombre}
Por favor dinos que es lo que quieres hacer el día de hoy:
1. Cotizar
2. Mira el historial
3. Cancelar`));
    while (opcion === '' || opcion < 1 || opcion > 3 || isNaN(opcion)){
        alert('Por favor escoge entre las opciones dadas = 1, 2, 3');
        opcion = parseInt(prompt(`${nombre}
Por favor dinos que es lo que quieres hacer el día de hoy:
1. Cotizar
2. Mira el historial
3. Cancelar`));
    }
    return opcion;
};

function constructor(){
    let nombre = prompt('Por favor dinos el nombre del producto a cotizar');
    while(nombre === '' || !isNaN(nombre) || nombre === null){
        alert('Por favor dinos la información como se pide para poder proseguir con la calculadora');
        nombre = prompt('Por favor dinos el nombre del producto a cotizar');
    }
    let precio = parseInt(prompt('Por favor dinos el precio del producto a cotizar'));
    while (precio === '' || isNaN(precio) || precio <= 0){
        alert('Por favor dinos la información como se pide para poder proseguir con la calculadora');
        precio = parseInt(prompt('Por favor dinos el precio del producto a cotizar'));
    }
    let descuento =  parseInt(prompt('Por favor dinos el descuento que tiene el producto entre 1 a 100'));
    while (descuento === '' || isNaN(descuento) || descuento < 0 || descuento > 100){
        alert('Por favor dinos la información como se pide para poder proseguir con la calculadora');
        descuento = parseInt(prompt('Por favor dinos el descuento que tiene el producto entre 1 a 100'));
    }
    let precioDescuento = precio - (precio * (descuento / 100));
    return {nombre, precio, descuento, precioDescuento};
}

function agregarHistorial (nombre, precio, descuento, precioDescuento){
    historial.push({
        nombre,
        precio,
        descuento,
        precioDescuento
    });
}

function mostrarHistorial() {
    let mensaje = `Historial de productos cotizados:\n`;
    historial.forEach((producto,  index) => {
        mensaje += `Producto #${index + 1}:\nNombre: ${producto.nombre}.\nPrecio: ${producto.precio}.\nDescuento: ${producto.descuento}%.\nPrecio con Descuento: ${producto.precioDescuento}.\n\n`;
    });
    alert(mensaje);
}

function ejecutar(){
    let nombreRetornado = nombre();
    let opcion = opciones(nombreRetornado);
    
    while (true) {
        if(opcion === 1){
            let construccion = constructor();
            agregarHistorial(construccion.nombre, construccion.precio, construccion.descuento, construccion.precioDescuento);
            opcion = opciones(nombreRetornado);  
        } else if (opcion === 2){
            if (historial.length === 0){
                alert('No has hecho ninguna cotización');
            } else {
                mostrarHistorial();
            }
            opcion = opciones(nombreRetornado); 
        } else {
            alert('Muchas gracias por entrar a trabajar con nosotros');
            break; 
        }
    }
}

ejecutar();