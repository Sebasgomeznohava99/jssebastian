// Calculadora Basica
/* let num1 = Number(prompt('Por favor dinos un número para hacer las operaciones basicas'));
let num2 = Number(prompt('Por favor dinos un número para hacer las operaciones basicas'));
const suma = num1 + num2;
const resta = num1 - num2;
const multiplicacion = num1 * num2;
const division = num1 / num2;
const modulo = num1 % num2;
alert(`El resultado es:
Suma : ${suma}
Resta: ${resta}
Multiplicación: ${multiplicacion}
División: ${division}
Modulo: ${modulo}`) */
/* const nombre = prompt('Por favor dinos tu nombre');
const apellido = prompt('Por favor dinos tu apellido');
while (!isNaN(nombre) || !isNaN(apellido) || nombre === '' || apellido === '' || nombre === null || apellido === null){
    alert('Ingresa por favor solo datos en letras, no dejes el espacio vacio')
    nombre = prompt('Por favor dinos tu nombre');
    apellido = prompt('Por favor dinos tu apellido');
}
let mensaje = `Hola ${nombre} ${apellido}`;
alert(mensaje);
let celsius = parseFloat(prompt('Por favor dinos la temperatura para convertirla en grados Farenheit'));
const farenheit = ((celsius * (9 / 5) )+ 32)
while (celsius == '' || isNaN(celcius)){
    alert('Ingresa por favor solo datos en números, no dejes el espacio vacio')
    celsius = parseFloat(prompt('Por favor dinos la temperatura para convertirla en grados Farenheit'));
}
let mensaje2 = `Tu temperatura ${celsius} en grados Farenheit es ${farenheit}`
alert(mensaje2) */
/* let numeroRandom = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let numero = parseInt(prompt('Por favor dinos el número a adivinar entre 1 y 10'));
while(numero === '' || isNaN(numero)){
    alert('Por favor solo utiliza datos númericos')
    numero = parseInt(prompt('Por favor dinos el número a adivinar entre 1 y 10'));
}
while(numero !== numeroRandom){
    if(numero < numeroRandom){
        alert('El número que ingresaste es menor que el número que debes adivinar');
        numero = parseInt(prompt('Por favor dinos el número a adivinar entre 1 y 10'));
    } else if (numero > numeroRandom){
        alert('El número es mayor que el número que debes adivinar')
        numero = parseInt(prompt('Por favor dinos el número a adivinar entre 1 y 10'));
    }
}
if(numero === numeroRandom){
    alert(`Felicidades, el número era ${numeroRandom}`)
} */
/* let precio = parseInt(prompt('Por favor dinos el precio de un producto'));
let porcentaje = parseInt(prompt('Por favor decime el porcentaje de descuento que deseas poner en el producto'));
const descuento = precio * (porcentaje / 100);
let mensaje = `El precio del producto después del descuento es ${precio - descuento}`
alert(mensaje); */
/* const estudiantes = [];
class Estudiante {
    constructor (nombre, edad, grupo) {
        this.nombre = nombre,
        this.edad = edad, 
        this.grupo = grupo
    }
}

function definicion(){
    let nombre = prompt('Por favor dinos el nombre de cada uno de los estudiantes');
    while (nombre === '' || nombre === null || !isNaN(nombre)){
        alert('Tienes que darnos el nombre de la persona')
        nombre = prompt('Por favor dinos el nombre de cada uno de los estudiantes')
    }
    let edad = parseInt(prompt('Por favor dinos la edad de cada uno de los estudiantes'));
    while (isNaN(edad) || edad === '' || edad <= 0){
        alert('Por favor dinos la edad de la persona')
        edad = parseInt(prompt('Por favor dinos la edad de cada uno de los estudiantes'))
    }
    let grupo = prompt('Por favor dinos el grupo de cada persona');
    while (grupo === '' || grupo.length > 2){
        alert('Por favor dinos el grupo de la persona de esta manera: (5A, 6B, 7D)')
        grupo = prompt('Por favor dinos el grupo de cada persona');
    }
    return {nombre, edad, grupo}
}

function agregarArray (nombre, edad, grupo){
    estudiantes.push({
        nombre, 
        edad, 
        grupo
    })
}
let datos = definicion()
const estudiante1 = new Estudiante (datos.nombre, datos.edad, datos.grupo)
agregarArray(estudiante1.nombre, estudiante1.edad, estudiante1.grupo)
datos = definicion()
const estudiante2 = new Estudiante (datos.nombre, datos.edad, datos.grupo)
agregarArray(estudiante2.nombre, estudiante2.edad, estudiante2.grupo)
datos = definicion()
const estudiante3 = new Estudiante (datos.nombre, datos.edad, datos.grupo)
agregarArray(estudiante3.nombre, estudiante3.edad, estudiante3.grupo)
let mensaje = `Listado de estudiantes 
`
estudiantes.forEach((estudiante, index) =>{
    mensaje += `Estudiante ${index + 1} 
Nombre: ${estudiante.nombre}
Edad: ${estudiante.edad}
Grupo: ${estudiante.grupo}
`
})
alert(mensaje); */
/* let conversion = parseInt(prompt(`Por favor dinos que tipo de unidad deseas convertir (Por favor elige con números Ej: 1, 2, 3 o 4): 
1. Celsius a Farenheit
2. Farenheit a Celsius
3. Kilometros a Millas
4. Millas a Kilometros`));
while(conversion < 1 || conversion > 4 || conversion === '' || isNaN(conversion)){
    alert('Por favor dinos lo que deseas convertir')
    conversion = parseInt(prompt(`Por favor dinos que tipo de unidad deseas convertir (Por favor elige con números Ej: 1, 2, 3 o 4): 
1. Celsius a Farenheit
2. Farenheit a Celsius
3. Kilometros a Millas
4. Millas a Kilometros`));
}
const celcius = () => {
    let grados = parseFloat(prompt('Por favor dinos cuantos grados Celcius es lo que deseas convertir'))
    while (grados === '' || isNaN(grados)){
        alert('Dinos los grados que deseas convertir')
        grados = parseFloat(prompt('Por favor dinos cuantos grados Celcius es lo que deseas convertir'))
    }
    let farenheitConvertido = (grados * (9 / 5) + 32)
    return `La conversión de ${grados} Celsius a Farenheit es ${farenheitConvertido.toFixed(2)}`
}
const farenheit = () => {
    let grados = parseFloat(prompt('Por favor dinos cuantos grados Farenheit es lo que deseas convertir'))
    while (grados === '' || isNaN(grados)){
        alert('Dinos los grados que deseas convertir')
        grados = parseFloat(prompt('Por favor dinos cuantos grados Farenheit es lo que deseas convertir'))
    }
    let celciusConvertido = (grados - 32) * (5/9);
    return `La conversión de ${grados} Farenheit a Celsius es ${celciusConvertido.toFixed(2)}`
}
const millas = () => {
    let distancia = parseFloat(prompt('Por favor dinos cuanta es la distancia en Km que deseas convertir'));
    while (distancia === '' || distancia <= 0 || isNaN(distancia)){
        alert('Dinos la distancia que deseas convertir')
        distancia = parseFloat(prompt('Por favor dinos cuanta es la distancia en Km que deseas convertir'));
    }
    let kilometrosRecorridos = distancia / 1.609
    return `La conversion de ${distancia} kilometros a millas es ${kilometrosRecorridos.toFixed(2)}`
}
const kilometros = () => {
    let distancia = parseFloat(prompt('Por favor dinos cuanta es la distancia en Millas que deseas convertir'));
    while (distancia === '' || distancia <= 0 || isNaN(distancia)){
        alert('Dinos la distancia que deseas convertir')
        distancia = parseFloat(prompt('Por favor dinos cuanta es la distancia en Millas que deseas convertir'));
    }
    let millasRecorridas = distancia * 1.609
    return `La conversion de ${distancia} Millas a Kilometros es ${millasRecorridas.toFixed(2)}`
}
let mensaje = '';
if (conversion === 1){
    mensaje = celcius()
} else if (conversion === 2) {
    mensaje = farenheit()
} else if (conversion === 3) {
    mensaje = millas()
} else {
    mensaje = kilometros()
}
alert (mensaje) */
/* const numeros = [1, 3, 4, 8, 9, 10, 60, 70, 546]
numeros.forEach((numero, index, numeros) => {
    console.log(`${numero} esta en el indice ${index} y este es el array completo ${numeros}`)
}) */
/* const nombres = ['Marisol', 'Sebastian', 'Manuela', 'Yuca', 'Margarita']
nombres.forEach((nombre, index, array) => {
    console.log(`Buenos días ${nombre}, estas en la posición número ${index +1} de ${nombres.length} y estan estas personas por delante ${array}`)

}) */
/* const numeros = [10, 15, 20, 25, 30, 35]
const numerosMultiplicados = []
numeros.forEach((numero) => {
    numero * 2;
    console.log(numero)
})
numeros.push(30)
console.log(numeros) */
/* const numeros = [10, 15, 20, 25, 30, 35];
const dobles = numeros.map((numero) => {
    return numero * 2
})
console.log(numeros);
console.log(dobles); */
/* const nombres = ['marisol', 'sebastian', 'manuela', 'yuca', 'margarita']
const caps = nombres.map((nombre) => {
    return nombre.toUpperCase()
})
console.log(nombres);
console.log(caps); */
/* const estudiantes = [
    {nombre: 'Sebastian', nota: 5},
    {nombre: 'Manuela', nota: 4.5},
    {nombre: 'Yuca', nota: 3.5},
]
const notas = estudiantes.map((estudiante) => {
    return estudiante.nota
})
console.log(notas) */
/* const numeros = [1, 2, 456, 485, 548, 456 ,13, 48, 897, 8985, 46468, 4548, 472];
const pares = numeros.filter((numero) => {
    return numero % 2 === 0
})
console.log(numeros);
console.log(pares); */
/* const nombres = ['marisol', 'sebastian', 'manuela', 'yuca', 'margarita']
const cinco = nombres.filter((nombre) =>{
    return nombre.length > 7
})
console.log(cinco)
console.log(nombres) */
/* const productos = [
    {nombre: 'Arequipe', precio: 100},
    {nombre: 'Leche', precio: 20},
    {nombre: 'Arepas', precio: 10},
    {nombre: 'Huevos', precio: 15},
    {nombre: 'Granadilla', precio: 150},
    {nombre: 'Mango', precio: 17},
]
const cincuenta = productos.filter((producto) =>{
    return producto.precio > 50
})
console.log(productos);
console.log(cincuenta); */
// const numeros = [1, 2, 456, 485, 548, 456 ,13, 48, 897, 8985, 46468, 4548, 472];
/* const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0)
console.log(total) */
// const mayor = numeros.reduce((acumulador, numero) => {
/* if (acumulador > numero){
} else if (acumulador < numero){
    acumulador = numero
}
return acumulador */
// return acumulador > numero ? acumulador : numero
// }, 0)
// console.log(mayor)
/* const numeros = [1, 2, 3, 4, 6, 80, 50, 70]
numeros.forEach((numero, index) => {
    console.log(numero, (index + 1))
})
const nombres = ['Sebastian', 'Manuela', 'Margarita', 'Yuca']
nombres.forEach((nombre) => {
    console.log(nombre)
}) */
/* const nombres = ['Marisol', 'Sebastian', 'Manuela', 'Yuca', 'Margarita'];
nombres.forEach((nombre) => {
    console.log(`Buenos días ${nombre}, espero te encuentres demasiado bien`)
}) */

