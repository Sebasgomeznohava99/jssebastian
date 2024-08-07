/* document.write('Hola Mundo');
alert('Hola Mundo');
console.log('Hola Mundo'); */
/* let saludo = 'Hola Mundo';
alert(saludo);
document.write(saludo);
console.log(saludo); */
/* let nombre = prompt('Dinos tu nombre');
alert(`Hola ${nombre}!`);
console.log(`Hola ${nombre}!`);
document.write(`Hola ${nombre}!`) */
/* let operacion = ((3+2) / (2*5))**2;
document.write(operacion);
alert(operacion);
console.log(operacion); */
/* let horas = Number(prompt('Por favor dinos cuantas horas trabajaste esta semana'));
let pagoXHora = Number(prompt('Cuanto te ofrecieron en el pago por hora'));
let pagoTotal = horas * pagoXHora;
document.write(pagoTotal);
alert(pagoTotal);
console.log(pagoTotal); */
/* let peso = Number(prompt('Por favor dinos cual es tu peso'));
let altura = Number(prompt('Por favor dinos cual es tu estatura en metros'));
let imc = peso / (altura)**2;
while (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0 || peso == '' || altura == ''){
    alert('Por favor introduce datos correctos para ayudarte con el IMC')
    peso = Number(prompt('Por favor dinos cual es tu peso'));
    altura = Number(prompt('Por favor dinos cual es tu estatura en metros'));
}
if (imc < 18.5){
    alert(`Tu IMC es de ${imc.toFixed(2)} y te encuentras en bajo peso`);
    document.write(`Tu IMC es de ${imc.toFixed(2)} y te encuentras en bajo peso`);
    console.log(`Tu IMC es de ${imc.toFixed(2)} y te encuentras en bajo peso`)
} else if (imc >= 18.5 && imc <= 24.9){
    alert(`Tu IMC es de ${imc.toFixed(2)} y te encuentras en peso normal`);
    document.write(`Tu IMC es de ${imc.toFixed(2)} y te encuentras en peso normal`);
    console.log(`Tu IMC es de ${imc.toFixed(2)} y te encuentras en peso normal`)
} else if (imc >= 25 && imc <= 29.9){
    alert(`Tu IMC es de ${imc.toFixed(2)} y te encuentras en sobrepeso`);
    document.write(`Tu IMC es de ${imc.toFixed(2)} y te encuentras en sobrepeso`);
    console.log(`Tu IMC es de ${imc.toFixed(2)} y te encuentras en sobrepeso`)
} else {
    alert(`Tu IMC es de ${imc.toFixed(2)} y te encuentras en obesidad`);
    document.write(`Tu IMC es de ${imc.toFixed(2)} y te encuentras en obesidad`);
    console.log(`Tu IMC es de ${imc.toFixed(2)} y te encuentras en obesidad`)
} */
/* let m = Number(prompt('Por favor dinos un número para poder proceder con la división'));
let n = Number(prompt('Por favor dinos un número para poder proceder con la división'));
while (isNaN(m) || isNaN(n) || m <= 0 || n <= 0 || m == '' || n == ''){
    alert('Por favor dinos unos números válidos para poder proceder con la operación matemática');
    m = Number(prompt('Por favor dinos un número para poder proceder con la división'));
    n = Number(prompt('Por favor dinos un número para poder proceder con la división'));
}
let c = m / n;
let r = m % n; 
alert(`El cociente de la división entre ${m} y ${n} es de ${c.toFixed(2)} y el residuo de la división es ${r.toFixed(2)}`);
document.write(`El cociente de la división entre ${m} y ${n} es de ${c.toFixed(2)} y el residuo de la división es ${r.toFixed(2)}`);
console.log(`El cociente de la división entre ${m} y ${n} es de ${c.toFixed(2)} y el residuo de la división es ${r.toFixed(2)}`); */
/* let inversion = Number(prompt('Por favor dinos la cantidad que deseas invertir'));
let intereses = Number(prompt('Por favor dinos el interes que genera el fondo de inversion'));
let cuotas = Number(prompt('Por favor dinos las cuotas que deseas dar en el fondo de inversion'));
while (isNaN(inversion) || isNaN(intereses) || isNaN(cuotas) || inversion <= 0 || cuotas <= 0 || intereses <= 0 || inversion == '' || intereses == '' || cuotas == ''){
    alert('Por favor dinos cantidades válidad para ayudarte con tu inversión')
    inversion = Number(prompt('Por favor dinos la cantidad que deseas invertir'));
    intereses = Number(prompt('Por favor dinos el interes que genera el fondo de inversion'));
    cuotas = Number(prompt('Por favor dinos las cuotas que deseas dar en el fondo de inversion'));
}
let inversionInicial = inversion; 
for (let i = 1; i <= cuotas; i++){
    inversion += inversion * (intereses / 100);
    alert(`Tu inversion en el mes ${i} es de ${inversion.toFixed(2)}`);
    document.write(`Tu inversion en el mes ${i} es de ${inversion.toFixed(2)}`);
    console.log(`Tu inversion en el mes ${i} es de ${inversion.toFixed(2)}`);
    inversion += inversionInicial
} */
/* let payasos = Number(prompt('Por favor dinos el número exacto de payasos a enviar'));
let dolls = Number(prompt('Por favor dinos el número exacto de muñecas a enviar'));
let pesoTotalPayasos = 112 * payasos;
let pesoTotalDolls = 75 * dolls;
let pesoTotal = pesoTotalPayasos + pesoTotalDolls;
alert (`El peso total de los payasos a enviar es de ${pesoTotalPayasos} y el peso total de las muñecas a enviar es ${pesoTotalDolls}, por lo tanto el peso total de todo el paquete a enviar es de ${pesoTotal}`);
document.write (`El peso total de los payasos a enviar es de ${pesoTotalPayasos} y el peso total de las muñecas a enviar es ${pesoTotalDolls}, por lo tanto el peso total de todo el paquete a enviar es de ${pesoTotal}`);
console.log (`El peso total de los payasos a enviar es de ${pesoTotalPayasos} y el peso total de las muñecas a enviar es ${pesoTotalDolls}, por lo tanto el peso total de todo el paquete a enviar es de ${pesoTotal}`); */
/* let pan = 3.49;
let descuento = pan * (60 / 100);
let panNoDelDia = 3.49 - descuento;
let venta = Number(prompt('Por favor dinos cuantas barras de pan fueron vendidas en todo el día que no sean del día'));
let precioNormal = venta * pan; 
while (venta == '' || isNaN(venta) || venta < 0){
    alert('Por favor dinos cual es el número total de panes vendidos el día de hoy que no son de hoy, para poder hacer el calculo total')
    venta = Number(prompt('Por favor dinos cuantas barras de pan fueron vendidas en todo el día que no sean del día'));
}
alert (`El total de barras de pan que no son del día vendidas el día de hoy es de ${venta} y el precio normal de todo lo vendido el día de hoy sería ${precioNormal.toFixed(2)}, pero ya que estas barras no son del día de hoy, a cada barra se le debe hacer un descuento de ${descuento} y cada unidad de pan queda a un precio de ${panNoDelDia.toFixed(2)}; por lo tanto el total que se ha vendido el día de hoy es de ${(panNoDelDia * venta).toFixed(2)}. Por lo tanto el descuento hecho el día de hoy en el total del pan vendido es de ${(precioNormal - (panNoDelDia * venta)).toFixed(2)}`)
console.log (`El total de barras de pan que no son del día vendidas el día de hoy es de ${venta} y el precio normal de todo lo vendido el día de hoy sería ${precioNormal.toFixed(2)}, pero ya que estas barras no son del día de hoy, a cada barra se le debe hacer un descuento de ${descuento} y cada unidad de pan queda a un precio de ${panNoDelDia.toFixed(2)}; por lo tanto el total que se ha vendido el día de hoy es de ${(panNoDelDia * venta).toFixed(2)}. Por lo tanto el descuento hecho el día de hoy en el total del pan vendido es de ${(precioNormal - (panNoDelDia * venta)).toFixed(2)}`)
document.write (`El total de barras de pan que no son del día vendidas el día de hoy es de ${venta} y el precio normal de todo lo vendido el día de hoy sería ${precioNormal.toFixed(2)}, pero ya que estas barras no son del día de hoy, a cada barra se le debe hacer un descuento de ${descuento} y cada unidad de pan queda a un precio de ${panNoDelDia.toFixed(2)}; por lo tanto el total que se ha vendido el día de hoy es de ${(panNoDelDia * venta).toFixed(2)}. Por lo tanto el descuento hecho el día de hoy en el total del pan vendido es de ${(precioNormal - (panNoDelDia * venta)).toFixed(2)}`) */
/* let edad = Number(prompt('Por favor dinos tu edad para ver si eres mayor de edad o no'));
edad >= 18 ? alert('Bienvenido, eres mayor de edad') : alert('No puedes ingresar ya que no eres mayor de edad'); */
/* let usuario = 'sebasgomez99@gmail.com';
let password = 'sebasg990819*';
let usuarioUsuario = prompt('Por favor el usuario para verificar que sea el indicado').toLowerCase();
let passwordUsuario = prompt('Por favor la contraseña para verificar que sea la indicada').toLowerCase();
while (usuarioUsuario == '' || passwordUsuario == ''){
    alert('Por favor ingresa valores en los campos de texto')
    usuarioUsuario = prompt('Por favor el usuario para verificar que sea el indicado');
    passwordUsuario = prompt('Por favor la contraseña para verificar que sea la indicada');
}
if (usuario == usuarioUsuario && password == passwordUsuario){
    alert('Bienvenido!!!')
} else {
    alert('El nombre de usuario o la contraseña son incorrectos')
} */
/* let dividendo = Number(prompt('Por favor danos un número'));
let divisor = Number(prompt('Por favor danos un número que actuará como divisor'));
let operacion = dividendo / divisor; 
while (isNaN(dividendo) || isNaN(divisor) || dividendo < 0 || divisor <= 0 || dividendo == '' || divisor == ''){
    alert('Error!!!')
    dividendo = Number(prompt('Por favor danos un número'));
    divisor = Number(prompt('Por favor danos un número que actuará como divisor'));
}
alert(`La división entre ${dividendo} y ${divisor} es ${operacion}`) */
/* let numero = parseInt(prompt('Por favor danos un número para saber si es impar o par'));
while (numero < 0 || isNaN(numero) || numero == ''){
    alert('Por favor ingresa un valor que podamos revisar si es par o impar')
    numero = parseInt(prompt('Por favor danos un número para saber si es impar o par'));
}
numero % 2 == 0 ? alert(`El número ${numero} es par`) : alert(`El número ${numero} es impar`) */
/* let edad = Number(prompt('Por favor dinos tu edad'));
let ganancias = Number(prompt('Por favor dinos las ganancias que tienes'));
while (edad <= 0 || ganancias < 0 || isNaN(edad) || isNaN(ganancias) || edad == '' || ganancias == '' ){
    alert('Por favor danos datos que sean validos para poder ver si tienes que tributar o no')
    edad = Number(prompt('Por favor dinos tu edad'));
    ganancias = Number(prompt('Por favor dinos las ganancias que tienes'));
}
if (edad >= 16 && ganancias >= 1000){
    alert('Tienes que tributar')
} else {
    alert('No tienes que tributar')
}
 */
