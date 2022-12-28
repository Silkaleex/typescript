// eslint-disable-next-line prefer-const
console.log("Hello World");

// eslint-disable-next-line prefer-const
let lista = ["Uno", "dos", "tres"];

// eslint-disable-next-line prefer-const
lista.forEach((_) => {
  console.log();
});

const nombre = "Alejandro";

console.log(`Hola soy ${nombre}`);

console.clear();

// eslint-disable-next-line spaced-comment
//Console Asert
var a: number = 100;
console.assert(a === 1000, "Mensaje", `otro mensaje: ${a}`);

// eslint-disable-next-line spaced-comment
//console Count
// eslint-disable-next-line no-unused-vars
function contador(texto: string) {
  console.count(texto);
}

contador("Hola"); //1
contador("Adios"); //1

contador("Hola"); //2

console.countReset(); //Reinicia el contador

//Console.win o Error
console.info("Texto Informativo");
console.error("Texto Error");
console.warn("Texto de aviso");

//Console Trace
function a() {
  b();
}
function b() {
  c();
}
function c() {
  console.trace(); //Trazara por donde se ira a ejecutar a donde llegara ese punto
}

a();
//Iniciaria el c por consola

//Console Dir --->
let coche = {
  nombre: "mercedes",
  matricula: "1234567890",
  especificaciones: [
    {
      motor: "a40",
      potencia: "300CV",
    },
  ],
};

console.dir(coche);

// Console Table

console.table(coche);

// Contabilizar el tiempo de ejecucion
// eslint-disable-next-line no-unused-vars
function espera() {
  for (let index = 0; index < 1000; index++) {
    /// ...
  }
}

console.time("Prueba"); // inicia cronometro
espera();
console.timeEnd("Prueba"); //termina y contabiliza el tiempo que ha transcurrido

//Agrupaciones

console.group();
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.groupEnd();
