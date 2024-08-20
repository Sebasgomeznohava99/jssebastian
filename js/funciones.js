//! FUNCIONES NORMALES 
/* function saludar(){
    console.log('Hola Mundo')
}
saludar(); */

//* FUNCIONES ANONIMAS

/* const saludar = function () {
    console.log('Hola Mundo');
}
saludar() */

//? FUNCIONES FLECHA

/* const saludar = () =>{
    console.log('Hola Mundo')
}
saludar() */
/* const CIUDADUNO = 'Bogota';
const CIUDADDOS = 'Medellín';
const CIUDADTRES = 'Caldas';
const CIUDADCUATRO = 'Pereira';
const CIUDADCINCO = 'Cali'; */
/* let ciudad = 'Springfield';
let documento = 'Driver License';
let codigo = 'B47U89RE243';
let nombre = 'Bart';
let apellido = 'Simpson';
let address = '742 Evergreen Terr, Springfield, USA';
let birthdate = '02-11-70';
let sex = 'M';
let ht = "4'0";
let eyes = 'Blue';
let carnet = `Descripción Documento: 
Tipo de documento: ${documento}
Ciudad de Expedición: ${ciudad}
Codigo del Documento. ${codigo}
Nombre: ${nombre}
Apellidos: ${apellido}
Dirección de Residencia: ${address}
Fecha de Nacimiento: ${birthdate}
Sexo: ${sex}
Altura: ${ht}
Color de Ojos: ${eyes}`
console.log(carnet) */
/* let familiar = prompt('Por favor dinos el nombre de alguno de tus familiares');
let familiarDos = prompt('Por favor dinos el nombre de alguno de tus familiares');
let familiarTres = prompt('Por favor dinos el nombre de alguno de tus familiares');
let familiarCuatro = prompt('Por favor dinos el nombre de alguno de tus familiares');
let familiarCinco = prompt('Por favor dinos el nombre de alguno de tus familiares');
while (!isNaN(familiar) || !isNaN(familiarDos) || !isNaN(familiarTres) || !isNaN(familiarCuatro) || !isNaN(familiarCinco) || familiar === '' || familiarDos === '' || familiarTres === '' || familiarCuatro === '' || familiarCinco === '' ){
    alert('por favor danos los nombres de tus familires en letras y no dejes el espacio vacio')
    familiar = prompt('Por favor dinos el nombre de alguno de tus familiares');
    familiarDos = prompt('Por favor dinos el nombre de alguno de tus familiares');
    familiarTres = prompt('Por favor dinos el nombre de alguno de tus familiares');
    familiarCuatro = prompt('Por favor dinos el nombre de alguno de tus familiares');
    familiarCinco = prompt('Por favor dinos el nombre de alguno de tus familiares');
}
let concatenacion = `Familiar 1 = ${familiar}
Familiar 2 = ${familiarDos}
Familiar 3 = ${familiarTres}
Familiar 4 = ${familiarCuatro}
Familiar 5 = ${familiarCinco}`;
alert(concatenacion) */
/*  *//* let productoA = Number(prompt('Danos el precio del producto por favor'));
let productoB = Number(prompt('Danos el precio del producto por favor'));
let productoC = Number(prompt('Danos el precio del producto por favor'));
let productoD = Number(prompt('Danos el precio del producto por favor'));
let productoE = Number(prompt('Danos el precio del producto por favor'));
while ( productoA === '' || productoB === '' || productoC === '' || productoD === '' || productoE === '' || productoA <= 0 || productoB <= 0 || productoC <= 0 || productoD <= 0 || productoE <= 0 || isNaN(productoA) || isNaN(productoB) || isNaN(productoC) || isNaN(productoD) || isNaN(productoE)){
    alert('Por favor danos la información que te pedimos en números y no en espacio vacios o letras')
    productoA = Number(prompt('Danos el precio del producto por favor'));
    productoB = Number(prompt('Danos el precio del producto por favor'));
    productoC = Number(prompt('Danos el precio del producto por favor'));
    productoD = Number(prompt('Danos el precio del producto por favor'));
    productoE = Number(prompt('Danos el precio del producto por favor'));
}
let mensaje = '';
let diez = productoA * 0.90;
mensaje = `Este precio ${productoA} tiene el 10% de descuento ${diez}`;
alert (mensaje);
let veinte = productoB * 0.80;
mensaje = `Este precio ${productoB} tiene el 20% de descuento ${veinte}`;
alert (mensaje);
let treinta = productoC * 0.70;
mensaje = `Este precio ${productoC} tiene el 30% de descuento ${treinta}`;
alert (mensaje);
let cuarenta = productoD * 0.60; 
mensaje = `Este precio ${productoD} tiene el 40% de descuento ${cuarenta}`;
alert (mensaje);
let cincuenta = productoE * 0.50;
mensaje = `Este precio ${productoE} tiene el 50% de descuento ${cincuenta}`;
alert (mensaje); */
/* let nombre = 'sebastian';
let nombreUsuario = prompt('Por favor danos un nombre para saber si fuiste tu quien lo hizo');
while (nombreUsuario == '' || !isNaN(nombreUsuario) || nombreUsuario === null ){
    alert('Te pedí un nombre, no te he pedido números o información vacia')
    nombreUsuario = prompt('Por favor danos un nombre para saber si fuiste tu quien lo hizo');
}
if (nombreUsuario !== null){
    nombreUsuario = nombreUsuario.toLowerCase();
}

let mensaje = nombreUsuario === nombre ? `Fui yo` :  `Yo no fui`; 
alert(mensaje); */
/* let tecla = 'y';
let tecla2= 'Y';
let usuario = prompt('por favor selecciona una tecla');
while (usuario == '' || !isNaN(usuario) || usuario === null){
    alert('Por favor pon la información que te estamos pidiendo');
    usuario = prompt('por favor selecciona una tecla');
}
let mensaje = '';
if ( usuario === tecla || usuario === tecla2){
    mensaje = 'Correcto'
} else {
    mensaje = 'Error'
}
alert(mensaje); */
/* let opcion = 'Homero';
let opcion2 = 'Marge';
let opcion3 = 'Bart';
let opcion4 = 'Lisa';
let eleccion = Number(prompt('Por favor dinos que personaje deseas escoger'));
while (eleccion == '' || isNaN(eleccion) || eleccion === null || eleccion < 1 || eleccion > 4 ){
    alert('Por favor introduce la informacion que te estamos pidiendo para poder proceder');
    eleccion = Number(prompt('Por favor dinos que personaje deseas escoger'));
}
let mensaje = '';
if(eleccion === 1 ){
    mensaje = `Elegiste a ${opcion}`
} else if (eleccion === 2){
    mensaje = `Elegiste a ${opcion2}`
} else if (eleccion === 3){
    mensaje = `Elegiste a ${opcion3}`
} else {
    mensaje = `Elegiste a ${opcion4}`
}
alert(mensaje); */
// ! CUANDO PONEMOS LA INFORMACION EN LETRAS EN UN PROMPT, SI SE LE DA A CANCELAR DA NULL Y DEBE SER CON 3 ===, PERO CUANDO ES CON NUMBER POR LO GENERAL NO DEVUELVE UN NULL,Y UNA CADENA VACIA DEBE SER 0, POR LO QUE SI QUEREMOS QUE SALGA DEL CICLO WHILE CUANDO EL 0 ESTA INCLUIDO EN RESPUESTAS BUENAS DEBEMOS PONER EL TRIPLE = PARA QUE VALIDE TAMBIÉN EL TIPO DE DATO Y SE DE CUENTA QUE CUANDO NO SEA UNA CADENA VACIA DE TEXTO NO SEA IGUAL A EL NÚMERO 0, YA QUE 0 DEVUELVE EN PROMPT UNA CADENA VACIA, POR LO TANTO SI LE PONEMOS EL TRIPLE = EL TIPO DE VACIO NO ES EL MISMO QUE UNA STRING SI NO UN NUMBER
/* let salario = Number(prompt('Por favor dinos cuanto presupuesto tienes mensualmente'));
while (isNaN(salario) || salario ===  '' || salario < 0){
    salario = Number(prompt('Por favor dinos cuanto presupuesto tienes mensualmente'));
}
let mensaje = '';
if (salario >= 0 && salario <= 1000){
    mensaje = `El presupuesto es bajo`
} else if (salario >= 1001 && salario <= 3000){
    mensaje = 'Presupuesto medio'
} else {
    mensaje = 'Presupuesto alto'
}
alert(mensaje); */
/* let producto1 = prompt('Por favor ingresa un producto');
let producto2 = prompt('Por favor ingresa un producto');
let producto3 = prompt('Por favor ingresa un producto');
let producto4 = prompt('Por favor ingresa un producto');
while ( !isNaN(producto1) || !isNaN(producto2) || !isNaN(producto3) || !isNaN(producto4) || producto1 === '' || producto2 === '' || producto3 === '' || producto4 === '' || producto1 === null || producto2 === null || producto3 === null || producto4 === null){
    alert('Por favor ingresa toda la información pedida para que podamos seguir trabajando con ella')
    producto1 = prompt('Por favor ingresa un producto');
    producto2 = prompt('Por favor ingresa un producto');
    producto3 = prompt('Por favor ingresa un producto');
    producto4 = prompt('Por favor ingresa un producto');
}
let mensaje = '';
if ( producto1 !== '' && producto2 !== '' && producto3 !== '' && producto4 !== '' ){
    mensaje = `Ingresaste los siguientes productos:
1. ${producto1}
2. ${producto2}
3. ${producto3}
4. ${producto4} `
} 
alert(mensaje) */
/* let repeticiones = Number(prompt('Por favor dinos cuantas veces quieres que repitamos el mensaje'));
let mensaje = prompt('Ahora dinos el mensaje que quieres que repitamos');
while ( mensaje === '' || mensaje === null || !isNaN(mensaje) || repeticiones === '' || repeticiones <= 0 || isNaN(repeticiones)){
    alert('Necesitamos los datos pedidos')
    repeticiones = Number(prompt('Por favor dinos cuantas veces quieres que repitamos el mensaje'));
    mensaje = prompt('Ahora dinos el mensaje que quieres que repitamos');
}
let i = 1;
while (i <= repeticiones){
    alert(`Esta es la repeticion # ${i} de ${mensaje}`);
        i++
}
for (let i = 1; i<= repeticiones; i++){
    console.log(`Esta es la repeticion # ${i} de ${mensaje} Este es del for`)
}
do{
    console.log(`Esta es la repeticion # ${i} de ${mensaje} Este es del do while`);
    i++
}while (i <= repeticiones) */
/* let repeticion = Number(prompt('por favor dinos cuantas repeticiones quieres'));
while (repeticion === '' || isNaN(repeticion) || repeticion <= 0){
    alert('por favor introduce la informaicón en datos númericos como las pedimos')
    repeticion = Number(prompt('por favor dinos cuantas repeticiones quieres'));
} */
/* for (let i = 1; i <= repeticion; i++){
    alert(`Lado # ${i}`)
    if (i >= 4){
        break
    }
} */
// let i = 1;
/* while (i <= repeticion){
    alert(`Lado # ${i}`)
    if (i >= 4){
        break
    }
    i++
} */
/* do{
    alert(`Lado # ${i}`)
    if(i >= 4){
        break
    }
    i++
}while(i <= repeticion) */
/* let stringVacio = '';
for (let i = 1; i <= 10; i++){
if (i <= 10){
    stringVacio += `${i}. `
}
let estudiante = prompt('Por favor introduce el nombre de cada uno de los estudiantes');
stringVacio += `${estudiante}.
`;
}
console.log(stringVacio);
document.write(stringVacio); */
/* let i = 1;
let stringVacio = '';
let nombre = prompt(`Danos el nombre de tu personaje favorito de cualquier pelicula o serie`);
while (nombre !== 'Voldemort' && nombre !== 'voldemort'){
stringVacio += `${i}.`
nombre = prompt(`Danos el nombre de tu personaje favorito de cualquier pelicula o serie`);
if(nombre === 'voldemort' || nombre === 'Voldemort'){
    stringVacio += `y después de ${i} intentos por fin adivinaste mi personaje favorito `
}
stringVacio += `${nombre}.
`
i++
}
console.log(stringVacio); */
/* let verdura = prompt('Por favor ingresa un # para saber que verdura eres');
while(verdura !== 'ESC' && verdura !== 'esc'){
    let mensaje = '';
    if(verdura == '1'){
        mensaje = 'Tomate'
    } else if (verdura == '2') {
        mensaje = 'Papa'
    } else if (verdura == '3'){
        mensaje = 'Carne'
    } else if (verdura == '4'){
        mensaje = 'Pollo'
    } else {
        mensaje = 'Error'
    }
    alert(mensaje);
    verdura = prompt('Por favor ingresa un # para saber que verdura eres');
} */
//! LAS  FUNCIONES FLECHA CON LLAVES LLEVAN RETURN, SIN LLAVES NO TIENE QUE LLEVARLO
// const entrada = () => prompt('Por favor dinos tu nombre')
// * La funcion encerrada en la variable hace que se llame de una vez tan pronto como se guarde en la variable 
/* let retornoNombre = entrada();
alert(retornoNombre)
console.log(retornoNombre)
const procesamiento = (valor) => valor.toUpperCase()
let retornoUpper = procesamiento(retornoNombre);
alert(retornoUpper)
const salida = (valor) =>{
    alert(valor + 'Este es el alert de la funcion de salida')
}
salida (retornoUpper)
 */