/*     const numeros = [1, 2, 3, 4, 6, 80, 50, 70]
    const multiplicado = numeros.map((numero) => {
        return numero * 2
    })
    console.log(multiplicado) */
/*     const nombres = ['marisol', 'sebastian', 'manuela', 'yuca', 'margarita'];
    const caps = nombres.map((nombre) => {
        return nombre.toUpperCase()
    })
    console.log(caps) */
/*     const estudiantes = [
    {nombre: 'Sebastian', nota: 5},
    {nombre: 'Manuela', nota: 4.5},
    {nombre: 'Yuca', nota: 3.5},
    ];
    const notas = estudiantes.map((estudiante) => {
        return estudiante.nota
    })
    console.log(notas)
 */
/* const numeros = [1, 2, 3, 4, 6, 80, 50, 70, 25, 47, 56, 89, 1065, 14564,]
const pares = numeros.filter((numero) => {
    return numero % 2 == 0
})
console.log(pares)
console.log(numeros) */
/* const numeros = [1, 2, 3, 4, 6, 80, 50, 70, 25, 47, 56, 89, 1065, 14564,]
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0)
console.log(suma) */
/* const numeros = [1, 2, 3, 4, 6, 80, 50, 70, 25, 47, 56, 89, 1065, 14564,];
const mayor = numeros.reduce((aumentador, numero) =>{
    return aumentador < numero ? numero : aumentador
})
console.log(mayor) */
/* const productos = [
    {nombre: 'Arequipe', precio: 100},
    {nombre: 'Leche', precio: 20},
    {nombre: 'Arepas', precio: 10},
    {nombre: 'Huevos', precio: 15},
    {nombre: 'Granadilla', precio: 150},
    {nombre: 'Mango', precio: 17},
]
const total = productos.reduce((contador, producto) =>{
    return contador + producto.precio
},0)
console.log(total) */
/* const numeros = [1, 2, 3, 4, 6, 80, 50, 70, 25, 47, 56, 89, 1065, 14564,];
const diez = numeros.find((numero) => {
    return numero > 100
})
console.log(diez) */
// const nombres = ['marisol', 'sebastian', 'manuela', 'yuca', 'margarita', 'andrea'];
/* const a = nombres.find((nombre) => {
    return nombre.startsWith('A') || nombre.startsWith('a') // !esta es una opcion nueva de un metodo para strings en donde estamos diciendole que lo que comience con a o A
}) */
// const a = nombres.find((nombre) => {
//     return nombre[0] === 'a' || nombre[0] === 'a' // ! Aca estamos accediendo a la prte interna de cada uno de los elementos del array, eso quiere decir que esta pasando por cada elemento y lo vuelve a cada elemento un array internamente y se le dice que la primera letra de ese array interno si es a o A devuelvalo
// })
// console.log(a)
/* const estudiantes = [
    {nombre: 'Sebastian', nota: 5},
    {nombre: 'Manuela', nota: 4.5},
    {nombre: 'Yuca', nota: 3.5},
    ];
const noventa = estudiantes.find((estudiante) => {
    return estudiante.nota > 4.5
})
console.log(noventa) */
/* const numeros = [1, 2, 3, 4, 6, 80, 50, 70, 25, 47, 56, 89, 1065, -14564,];
const negativo = numeros.some((numero) => {
    return numero < 0
})
console.log(negativo) */
/* const nombres = ['marisol', 'sebastian', 'manuela', 'yuca', 'margarita', 'andrea'];
const ocho = nombres.some((nombre) => {
    return nombre.length > 8 
})
console.log(ocho) */
/* const productos = [
    {nombre: 'Arequipe', precio: 100},
    {nombre: 'Leche', precio: 20},
    {nombre: 'Arepas', precio: 10},
    {nombre: 'Huevos', precio: 15},
    {nombre: 'Granadilla', precio: 150},
    {nombre: 'Mango', precio: 17},
]
const veinte = productos.some((producto) => {
    return producto.precio < 20
})
console.log(veinte) */
/* const numeros = [1, 2, 3, 4, 6, 80, 50, 70, 25, 47, 56, 89, 1065, 14564,];
const positivo = numeros.every((numero) => {
    return numero > 0
})
console.log(positivo) */
/* const nombres = ['marisol', 'sebastian', 'manuela', 'yuca', 'margarita', 'andrea'];
const tres = nombres.every((nombre) => {
    return nombre.length > 3
})
console.log(tres) */
/* const estudiantes = [
    {nombre: 'Sebastian', nota: 5},
    {nombre: 'Manuela', nota: 4.5},
    {nombre: 'Yuca', nota: 3.5},
    ];
    const aprobar = estudiantes.every((estudiante) => {
        return estudiante.nota >= 3.5
    })
    console.log(aprobar) */
/* const mayorQue = (x) => {
    return (num) => num > x
}
const mayorQueDiez = mayorQue(10)
console.log(mayorQueDiez(20)) */