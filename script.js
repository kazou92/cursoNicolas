// const datos = [{
//     nombre:"adler",
//     apellido:"sejousnat",
//     pais:"haiti"
// }]

// const getDatos = ()=>{
//   return new Promise((resolve, reject) => {
//     if(datos.length ===0){
//         reject("datos no tiene contenido")
//     }
//     setTimeout(() => {
//         resolve(datos)

//     }, 3000);
//   })
// }

// const getAllDates = async()=>{
//     const show=await getDatos()
//    return show

// }

// getAllDates()
// .then(res => console.log(res))
// .catch(error =>console.log(error))

// fetch("http://localhost:3000/api/v1/users")
//   .then((res) => res.json())
//   .then((users) => {
//     console.log(users);
//     const userList = document.getElementById("user-list");
//     console.log(userList);
//     const data = users.response;
//     data.forEach((user) => {
//       const li = document.createElement("li");
//       li.textContent = `${user.nombre} - ${user.apellido}- ${user.rol} -${user.pais} `; // Suponiendo que tienes campos 'name' y 'email'
//       userList.appendChild(li);
//     });
//   })
//   .catch((error) => {
//     console.error("Error al obtener usuarios:", error);
//   });

// fetch('http://localhost:3000/users')
//     .then(res => res.json())
//     .then(data => {
//         if (!data || !Array.isArray(data.response)) {
//             throw new Error('Los datos recibidos no son válidos.');
//         }
//         const users = data.response; // Obtener el array de usuarios de la propiedad 'response'
//         const userList = document.getElementById('user-list');
//         users.forEach(user => {
//             const li = document.createElement('li');
//             li.textContent = `${user.nombre} ${user.apellido} - ${user.pais} - ${user.rol}`;
//             userList.appendChild(li);
//         });
//     })
//     .catch(error => {
//         console.error('Error al obtener usuarios:', error);
//     });

//adlconst arr = [3, 6, 5, 3]

//adelete arr[0]

//console.log(arr)

// let nombre = ["adler", "sejousnat", "dodo"];
// let str = ["h", "o", "l", "a"];

// let nuevoNombre = [...nombre, "steeve"];

// console.log(...str  );

// function runCode() {
//   return new Promise((solve) => {
//     return setTimeout(() => {
//       return solve("Hello, Word");
//     }, 5000);
//   }).then((res) => console.log(res));
// Tu código aquí 👈

// Recuerda si usas setTimeout debes usarlo ejecutando window
// Ejemplo window.setTimeout(...)
// }
// runCode();

// export function runCode() {
//     return new Promise((solve) => {
//       window.setTimeout(() => {
//          solve("Hello, Word");
//       },2000);
//     });
// Tu código aquí 👈
// Recuerda si usas setTimeout debes usarlo ejecutando window     // Ejemplo window.setTimeout(...)
//   }

//funtion geneerativa

// function* showEmoji() {
//   let arr = ["😍", "❤", "😂"];

//   for (let i = 0; i < arr.length; i++)
//     yield arr[i];
//   }
// }

// let geneerativa = showEmoji();
//showEmoji();

//console.log(geneerativa.next());
// console.log(geneerativa.next());
// console.log(geneerativa.next());
// console.log(geneerativa.next());
// console.log(geneerativa.next());

//console.log(1 - "1");

// const ob = {
//   name: "adler",
//   age: 33,
//   pais: "haiti",
// };

// const verifyProperty = (obj, prop) => {
//   return prop in obj;
// };

// const result = verifyProperty(ob, "name");
// const result1 = verifyProperty(ob, "apellido");

// console.log(result);
// console.log(result1);

// const path = require("path");

// console.log("nueva ruta", path.join(__dirname, "app.js"));

//console.log(__dirname);

//console.log(globalThis)

// const arr = ["adler", "sejousnat", "vivi", "vilain"];

// let buscar = prompt("ingrese un nombre");

// if (arr.includes(buscar)) {
//   console.log(`el nombre ${buscar} si exite`);
// } else {
//   console.log(` lo siento el nombre ${buscar} no existe`);
// }

//class Animales {
// constructor(color, raza, especie) {
// this.color = color;
//  this.raza = raza;
// this.especie = especie;
//this.frase = `mi nombre ${especie},soy de color ${color} y soy de raza ${raza}`;
// }
//}
//let animales = new Animales("azul", "pastor aleman", "perro");

// class Perro extends Animales {
//   constructor(color, raza, especie, age) {
//     super(color, raza, especie, age);
//     this.color = color;
//     this.raza = raza;
//     this.especie = especie;
//     this.age = age;
//   }
//   ladrar() {
//     if (this.especie !== "perro") {
//       console.log(`no puedes ladrar por que eres un ${this.especie}`);
//     } else {
//       console.log("waaaw!!!!");
//     }
//   }
// }
// let perro = new Perro("azul", "pastor aleman", "gato");

// console.log(perro.ladrar());