/* function redondeo (numero){
    return Math.round(numero)
}
for (let i = 1; i <= 5; i++){
    let numero = parseFloat(prompt('Por favor dinos números decimales y utiliza para la parte decimal un punto ( . )  en vez de una coma ( , )'))
        let retorno = redondeo(numero)
        console.log(retorno)
} */
/* function impuesto (precio, porcentaje){
    precio += precio * (porcentaje / 100);
    return precio
}
for (let i = 1; i <= 5; i++){
    let precio = Number(prompt('Por favor dinos el precio del producto'));
    let porcentaje = Number(prompt('Dinos el porcentaje de impuesto que tiene tu país'));
    let retorno = impuesto(precio, porcentaje);
    console.log(retorno);
}
 */
/* const cotizarDolar = (pesos) => {
    pesos *= 0.00025
    return pesos
}
const cotizarPesos = (dolar) => {
    dolar *= 4057.04
    return dolar
}
let inicio = Number(prompt(`Por favor dinos que moneda es la que deseas convertir:
1. Pesos a dolar
2. Dolar a pesos`))
while(inicio === '' || inicio < 1 || inicio > 2 || isNaN(inicio)){
    inicio = Number(prompt(`Por favor dinos que moneda es la que deseas convertir:
1. Pesos a dolar
2. Dolar a pesos`))
}
if (inicio === 1){
    let pesos = Number(prompt('Cuanto es lo que deseas convertir de pesos'))
    while (pesos === '' || isNaN(pesos) || pesos <= 0){
        alert('Dinos cuanto es lo que deseas convertir')
        pesos = Number(prompt('Cuanto es lo que deseas convertir de pesos'))
    }
    let retornoPesos = cotizarDolar(pesos).toFixed(5);
    console.log(retornoPesos + ` USD`)
} else {
    let dolar = Number(prompt('Cuanto es lo que deseas convertir de dolar a peso'))
    while (dolar === '' || isNaN(dolar) || dolar <= 0){
        alert('Dinos cuanto es lo que deseas convertir')
        dolar = Number(prompt('Cuanto es lo que deseas convertir de dolar'))
    }
    cotizarPesos(dolar)
    let retornoDolar = cotizarPesos(dolar).toFixed(5);
    console.log(`${retornoDolar} COP`)
}
 */
