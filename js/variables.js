/* let nombre = 'Sebastian';
let edad = 24;
let ciudad = 'Medellín';
ciudad = 'Medellín la ciudad más hermosa';
const PI = 3.14;
PI = 4654; // Da un error, no puedo volver a declarar constantes o reasignar su valor  */
//--------------------------------------------------------------------------------------------------------
/* let a = 505;
let b = 504654;
let suma = a + b;
let resta = a - b;
let multi = a * b;
let  division = a / b;
let modulo = b % a
console.log(suma);
console.log(resta);
console.log(multi);
console.log(division);
console.log(modulo); */
//---------------------------------------------------------------------------------------------------------
/* let saludo = 'Hola, espero te encuentres demasiado bien';
let nombre = 'Sebastian Gómez Nohavá';
let despedida = 'Muchas gracias por pasarte por nuestra página';
let mensajeCompleto = `${saludo} ${nombre}. ${despedida}`;
console.log(mensajeCompleto);
 */
//--------------------------------------------------------------------------------------------------------
/* let nombre = prompt('Por favor ingresa tu nombre');
alert(`Bienvenido ${nombre}, gracias por visitar nuestra pagina, es demasiado importante que estes con nosotros`);
let numA = prompt('Por favor ingrese un número');
let numB = prompt('Por favor ingrese otro número');
let suma = Number(numA) + Number(numB);
let resta = Number(numA) - Number(numB);
let multi = Number(numA) * Number(numB);
let division = Number(numA) / Number(numB);
alert(`Muchas gracias por ingresar los números pedidos!!!!. Estos son los resultados: 
${suma}
${resta}
${multi}
${division}`)
 */
//-----------------------------------------------------------------------------------------------------
/* let entero = prompt('Por favor ingresa un número entero');
let decimal = prompt('Por favor ingresa un número decimal');
console.log(parseInt(entero));
console.log(parseFloat(decimal))
 */
/* let numero = prompt('Por favor ingresa el año de tu nacimiento para saber cuantos años tienes');
let anios = 2024 -  Number(numero);
console.log(`En el 2024 tienes ${anios} años`) */
//-----------------------------------------------------------------------------------------------------
/* let nombre = prompt('Por favor ingrese su nombre');
let apellidos = prompt('Por favor ingrese sus apellidos');
let edad = prompt('Por favor ingrese su edad');
console.log(edad < 18 ? `No puedes ingresar ${nombre} ${apellidos}, esta página es para mayores de 18` : `Bienvenido ${nombre} ${apellidos}, puedes ingresar porque tienes ${edad}`); */
/* let numA = Number(prompt('Por favor ingrese un número para poder hacer las operaciones matematicas basicas')); 
let numB = Number(prompt('Por favor ingrese un número para poder hacer las operaciones matematicas basicas'));
let suma = numA + numB;
let resta = numA - numB;
let multiplicacion = numA * numB;
let division = numA / numB;
let modulo = numA % numB;
console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(modulo);
 */
