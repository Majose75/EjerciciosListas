"use strict";
let nombres01 = ["Andra", "Aneu", "Arlet", "Ehud", "Indivar", "Samay", "Sanca", "Tanit", "Uxia", "Zenda"];
let nombres02 = ["Abba", "Acfred", "Areu", "Drac", "Guim", "Iol", "Kilian", "Mirt", "Yannick", "Zigor", "Tanit"];
//for (let item in nombres01) {  // 1� forma de mostrar la lista
//    console.log(item.toString());
//}
function imprimeNombre(elemento) {
    console.log(elemento.toString());
}
nombres01.forEach(imprimeNombre);
nombres02.forEach(imprimeNombre);
// 3� forma de hacerlo
/*nombres01.forEach(function (elemento: any) { return elemento.toString(); });*/
//nombres01.forEach((elemento) => elemento.toString()); // 3� reducida
//nombres02.forEach(function (elemento: any) { return elemento.toString(); });
//nombres02.forEach((elemento) => elemento.toString()); // Saca la lista 2 en formato reducito
// Sacar por consola si cumplen o no el criterio de que todos los nombres de la lista 01 tienen mas de 2 caracteres
function longitudNombre(elemento, indice, array) {
    return elemento.length > 2;
}
console.log("Los nombres  de la Lista 01 tienen longitud > 2: " + nombres01.every(longitudNombre));
// Filtrar los nombres de nombres01 y de nombres02 por aquellos nombres que sean mayores que la i 
function filtrarNombres(elemento, indice, array) {
    return elemento > "i" || elemento > "I";
}
console.log("Nombres de Chica: " + nombres01.filter(filtrarNombres));
console.log("Nombres de chico: " + nombres02.filter(filtrarNombres));
// Quiero llamar a una funci�n pal�ndromo para devolver el pal�ndromo de cada nombre dentro del array nombres01 y nombres02.
//function reverseString(str:string) {
//    return str.split("").reverse().join("");
//}
//console.log(reverseString("hello")); // Devuelve la cadena al reves: olleh
function palindromo(elemento) {
    /* return elemento.split("").reverse().join("");*/
    console.log("Lista con los nombres al reves: " + elemento.split("").reverse().join(""));
}
nombres01.forEach(palindromo);
nombres02.forEach(palindromo);
// usar indexOf para encontrar Tanit en ambas listas, usar indexOf para encontrar jacinto en ambas listas, mirar que pasa
console.log("El nombre Tanit esta en la lista de chicas en el puesto: " + (Number(nombres01.indexOf("Tanit")) + 1));
console.log("El nombre Tanit esta en la lista de chicos en el puesto: " + (Number(nombres02.indexOf("Tanit")) + 1));
console.log("indice es: " + nombres01.indexOf("Jacinto"));
console.log("indice es: " + nombres02.indexOf("Jacinto"));
// Une todos los elementos de nombres01 y de nombres02 y los separa con una coma. Ponerlos en dos listas separadas(join).
let cadena = nombres01.join(",");
console.log(cadena);
console.log(nombres02.join(","));
//- Crear un nuevo array usando el de nombres01 existente para crear un nuevo array de
//n�meros almacenando en dicho array la cantidad de caracteres que tienen el nombre.
console.log(nombres01.length); // el numero de lementos del array
function longitudElementoNombre(elemento, indice, array) {
    return elemento.length;
}
console.log(nombres01.map(longitudElementoNombre));
console.log(nombres02.map(longitudElementoNombre));
// Eliminar el �ltimo elemento de ambas listas.
console.log("Elemnto eliminado de la lista: " + nombres01.pop());
nombres01.forEach(imprimeNombre);
console.log("Elemnto eliminado de la lista: " + nombres02.pop());
nombres02.forEach(imprimeNombre);
//# sourceMappingURL=EjercicioListas.js.map