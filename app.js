// 1-variables
//tipos de datos
// existe dos tipos de datos
//  a) primitivos : string, boolean,number,undefined,null
//b) de referencia : array,object, functions, clases

// hay una section  de la memoria ram que no es extendible alli se guardan los tipos de datos primitivos se llama STACK Y el contrario es la memoria heap es extendible es donde van a guardar todos los tipos de datos de referencia

// function suma(a, b) {
//   console.log(arguments);
// }
// console.log(suma(5, 8));

// NB: RAM ========> Ramdom access memory

// CONTROL DE FLUJO : nos va poder permitir indicar al codigo que camino debe de tomar

// let i = 0;
// do  {
//   console.log(i);
//   i++;
// }while(i < 10)

// ?  ============> OBJECT=========>

// const user = {
//   name: "adler",
//   dirrecion: {
//     calle: "pasje san matias ",
//   },
//   activo: true,
//   recuperarClave: () => {
//     console.log("recuperando clave ...");
//   },
// };
// user.recuperarClave();

// ?=========> DINAMISMO (OBJECT)===========>

//en javascript los objetos son dinamicos es decir se puede agragar y quitarle propriedades y puede cambiar su valor en cualquier momento

// const user1 = {
//   id: 1,
// };

// Object.freeze(user1);

// user1.name = "adler";
// user1.guardar = () => {
//   console.log("Guardando ", user1.name);
// };
// user1.id = 5;
// user1.guardar();
// delete user1.name;
// delete user1.guardar;
//NB : para no permitir que se pueda modificar las propiedades d un objeto hay q congelarlo .freeze
// SEAL:  permite que las propiedades esten fijas que no pueden ni agregar ni quitar pero son modificables.

// ?=========> FACTORY FUNCTIONS (OBJECT)===========>

// Las factory functions nos permite crear [OBJETO] de manera efectiva y no repetitiva

// const createUser = (name, email) => {
//   return {
//     name,
//     email,
//     recuperar: () => {
//       console.log("recuperando clave ...");
//     },
//   };
// };

// const newUser = createUser("adler", "adler@gmail.com");

// console.log(newUser);

// ?=========> FUNCTION CONSCTRUCTORA (OBJECT) ===========>

// metodo es una funcion que fue asignada a una propiedad de un objeto

// la palabra reserva de NEW cuando usamos la palabra reservada de new ocurre 4 cosas:
// 1-crea un objeto literal del aire  {}
// 2- se vincula el prototipode de la funcion  con el objeto de se acaba de crear
// 3- el objeto que se acaba de crear se le asigna con la palabra this ( {}=this  )
// la funcion retorna automaaticamente this

// function User(name) {
//   this.name;
//   this.recuperarClave = () => {
//     console.log("recuperando clave ... ");
//   };
// }

// let usuario = new User("adler");

// console.log(usuario);

// ?=========> ATAJOS (OBJECT) ===========>
// todos los objetos que son creados en JS tienen una propiedad que se llama contructor
// esta propiedad nos indica con que constructor fue creado este objeto

let obj = {}; // este es un atajos que tiene JS para poder llamar al constructor de objetos
let obj2 = new Object(); //! es lo mismo pero nunca dberia usarlo para crear un objeto

// ?=========> FUNCIONES (OBJECT) ===========>
// las funciones son objetos en JS ya que

function Usuario(name) {
  this.name = name;
}

console.log(Usuario.name);
console.log(Usuario.length);
// 1- por que se las  pueden asignar una variable
let U = Usuario;

let user = new U("adler");
console.log(user);

// 2- se las pueden pasar como parametros a otra funcion
function of(Fn, arg) {
  return new Fn(arg);
}

let user1 = of(Usuario, "adler");
console.log(user1);

//3-se las pueden retornar por otra funciones

// function returned() {
//   return function () {
//     console.log("hola mundo dentro de otra funcion");
//   };
// }

// let r = returned();

// r();

// clo

// ?=========> METODO CALL (OBJECT) ===========>

// function Punto(x, y) {
//   (this.x = x),
//     (this.y = y),
//     (this.dibujar = function () {
//       console.log("dibujando");
//     });
// }

//let punto = { z: 7 }; // el objeto punto reemplaza this en la funcion de alli agregamos X , Y let punto ={z:7,x:1,y:2}
// nos sirve para extender objeto y tambien otras funciones

