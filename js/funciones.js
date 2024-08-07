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
let productoA = Number(prompt('Danos el precio del producto por favor'));
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
alert (mensaje);