/* const cadena = (cadena) => {
    if (cadena != ''){
        cadena = true
    } else {
        cadena = false
    }
    return cadena
} */
/* while (cadenaDeTexto != 'ESC' && cadenaDeTexto != 'esc' && cadenaDeTexto != 'Esc'){
    cadenaDeTexto = prompt('Por favor escribe una palabra');
    let alerta = cadena(cadenaDeTexto);
    alert(alerta)
} */
/* do{
    let cadenaDeTexto = prompt('Por favor escribe una palabra');
    let alerta = cadena(cadenaDeTexto);
    alert(alerta)
}while (cadenaDeTexto != 'ESC' && cadenaDeTexto != 'esc' && cadenaDeTexto != 'Esc') */
/* class Tienda{
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion; 
        this.propietario = propietario;
        this.rubro = rubro; 
    }
} */
/* const tienda1 = new Tienda ('Kwik - e - Mart', 'Av Siempre Viva', 'Apu', 'Supermercado') 
console.log(tienda1);
const tienda2 = new Tienda ('Unimerca', 'Iglesia San Pedro y San Pablo', 'Vieijto Extraño', 'Supermercado') 
console.log(tienda2);
const tienda3 = new Tienda ('La Vaquita', 'La 80', 'Vieijto Extraño Con Plata', 'Supermercado') 
console.log(tienda3); */
/* const tienda1 = new Tienda (prompt('Por favor dinos el nombre de la tienda'),
prompt('Por favor dinos la dirección de la tienda'),
prompt('Por favor dinos el propietario de la tienda'),
prompt('Por favor dinos el rubro de la tienda')
)
const tienda2 = new Tienda (prompt('Por favor dinos el nombre de la tienda'),
prompt('Por favor dinos la dirección de la tienda'),
prompt('Por favor dinos el propietario de la tienda'),
prompt('Por favor dinos el rubro de la tienda')
)
const tienda3 = new Tienda (prompt('Por favor dinos el nombre de la tienda'),
prompt('Por favor dinos la dirección de la tienda'),
prompt('Por favor dinos el propietario de la tienda'),
prompt('Por favor dinos el rubro de la tienda')
)
const tienda4 = new Tienda (prompt('Por favor dinos el nombre de la tienda'),
prompt('Por favor dinos la dirección de la tienda'),
prompt('Por favor dinos el propietario de la tienda'),
prompt('Por favor dinos el rubro de la tienda')
)
const tienda5 = new Tienda (prompt('Por favor dinos el nombre de la tienda'),
prompt('Por favor dinos la dirección de la tienda'),
prompt('Por favor dinos el propietario de la tienda'),
prompt('Por favor dinos el rubro de la tienda')
)
console.log(tienda1);
console.log(tienda2);
console.log(tienda3);
console.log(tienda4);
console.log(tienda4);
class Tienda{
    constructor(nombre, direccion){
        this.nombre = nombre, 
        this.direccion = direccion
    }
}
 */