// if (Storage !== undefined) {
//   console.log("localStorage existe");
// }

// localStorage.setItem("titulo", "anade peliculas");
// const classOne = (document.querySelector(".classOne").innerHTML =
//   localStorage.getItem("titulo"));
// console.log(classOne);

// const form = document.querySelector(".form");
// const ul = document.querySelector(".list");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let titulo = document.querySelector(".input").value;
//   if (typeof titulo === "string" && titulo.length) {
//     localStorage.setItem(titulo, titulo);
//   }
//   console.log(titulo);
// });

// for (let i in localStorage) {
//   //console.log(localStorage[i]);
//   if (typeof localStorage[i] === "string" && localStorage[i].length) {
//     let li = document.createElement("li");
//     li.append(localStorage[i]);
//     ul.append(li);
//   }
// }
// localStorage.clear();

// const off = document.querySelector(".off");

// const lamp = document.querySelector(".lamp_btn");

// console.log(lamp);
// lamp.forEach((x) => {
//   x.addEventListener("click", () => {
//     off.classList.toggle("on");
//     if (x.innerHTML == "💡") {
//       x.innerHTML = "🔦";
//     } else {
//       x.innerHTML = "💡";
//     }
//   });
// });

// //console.error(new Error("ha occurido un error"));

// const arr1 = ["1", "5", "1"].map((numeros, index, number) =>
//   parseInt(numeros * 2)
// );
// const arr2 = ["1", "1", "1"].map(parseInt);

// //console.log(arr2);
// const arr3 = [5, 8, 6, 7];

// const arrArticle = [
//   {
//     nombre: "pantalo",
//     precio: 25,
//     cantidad: 205,
//   },
//   {
//     nombre: "camisa",
//     precio: 26,
//     cantidad: 258,
//   },
// ];

//IIFE ======> immeddiately invocked function expression
// const saludar = ((nombre) => {
//   console.log(`HOLA ${nombre}`);
// })("adler");

// function closure(dato) {
//   return (y) => dato * y;
// }

// const six = closure(6);

// const returnFunction = six(5);

// console.log(returnFunction);

// let obj = {
//   id: 5,
//   name: "adler",
//   apellido: "sejousnat",
// };

// for (let o of Object.entries(obj)) {
//   console.log(o);
// }
// let str = "adler";
// let array = [];

// function User() {
//   this.name = "hola mundo";
//   this.logger = function () {
//     console.log("loggeando");
//     this.login();
//   };
// }

// User.prototype.login = function () {
//   console.log("iniciado session", this.name);
//   //this.logger();
// };

// const user1 = new User();
// const user2 = new User();

//console.log(user1.login() === user2.login());
//console.log(user1.login());

// function getName() {
//   console.log(`mi nombre es : ${this.nick} `);
// }
// global.nick = " adler";

// getName();

// const persona = {
//   nick: "dodo",
//   getName: getName,
// };

// persona.getName();

//const fs = require("node:fs");

// const { promisify } = require("node:util").promisify();
// const reader = promisify(fs.readFile);

// reader("cursoNicolas/archivo1.txt", "utf8")
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

// function capitalizeFirstLetter(name) {
//   if (typeof name !== "string" || name.length === 0) {
//     return "";
//   }
//   return name.charAt(0).toUpperCase() + name.slice(1);
//}

//console.log(capitalizeFirstLetter("adler sejousnat")); // Output: Juan

// let nombre = "adler";
// let result = nombre.charAt(0).toUpperCase() + nombre.slice(1);

// console.log(result);

// const fs = require("node:fs");

// fs.readdir("./", (err, dir) => {
//   if (!err) {
//     dir.forEach((el) => {
//       console.log(el);
//     });
//   } else {
//     throw new Error("there is no file to read");
//   }
// });

// const arr = ["🍕", "🍕", "🍔", "🥓", "🌭"];

// let obj1 = {};
// for (let i = 0; i < arr.length; i++) {
//   if (obj1[arr[i]]) {
//     obj1[arr[i]]++;
//   } else {
//     obj1[arr[i]] = 1;
//   }
// }

// let result = obj1;
// console.log(result);

// const numero = parseInt(prompt("ingresar un numero", 0));
// function fizBooz(num) {
//   if (num % 3 === 0 && num % 4 === 0) {
//     return `${num} es un numero par,es divisible por 4 y 3  `;
//   } else if (num % 2 === 0 && num % 4 === 0) {
//     return `${num} es par y divible por 4`;
//   } else if (num % 2 !== 0 && num % 3 === 0) {
//     return `${num} es impar  y divible por 3`;
//   } else if (num % 2 !== 0) {
//     return `${num} es impar`;
//   }
// }

// console.log(fizBooz(numero));
const lista = {
  nombre: "adler",
  apellido: "sejousnat",
  pais: "haiti",
};

const property = (obj, prop) => {
  return prop in obj;
};

console.log(property(lista, "nombre"));