//Punto.call(punto, 1, 2);
//Punto.apply(punto, [1, 2]);

//console.log(punto);

// ?=========> VALOR Y REFERENCIA (OBJECT) ===========>

// los tipos de datos primitivos copian se copian y los de referencia se referencian

// PRIMITIVOS
// let a = 1;
// let b = a;
// b = 3; // seria lo mismo si lo aumentaria de 1 b se modificaria pero a no

//OBJETO
// let c = {};
// let d = c;

// d.prop = 1;

// let e = 1;
// function num(n) {
//   return n++;
// }

// let e1 = { prop: 1 };
// function num(n) {
//   return n.prop++;
// }

//console.log(num(e1)); //aqui no se aumenta el valor de 1 por la funcion considera el parametro n y la varaible e como dos variable diferente ya que JS siempre va crear un variable especial para cada parametro

//console.log(e1);

// console.log(a, b);
// console.log(c, d);

// ?=========> LISTA PROPIEDADES (OBJECT) ===========>
//cuando un constructor de JS tiene metodo ,se le llama metodo de clase ej:Object es un constructor y el metodo de entries ,key,values(metodo estatico).

//       const punto = {
//         x: 10,
//   y: 15,
//   dibujar: () => {
//     return "dibujando...";
//   },
// };

//delete punto.dibujar;

// if ("dibujar" in punto) {
//   punto.dibujar();
// }

// for (let llave of Object.keys(punto)) {
//   console.log(llave, punto[llave]);
// }

// for (let llave in punto) {
//   console.log(llave, punto[llave]);
// }

// for (let llave of Object.entries(punto)) {
//   console.log(llave, punto[llave]);
// }

// ?=========> CLONAR OBJETOS (OBJECT) ===========>
// let punto2 = {
//   x: 1,
//   y: 3,
// };

// let referencia = Object.assign({}, punto2, { z: 6 });
// let clonarunto2 = Object.assign({}, punto2);
// let otherWayToClone = { ...punto2 };

// console.log(
//   "punto2 :",
//   punto2,
//   "clone :",
//   clonarunto2,
//   "referencia: ",
//   referencia,
//   "otherWayToClone: ",
//   otherWayToClone
// );

//   =========> PRIVATE-PUBLIC (OBJECT) ===========>

// function Usuario() {
//   this.name = "adler";
//   let log = () => {
//     console.log("loggeando ...");
//   };
//   this.guardar = () => {
//         log();
//     console.log("guardando ...");
//   };
// }

// let usuario = new Usuario();

// usuario.log = () => {
//   console.log("lale");
// };
// usuario.guardar();

//   =========> DATE (OBJECT) ===========>
// const ahorra = new Date();
// console.log(ahorra);

//   =========> EJERCICIOS ===========>
// function UsuarioN(name) {
//   this.id = Math.random();
//   this.name = name;
// }

// let usuario = new UsuarioN("adler");
// let usuario1 = new UsuarioN("Steeve");
// console.log(usuario, usuario1);

// function usuarioN(name) {
//   return {
//     id: Math.random(),
//     name: name,
//   };
// }

// let u = usuarioN("adler");
// let u1 = usuarioN("Steeve");
// console.log(u, u1);

//   =========> AGREGAR,ELIMINAR (ARRAYS) ===========>

// metodos para agregar alementos,eliminar el comienzo y al final

//const letras = ["a", "b", "d", "e"];
// letras.push("c"); // agregar al final
// letras.unshift("f");//agregar al inicio
// letras.shift(); // eliminar al inicio
// letras.pop();// eliminar al final
// letras.splice(1, 1, "i");
// console.log(letras);

//   =========> BUSCAR PRIMITIVOS (ARRAYS) ===========>

const letras = ["a", "b", "d", "e", "b"];

console.log(letras.indexOf("b"));
console.log(letras.lastIndexOf("b"));
console.log(letras.lastIndexOf("v"));
console.log(letras.includes("e"));
console.log(letras.includes("v"));
console.log(letras.indexOf("b") !== -1);

//   =========> FAT ARROWS FUNCTIONS (ARRAYS) ===========>
// Todas las arrows functions son anonimas

//   =========> BUSCAR POR REFERENCIA (ARRAYS) ===========>
//Predicated es una funcion que devuelve un Boolean
//console.log(`${nombre}`);