/* class Tienda{
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
    estaAbierto(hora){
        if (((hora  >= 8) && (hora  <= 12))||((hora  >= 15) && (hora  <= 19))) {
            return true;
        }
        return false;
    }
}
const tienda4 = new Tienda("33 cents Store", "Cheap 231", "Barato SRL","Ropa");
for (let index = 0; index < 3 ; index++) {
    let entrada = parseInt(prompt("INGRESAR HORA EN PUNTO"));
    if(tienda4.estaAbierto(entrada)){
        alert("LA TIENDA ESTA ABIERTA A LAS "+entrada)
    }else{
        alert("LA TIENDA ESTA CERRADA A LAS "+entrada)
    }
} */
/* class Cine {
    constructor (nombre, ubicacion, capacidad){
        this.nombre = nombre, 
        this.ubicacion = ubicacion, 
        this.capacidad = capacidad
    }
    tieneEspacio(entradasVendidas){
        if (entradasVendidas >= this.capacidad){
            return false
        } else {
            return true
        }
    }
}

const cine1 = new Cine ('Cinemark', 'Arkadia', 150);
for (let i = 1; i <= 3; i++){
    let entradas = parseInt(prompt('Por favor dinos el número de entradas vendiadas de la funcion hasta ahora'))
    if (cine1.tieneEspacio(entradas)){
        alert(`El cine tiene espacio disponible, quedan ${cine1.capacidad - entradas}`)
    } else {
        alert(`El cine no tiene espacio disponible`)
    }
} */
/*     class Banco {
        constructor(nombre, saldo, tipoDeCuenta) {
            this.nombre = nombre;
            this.saldo = saldo;
            this.tipoDeCuenta = tipoDeCuenta;
            this.ubicacionCajeros = {
                minimo1: 20000,
                maximo1: saldo, // Aquí uso el argumento del constructor, no `this.saldo`
                minimo2: 50000,
                maximo2: saldo
            };
        }
    
        retiro(monto) {
            return (
                (monto >= this.ubicacionCajeros.minimo1 && monto <= this.ubicacionCajeros.maximo1) ||
                (monto >= this.ubicacionCajeros.minimo2 && monto <= this.ubicacionCajeros.maximo2)
            );
        }
    }
    
    const banco1 = new Banco('Bancolombia', 100000, 'Ahorros');
    let retiroCajero = parseInt(prompt('Por favor dinos cuánto deseas retirar'));
    
    if (!banco1.retiro(retiroCajero)) {
        alert('No puedes retirar en ninguno de los dos cajeros');
    } else if (retiroCajero >= banco1.ubicacionCajeros.minimo2 && retiroCajero <= banco1.ubicacionCajeros.maximo2) {
        alert('Puedes retirar en ambos cajeros');
    } else if (retiroCajero >= banco1.ubicacionCajeros.minimo1 && retiroCajero < banco1.ubicacionCajeros.minimo2) {
        alert('Puedes retirar en el cajero 1, pero no en el cajero 2');
    } */