/* let sexo = prompt('Por favor dinos tu sexo').toLowerCase();
let nombre = prompt('Por favor dinos la inicial de tu primer nombre').toLowerCase();
let mensaje; 
while (sexo == '' || nombre == '' || !isNaN(sexo) || !isNaN(nombre)){
    alert('necesitamos estos datos correctamente para continuar')
    sexo = prompt('Por favor dinos tu sexo').toLowerCase();
    nombre = prompt('Por favor dinos tu nombre').toLowerCase();
}
if (sexo == 'mujer'){
    if(nombre < 'm'){
        mensaje = 'Perteneces al grupo A'
        alert(mensaje)
    } else {
        mensaje = 'Perteneces al grupo B'
        alert(mensaje)
    }
} else if (sexo == 'hombre'){
    if (nombre > 'n'){
        mensaje = 'Perteneces al grupo A'
        alert(mensaje)
    } else {
        mensaje = 'Perteneces al grupo B'
        alert(mensaje)
    }
} else {
    mensaje = 'Has puesto información erronea en el sexo y por ello no hemos podido asignarte a un grupo'
    alert(mensaje)
} */
/* let renta = Number(prompt('Por favor dinos cuanto es tu renta'));
let mensaje; 
while (renta < 0 || isNaN(renta) || renta == ''){
    mensaje = 'Por favor danos unos valores verdaderos para proceder con el calculo';
    alert(mensaje)
    renta = Number(prompt('Por favor dinos cuanto es tu renta'));
}
if (renta < 10000){
    mensaje = 'Tu impositivo es de el 5%';
    alert(mensaje);
} else if (renta >= 10000 && renta < 20000){
    mensaje = 'Tu impositivo es del 15%';
    alert(mensaje);
} else if (renta >= 20000 && renta < 35000){
    mensaje = 'Tu impositivo es del 20%';
    alert(mensaje);
} else if (renta >= 35000 && renta < 60000){
    mensaje = 'Tu impositivo es de 30%';
    alert(mensaje);
} else {
    mensaje = 'Tu impositivo es del 45%';
    alert(mensaje);
}
 */