/* let numero1 = prompt('Por favor ingrese un número para ver cual es mayor que el otro');
let numero2 = prompt('Por favor ingrese un número para ver cual es mayor que el otro');
console.log(numero1 > numero2 ? `${numero1} es mayor que ${numero2}` : `${numero2} es mayor que ${numero1}`)
if(numero1 > numero2){
    console.log(`${numero1} es mayor que ${numero2}`)
} else {
    console.log(`${numero2} es mayor que ${numero1}`)
} */
//----------------------------------------------------------------------------------------------------
/* let edad = Number(prompt('Por favor ingresa la edad para ver si puedes ingresar'))
edad >= 18 ? alert('Eres mayor de edad y tienes ingreso') : alert('Eres menor de edad y no tienes ingreso') */
/* let numA = Number(prompt('Por favor ingresa un número'));
let numB = Number(prompt('Por favor ingresa un número'));
let resultado;
let operacion = Number(prompt(`Por favor ingresa con un número la operación que deseas hacer:
1. Suma
2. Resta
3.Multiplicación
4. División`));
if(operacion == 1){
    resultado = numA + numB;
    alert(resultado)
} else if (operacion == 2){
    resultado = numA - numB;
    alert(resultado)
} else if (operacion == 3){
    resultado = numA * numB;
    alert(resultado)
} else {
    resultado = numA / numB;
    alert(resultado)
} */
/* let celsius = Number(prompt('Por favor ingresa la temperatura en grados Celcius para poder convertir'));
let conversion = (celsius * (9/5)) + 32;
alert(conversion); */
/* alert('Hola Mundo') */
/* let holaMundo = 'Hola Mundo';
alert(holaMundo) */
/* let nombre = prompt('Dinos tu nombre por favor') */
/* alert(`Hola ${nombre}`) */
/* let operacion = ((3+2)/(2*5))**2
document.write(operacion) */
/* let horas = Number(prompt('Por favor introduce el # de horas trabajadas'));
let pagoHoras = Number(prompt('Por favor introduce el pago por hora que te ofrecieron'));
let pagoTotal = pagoHoras * horas;
document.write(pagoTotal); */
/* let peso = Number(prompt('Por favor introduce tu peso en KG'))
let altura =  Number(prompt('Por favor introcude tu altura en metros'))
let imc = (peso/(altura)**2) */
/* if (imc > 30){
    alert('Obesidad')
} else if(imc >= 25 && imc <= 29){
    alert('Peso superior al normal')
} else if (imc >= 18.5 && imc <= 24.9){
    alert('Normal')
} else {
    alert('Peso inferior al normal')
} 
console.log(imc) */
/* let mensaje = `Tu IMC es de ${imc}`
console.log(mensaje) */
/* let n = Number(prompt('Por favor introduce un número')); 
let m = Number(prompt('Por favor introduce un número'));
let cociente = n / m;
let resto = n % m;
let mensaje; 
alert(`La división entre ${n} y ${m} da como cociente ${cociente} y como residuo ${resto}`) */
/* let prestamo = Number(prompt('Por favor dinos la cantidad a prestar'));
let cuotas = Number(prompt('Por favor dinos la cantidad de cuotas que deseas tener'));
let interes = Number(prompt('Por favor dinos la cantidad de interes que deseas tener en cada una de las cuotas'));
while(isNaN(prestamo) || isNaN(cuotas) || isNaN(interes) || prestamo <= 0 || cuotas <= 0 || interes <= 0){
    alert('Por favor ingresa valores validos');
    prestamo = Number(prompt('Por favor dinos la cantidad a prestar'));
    cuotas = Number(prompt('Por favor dinos la cantidad de cuotas que deseas tener'));
    interes = Number(prompt('Por favor dinos la cantidad de interes que deseas tener en cada una de las cuotas'));
}
let cantidadInteres = (prestamo * interes) / 100;
let pagoTotal = cantidadInteres + prestamo;
alert(`El pago total que debes dar después del prestamo más el interes que pusiste es ${pagoTotal}.
Y ahora miremos cuanto tienes que pagar mensualmente y cuanto te haría falta para pagar la totalidad`)
let pagoMensual = pagoTotal / cuotas
let pagoRestante = pagoTotal;
for (i = 1; i <= cuotas; i++){
    pagoRestante -= pagoMensual
alert(`Pago # ${i} = ${pagoMensual} y lo que resta a pagar de la deuda es ${pagoRestante}` )
} */
/* let cantidadInversion = Number(prompt('Por favor dinos la cantidad que deseas invertir'));
let interes = parseFloat(prompt('Por favor dinos el interes anual que te va a generar esta inversion anualmente'));
let cuotas = Number(prompt(`Por favor dinos cuantos años deseas invertir en este fondo la cantidad de ${cantidadInversion}`))

while(isNaN(cantidadInversion) || isNaN(interes) || isNaN(cuotas) || cantidadInversion <= 0 || interes <= 0 || cuotas <= 0){
    alert('Por favor ingresa valores que sean validos para poder darte la información')
    cantidadInversion = Number(prompt('Por favor dinos la cantidad que deseas invertir'));
    interes = Number(prompt('Por favor dinos el interes anual que te va a generar esta inversion anualmente'));
    cuotas = Number(prompt('Por favor dinos cuantos años deseas invertir en este fondo'))
}
let inversionIncial = cantidadInversion;
for(i = 1; i <= cuotas; i++){
    cantidadInversion +=  cantidadInversion * (interes / 100);
    alert(`Tu inversion para el año # ${i} es de ${cantidadInversion}`)
    cantidadInversion += inversionIncial;
}
alert(`Tu inversion todal ha sido de ${inversionIncial * cuotas}`)
 */
/* let payasos = Number(prompt('# de payasos vendidos'));
let dolls = Number(prompt('# de muñecas vendidos'));
const pesoPayasos = 112;
const pesoDolls = 75; 
let pesoTotal = (payasos * pesoPayasos) + (dolls * pesoDolls);
alert(pesoTotal); */
/* let venta = Number(prompt('¿Cuantos panes que no son del día se vendieron?'))
let precioPan = 3.49;
let descuento = precioPan * 0.60;
let precioNoDia = precioPan - descuento;
let total = venta * precioNoDia
document.write(`El precio habitual del pan es ${precioPan.toFixed(2)}
`);
document.write(`El descuento por no ser del día es ${descuento.toFixed(2)}
`);
document.write(`El precio del pan por no ser del día es ${precioNoDia.toFixed(2)}
`);
document.write(`El precio total por panes que no son del día es ${total.toFixed(2)}
`);
document.write(`El descuento total que se ha echo es ${((venta * precioPan) - total).toFixed(2)}`); */