/*     class Banco {
        constructor (nombre, saldo, tipoDeCuenta){
            this.nombre = nombre, 
            this.saldo = saldo, 
            this.tipoDeCuenta = tipoDeCuenta
        }
        puedeRetirar (monto) {
            if(monto < this.saldo){
                return true
            } else {
                return false
            }
        }
    }
const banco1 = new Banco ('Bancolombia', 100000, 'Ahorros')
let retiro = parseInt(prompt('Por favor dinos cuanto es lo que deseas retirar'));
if (banco1.puedeRetirar(retiro)){
    alert('Puedes retirar en el cajero')
} else {
    alert('No puedes retirar en el cajero')
} */
/* class Restaurante {
    constructor (nombre, tipoDeComida, aforo){
        this.nombre = nombre, 
        this.tipoDeComida = tipoDeComida,
        this.aforo = aforo
    }
    estaLLeno (clientesDentro) {
        if (clientesDentro < this.aforo){
            return true
        } else {
            return false
        }
    } 
}
const restaurante1 = new Restaurante ('Malanga', 'Mar', 500);
let aforoActual = parseInt(prompt('Por favor dinos el aforo que se encuentra en el restaurante'));
if(restaurante1.estaLLeno(aforoActual)){
    alert(`El aforo no esta completo, hacen falta que entren ${restaurante1.aforo - aforoActual}`)
} else {
    alert(`El aforo actual excede el aforo del lugar que es ${restaurante1.aforo}`)
} */
/* class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
    esPropietario (nombre){
        if (nombre === this.propietario){
            return true
        }else {
            return false
        }
    } 
}
const tienda5 = new Tienda ('Hola Mundo', 'Carrera 80', 'sebastian', 'Legumbres');
let nombrePropietario = prompt('Por favor dinos el nombhre del propietario según tu').toLowerCase();
if (tienda5.esPropietario(nombrePropietario)){
    alert('Ese es el propietario, felicidades!!!!')
} else {
    alert('El no es el propietario, lo siento')
} */
class Cliente {
    constructor (nombre, presupuesto, descuento, numeroTelefono){
        this.nombre = nombre,
        this.presupuesto = presupuesto
        this.descuento = descuento
        this.numeroTelefono = numeroTelefono
    }
    tranferirDinero(valor){
        if (valor <= this.presupuesto && valor > 0){
            return true
        } else {
            return false
        }
    }
}
//!  ESTOY PONIENDO EL VALOR DEL PRESUPUESTO DE TODOS LOS OBJETOS COMO EL DE LA PERSONA 1, PARA QUE SIEMPRE SIGA UTILIZANDO ESE CUANTAS VECES SEA Y CUANTAS VECES SE HAGA LA OPERACION O SE UTILICE EL PROMPT
// * SE BORRA LA CONDICION DE CUANDO PRESUPUESTO ES 0 NO FALSE PORQUE LO QUE PASA ES QUE SIEMRPE QUE EL VALOR SEA 0, NO HAY NINGUN NÚMERO QUE PUEDA SER MAYOR A 0, COMO LO PIDO EN VALOR > 0, ADEMÁS NO SE PERMITIRÍA EN LA CONDICIÓN DE QUE VALOR DEBE SER MENOR O IGUAL AL PRESUPUESTO, PORQUE EL VALOR NO PUEDE SER CERO O MENOR Y AL NO PODER SERLO, NO SE CUMPLE LA PRIMERA TAMPOCO
//? SE HACE EL PROCESO DE CONVERSION DEL # PARA DECIR CUANTO FALTA PONIENDO LO QUE SE LE RESTO A PRESUPUESTO CON UN SIGNO NEGATIVO ADELANTE, LO CUAL HACE QUE EL VALOR AL SER NEGATIVO SE NIEGA DOS VECES Y POR LEY DE SIGNOS SE CONVIERTE A POSITIVO, Y HACE EL VALOR POSITIVO PARA MOSTRARLO EN EL ALERT, LO CUAL PRESENTA CUANTO FALTA EN POSITIVO