/* let dia = prompt('Por favor dinos que día de la semana es para decirte si se trabaja o no').toLowerCase();
let mensaje = '';
while (dia == '' || !isNaN(dia) || dia == null){
    alert('Por favor ingresa la información necesaria para continuar')
    dia = prompt('Por favor dinos que día de la semana es para decirte si se trabaja o no').toLowerCase();
}
switch(dia){
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
    case 'miércoles':
        mensaje = `El día ${dia} es un día de la semana y por ello debes trabajar`
        break;
    case 'sabado':
    case 'sábado':
    case 'domingo':
        mensaje = `El día ${dia} es fin de semana, por lo tanto es un día de descanso`
        break;
    default:
        mensaje = 'Por favor ingresa un día de la semana en especifico para que te podamos dar la información  de los días de descanso'
}
alert(mensaje) */
/* let palabra = prompt('Que deseas que escribamos diez veces');
while (palabra == '' || !isNaN(palabra) || palabra == null){
    alert('Por favor danos lo que necesitas que escribamos una cierta cantidad de veces para poder seguir')
    palabra = prompt('Que deseas que escribamos diez veces');
}
let i = 1; */
/* while (i <= 10){
    console.log(palabra);
    i++
} */
/* do{
    console.log(palabra)
    i++
}while (i <= 10) */
/* for (let i = 1; i <= 10; i++){
console.log(palabra);
} */
/* let anioActual = Number(prompt('Por favor dinos cual es el año en el que nos encontramos actualmente'));
let anioNacimiento = Number(prompt('Por favor dinos el año en que naciste'));
let edad = anioActual - anioNacimiento;
while( isNaN(anioActual) ||  isNaN(anioNacimiento) || anioActual <= 0 || anioNacimiento <= 0 || anioActual == '' || anioNacimiento == '' ){
    console.log('Por favor danos datos validos con los cuales podamos trabajar');
    anioActual = Number(prompt('Por favor dinos cual es el año en el que nos encontramos actualmente'));
    anioNacimiento = Number(prompt('Por favor dinos el año en que naciste'));
}
console.log(`Tu edad actual es de ${edad}, pero vamos a mirar cada año desde tu nacimiento cuantos años has cumplido y como han ido cambiado las cosas`);
for (let i = 0; i <= edad; i++){
    console.log(`En ${anioNacimiento} tenías ${i} años de edad`);
    anioNacimiento++
} */
/* let numero = Number(prompt('Por favor dinos un número cualquiera'));
while (numero <= 0 || isNaN(numero) || numero == ''){
    console.log('Por favor danos un número según lo pedido');
    numero = Number(prompt('Por favor dinos un número cualquiera'));
}
let listadoNumero = ''
for (let i = 1; i <= numero; i++){
    listadoNumero += i;
    if (i  < numero){
        listadoNumero += ', '
    }
}
console.log(listadoNumero) */
/* let numero = Number(prompt('Por favor dinos un número'));
while (numero <= 0 || isNaN(numero) || numero == ''){
    alert(`Por favor introduce valores que sean positivos`)
    numero = Number(prompt('Por favor dinos un número'));
}
let listadoNumero = '';
for (let i = 0; numero >= i; numero--){
    listadoNumero += numero;
    if (numero > i){
        listadoNumero += ', '
    }
}
console.log(listadoNumero); */
/* let inversion = Number(prompt('Por favor dinos que cantidad deseas invertir'));
let interes = Number(prompt('Por favor dinos que cantidad de interes tiene el fondo de inversion '));
let cuotas = Number(prompt('Por favor dinos cuantos años deseas invertir'));
while ( isNaN(inversion) || isNaN(interes) || isNaN(cuotas) || inversion <= 0 || interes <= 0 || cuotas <= 0 || inversion == '' || interes  == '' || cuotas == ''){
    alert('Por favor danos información que este bajo las reglas que te pedimos')
    inversion = Number(prompt('Por favor dinos que cantidad deseas invertir'));
    interes = Number(prompt('Por favor dinos que cantidad de interes tiene el fondo de inversion '));
    cuotas = Number(prompt('Por favor dinos cuantos años deseas invertir'));
}
let inversionInicial = inversion; 
let capital = 0
let i = 1;
do{
inversion += inversion * (interes/100);
capital = inversion - (inversionInicial * i)
console.log(`Tu inversion en el mes ${i} es de ${inversion.toFixed(2)} y el capital que tienes hasta ahora es de ${capital.toFixed(2)}`);
inversion += inversionInicial;
i++
}while (i<= cuotas) */
/* while (i <= cuotas){
    inversion += inversion * (interes / 100);
    capital = inversion - (inversionInicial * i);
    console.log(`Tu inversion en el mes ${i} es de ${inversion.toFixed(2)} y el capital que tienes hasta ahora es de ${capital.toFixed(2)}`);
    inversion += inversionInicial;
    i++
} */
/* for(let i = 1; i <= cuotas; i++){
    inversion += inversion * (interes / 100);
    capital = inversion - (inversionInicial * i);
    console.log(`Tu inversion en el mes ${i} es de ${inversion.toFixed(2)} y el capital que tienes hasta ahora es de ${capital.toFixed(2)}`);
    inversion += inversionInicial;
} */
/* for (let i = 1; i <= 10; i++){
    console.log(`1 * ${i} = ${1 * i}`)
} */
/* let i = 1; */
/* while (i <= 10){
    console.log(`1 * ${i} = ${1 * i}`);
    i++
} */
/* do{
console.log(`1 * ${i} = ${1 * i}`)
i++
}while (i <= 10) */
/* let password = 'sebasg990819*';
let passwordUsuario = prompt('Por favor introduce la contraseña').toLowerCase();
let mensaje = '';
while (passwordUsuario == '' || !isNaN(passwordUsuario) || passwordUsuario == null){
    mensaje= 'Por favor introduzca la contraseña conrrecta';
    passwordUsuario = prompt('Por favor introduce la contraseña').toLowerCase();
}
mensaje = 'Contraseña Correcta!!!'
alert(mensaje); */
/* let number = Number(prompt('Danos un número'));

let num = parseInt(prompt("Introduce un número:"));


let esPrimo = true;


if (num <= 1) {
    esPrimo = false;
} else {

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }
}


if (esPrimo) {
    console.log(num + " es un número primo.");
    alert(num + " es un número primo.");
} else {
    console.log(num + " no es un número primo.");
    alert(num + " no es un número primo.");
} */