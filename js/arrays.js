/**
 * * Array.lenght = La longitud del array, siempre en un ciclo se utiliza -1
 * ! Push = introduce un valor al final del array
 * * Unshift = introduce un valor al inicio del array 
 * shift = elimina el primer elemento
 * pop = elimina el ultimo elemento
 * splice = elimina metodos internos de array, el primer número del elemento es desde el indice que iniciamos y el segundo es cuantos después de ese indice queremos eliminar, entendiendo que el indice donde comenzamos cuenta como una de esas posiciones, array.splice(1, 2), empieza el indice 1 y sigue otro indice más
 * join = pone el array en string y los separa por lo que pongamos dentro de las comillas
 * concat = tengo dos array y al que le queremos concatenar el otro, lo ponemos entre los parentesis y concatenamos dos arrays
 * slice = genera una copia del array, pero solo una parte, en sus parametros tenemos que poner, el indice donde arranca, y el final -1
 * indexOf = nos da el indice de un elemento del array 
 * includes = nos da un valor booleano si lo que ponemos en el parentesis, el valor string esta incluido en el array
 * reverse = hace una reversa de nuestra array
*/
// Abstraccion de funciones 
/* function sumar (min, max){
    let total = 0;
    for (let i = min; i <= max; i++){
        total += i; 
    }
    console.log(total);
}
let suma = sumar (10, 7)
console.log(suma); */

// RETORNO DE FUNCIONES 
// El retorno de una funcion para utilizarla en otras, cuando se iguala lo nuevo a una funcion, se vuelve igual una funcion, en donde el segundo parametro se torna en el parametro ya dado por otra funcion que se retorno 
/* function mayorQue (x){
    return (num) => num > x
} */
//La funcion retorno retornada e igualada a mayorQueDiez, lo convierte en una funcion y con eso, lo que se hace es que esta funcion nueva, mayorque diez tome como parametro el num 
/* const mayorQueDiez = mayorQue(10);
console.log(mayorQueDiez(11)) */
// Metodos de busqueeda y transformación 
const numeros = [50, 12, 17, 37, 25, 6] 
const animales = ['Perro', 'Gato', 'Cisne', 'Tortuga'];
const productos = [ {nombre: 'Mesa', precio: 3500},
    {nombre: 'Silla de Plastico', precio: 2000},
    {nombre: 'Silla de Madera', precio: 2500},
    {nombre: 'Ventana', precio: 4500},
    {nombre: 'Puerta', precio: 3000},
]
// foreach() = recorre el array y ejecuta lo que le digamos con cada valor, el parametro es como por así decirlo cada valor de cada propiedad o cada paso por cada propiedad
/* numeros.forEach((numero) => {
    console.log(numero)
}) */
//imprime cada uno de los números dentro de numeros
// find() = recorre el array y retorna el primer elemento que cumpla con una condición, toca guardarlo en una variable
const perro = animales.find((animal) => {
    return animal === 'Perro'
})
let productoElegido = prompt('Ingrese el producto que quiere comprar');
console.log (productos.find(producto) =>{
producto.nombre === productoElegido
})