const cliente1 = new Cliente ('Sebastian', 100000, 20, 3128505262)
let retiro1 = parseInt(prompt('¿Por favor dinos cuanto es lo que deseas retirar?'))
if(cliente1.tranferirDinero(retiro1)){
    cliente1.presupuesto -= retiro1
    alert(`El presupuesto restante es ${cliente1.presupuesto}`)
} else {
    cliente1.presupuesto -= retiro1
    alert(`No puedes hacer más retiros hace falta ${-cliente1.presupuesto}`)
}
const cliente2 = new Cliente ('Manuela', cliente1.presupuesto, 20, 3053619976)
let retiro2 = parseInt(prompt('¿Por favor dinos cuanto es lo que deseas retirar?'))
if(cliente2.tranferirDinero(retiro2)){
    cliente1.presupuesto -= retiro2
    alert(`El presupuesto restante es ${cliente1.presupuesto}`)
} else {
    cliente1.presupuesto -= retiro2
    alert(`No puedes hacer más retiros hace falta ${ -cliente1.presupuesto}`)
}
const cliente3 = new Cliente ('Margarita', cliente1.presupuesto, 0, 3208505262)
let retiro3 = parseInt(prompt('¿Por favor dinos cuanto es lo que deseas retirar?'))
if(cliente3.tranferirDinero(retiro3)){
    cliente1.presupuesto -= retiro3
    alert(`El presupuesto restante es ${cliente1.presupuesto}`)
} else {
    cliente1.presupuesto -= retiro3
    alert(`No puedes hacer más retiros hace falta ${-cliente1.presupuesto}`)
}