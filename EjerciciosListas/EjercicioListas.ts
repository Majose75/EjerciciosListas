let nombres01: string[] = ["Andra", "Aneu", "Arlet", "Ehud", "Indivar", "Samay", "Sanca", "Tanit", "Uxia", "Zenda"];
let nombres02: string[] = ["Abba", "Acfred", "Areu", "Drac", "Guim", "Iol", "Kilian", "Mirt", "Yannick", "Zigor", "Tanit"];

//for (let item in nombres01) {  // 1ª forma de mostrar la lista
//    console.log(item.toString());
//}
function imprimeNombre(elemento: string) { //2ª Forma de hacerlo
    console.log(elemento.toString());
}
nombres01.forEach(imprimeNombre);
nombres02.forEach(imprimeNombre);
// 3ª forma de hacerlo
/*nombres01.forEach(function (elemento: any) { return elemento.toString(); });*/
//nombres01.forEach((elemento) => elemento.toString()); // 3ª reducida

//nombres02.forEach(function (elemento: any) { return elemento.toString(); });
//nombres02.forEach((elemento) => elemento.toString()); // Saca la lista 2 en formato reducito


// Sacar por consola si cumplen o no el criterio de que todos los nombres de la lista 01 tienen mas de 2 caracteres
function longitudNombre(elemento: string, indice: any, array: any) {
    return elemento.length > 2;
}
console.log("Los nombres  de la Lista 01 que tienen longitud > 2: " + nombres01.every(longitudNombre));

// Filtrar los nombres de nombres01 y de nombres02 por aquellos nombres que sean mayores que la i 
function filtrarNombres(elemento: string, indice: any, array: any) {
    return elemento > "i" || elemento > "I";
}
console.log("Nombres de Chica: " + nombres01.filter(filtrarNombres));
console.log("Nombres de chico: " + nombres02.filter(filtrarNombres));

// Quiero llamar a una función palíndromo para devolver el palíndromo de cada nombre dentro del array nombres01 y nombres02.
function palindromo(elemento: string) {
    /* return elemento.split("").reverse().join("");*/
    console.log(elemento.split("").reverse().join(""));
}
console.log("Lista con los nombres de chica al reves: ");
nombres01.forEach(palindromo);
console.log("Lista con los nombres de chico al reves: ");
nombres02.forEach(palindromo);

// usar indexOf para encontrar Tanit en ambas listas, usar indexOf para encontrar jacinto en ambas listas, mirar que pasa

console.log("El nombre Tanit esta en la lista de chicas en el puesto: " + (Number(nombres01.indexOf("Tanit")) + 1));
console.log("El nombre Tanit esta en la lista de chicos en el puesto: " + (Number(nombres02.indexOf("Tanit")) + 1));
console.log("Buscando Jacinto en la lista 1: " + nombres01.indexOf("Jacinto"));
console.log("Buscando Jacinto en la lista 2: " + nombres02.indexOf("Jacinto"));

// Une todos los elementos de nombres01 y de nombres02 y los separa con una coma. Ponerlos en dos listas separadas(join).

let cadena = nombres01.join(",");
console.log(`Lista 1 separada por comas: ${cadena}`);
console.log(`Lista 2 separada por comas: ${nombres02.join(",")}`);

//Punto 7.- Crear un nuevo array usando el de nombres01 existente para crear un nuevo array de
//números almacenando en dicho array la cantidad de caracteres que tienen el nombre.

console.log("Numero de elementos de la lista1: " + nombres01.length); // el numero de elementos del array

let Array1: number[] = []; //Creamos otro array vacio 
Array1 = nombres01.map(longitudElementoNombre);
console.log("PROBANDO: " + Array1);

function longitudElementoNombre(elemento: string) {
    return elemento.length;
}

console.log(nombres01.map(longitudElementoNombre)); // Aqui usamos la funcion que hemos creado para ello
//console.log(nombres02.map(longitudElementoNombre));
console.log(nombres02.map((elemento) => elemento.length)); //Aqui lo hacemos directamente

console.log("Nuevo array de la lista 1: " + Array1);

// Eliminar el último elemento de ambas listas.

console.log("Elemento eliminado de la lista: " + nombres01.pop());
nombres01.forEach(imprimeNombre);
console.log("Elemento eliminado de la lista: " + nombres02.pop());
nombres02.forEach(imprimeNombre);

//- Añadir el nombre Jacinto en ambas listas
nombres01.push("Jacinto");
nombres02.push("Jacinto");
console.log("Lista chicas con Jacinto:");
nombres01.forEach(imprimeNombre);
console.log("Lista chicos con Jacinto:");
nombres02.forEach(imprimeNombre);
// Usando el array del punto 7 quiero hacer un running total, sumando los valores consecutivos

let total1 = 0;
for (let indice1 of Array1) total1 += indice1;
console.log("Suma de todos los elementos del Array1 generado por el numero de caracteres de los elementos de la lista1: " + total1);


console.log("LISTA 1: " + nombres01); // Así saca todos los elementos de la lista a la vez
console.log("LISTA 2: " + nombres02);

//11. Devolver el subarrray del elemento 1 al 7 de la primera lista nombres01 y del 4 al 6 en la segunda lista nombres02,
//con esos dos subarray crear un nuevo array con estos nombres.

//Forma Majose, añadiendo los elelemntos de las dos listas dierctmente en el nuevo array
let Array2: string[] = [];
for (let c = 0; c < 7; c++) {
    Array2.push(nombres01[c]);
}
for (let c = 3; c < 6; c++) {
    Array2.push(nombres02[c]);
}
console.log("Nuevo Array con partes de las dos listas made by Majose:" + Array2);

//Version con slice()
nombres01.slice(1, 7);
nombres02.slice(4, 6);
let Array3: string[] = [];
/*Array3.concat(nombres01.slice(0, 7), nombres02.slice(3, 6));*/
console.log(`Array3 hecho de la seleccion de elementos de las dos listas: ${Array3.concat(nombres01.slice(0, 7), nombres02.slice(3, 6))}`);

// 12. Devuelve true si alguno de los elementos de la colección contiene una longitud de nombre > 6. Hacerlo para ambas listas.
function mayorSeis(element: string) {
    return (element.length > 6);
}
console.log("Tienen mas de 6 caracteres alguno de los nombres de las listas?");
console.log("LISTA 1: " + nombres01.some(mayorSeis));
console.log("LISTA 2: " + nombres02.some(mayorSeis));

/*13. Sort.Ordena las listas de forma ascendente y descendente.*/
console.log("Orden Ascendente:");
console.log("LISTA 1: " + nombres01.sort());
console.log("LISTA 2: " + nombres02.sort());
console.log("Orden Descendente:");
console.log("LISTA 1: " + nombres01.reverse());
console.log("LISTA 2: " + nombres02.reverse());

//Ordenar numeros --> function(a, b) {return a - b}  // function(a, b) {return b - a}
