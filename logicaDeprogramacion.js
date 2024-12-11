/*Enunciado Ejercicio 1:

Dado un array o un objeto de superhéroes de Marvel, haz un programa que pueda
mostrar la información de un superheroe.
 
Y añade una capacidad de buscar la información de varios superhéroes a la vez.
 
Ejemplo:
mostrarInformacionSuperheroe('Iron Man');
 
Salida:
Nombre real: Tony Stark
Poderes: Tecnología avanzada, Movilidad aérea
Equipo: Los vengadores
 
Ejemplo 2: 
mostrarInformacionSuperheroes([array de nombres]]);
 
Salida:
Muestra la información de todos los superheroes
 
*/

// Crear array de objetos de superheroes marvel
// const infoSuperheroes = {
//   "Iron Man": {
//     nombreReal: "Tony Stark",
//     poderes: ["Tecnologia avanzada", "Movilidad aérea"],
//     equipo: "Los vengadores",
//   },
//   "Capitán América": {
//     nombreReal: "Steve Rogers",
//     poderes: ["Fuerza sobrehumana", "Agilidad y reflejos sobresalientes"],
//     equipo: "Los vengadores",
//   },
//   Thor: {
//     nombreReal: "Thor Odinson",
//     poderes: ["Mjolnir", "Viento y trueno"],
//     equipo: "Los vengadores",
//   },
//   "Spider-Man": {
//     nombreReal: "Peter Parker",
//     poderes: ["Balanceo", "Telarañas pegajosas", "Sentido aracnido"],
//     equipo: "Los vengadores",
//   },
//   Hulk: {
//     nombreReal: "Bruce Banner",
//     poderes: ["Fuerza sobrehumana", "Invulnerabilidad"],
//     equipo: "Los vengadores",
//   },
// };

// const findInfo = (name) => {
//   if (name in infoSuperheroes) {
//     const info = infoSuperheroes[name];
//     console.log(`######### ${name} ####### `);
//     console.log(`Nombre real:  ${info.nombreReal}`);
//     console.log(`Poderes : ${info.poderes}`);
//     console.log(`Info del Equipo: ${info.equipo}`);
//   } else {
//     console.log(` no existe`);
//   }
// };

// const arrayOfName = (arr) => {
//   return arr.forEach((name) => {
//     findInfo(name);
//   });
// };

// console.log(arrayOfName(["Hulk", "Thor", "adler"]));

//! Enunciado Ejercicio 2:  saltado no me gusto
// Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
// crear una función que la simplifique

//Ejemplo:
//simplificarRuta("/home/");             // Salida: /home
//simplificarRuta("/x/./y/../../z/");    // Salida: /z
//simplificarRuta("/../");               // Salida: /
//simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas

//? enunciado para el ejercicio 3
//dados dos fechas , crea una funcion que me proporcione la diferencia de dias entre ellas

//Ejemplo : deferenciasDeDias('Dec 1, 2023', 'Dec 24,2023') salida : 23 dias

// const diffBetweenDate = (date1, date2) => {
//   const parsedDate1 = date1 instanceof Date ? date1 : new Date(date1);
//   const parsedDate2 = date2 instanceof Date ? date2 : new Date(date2);

//   const msDate = Math.abs(parsedDate1.getTime() - parsedDate2.getTime());

//   const diff = msDate / (1000 * 60 * 60 * 24);
//   return diff;
// };

// let result = diffBetweenDate("Dec 8, 2024", "Dec 23,2024");

// console.log(result);

// //? enunciado el ejercicio:

// Enunciado Ejercicio 4:
// Crea el juego del ahorcado.
// El usuario tendrá que ir adivinando y descubriendo las letras de una palabra
// secreta, y tendrá 5 intentos (un intento por extremidad del cuerpo humano).

// Utiliza el método de entrada de datos habitual de tu lenguaje,
// en el caso de JS, usaremos la función prompt.

// Ejemplo:
// juegoDelAhorcado('victor');

// Salida:
// Adivina la letra: i
// La palabra es: _i___
// Te quedan 5 intentos

const ahorcado = (palabraSecreta) => {
  let palabraOculta = "_".repeat(palabraSecreta.length);
  let intento = 5;
  while (intento > 0 && palabraOculta !== palabraSecreta) {
    let letra = prompt("adivina una letra");

    for (
      let contadorLetras = 0;
      contadorLetras < palabraSecreta.length;
      contadorLetras++
    ) {}
  }
};

document
  .querySelector(".btn")
  .addEventListener("click", () => ahorcado("adler"));

let result = ahorcado("adler");
