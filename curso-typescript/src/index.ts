import { AsyncLocalStorage } from "async_hooks";
import { type } from "os";
import {
  deleteAllCookies,
  deleteCookie,
  getCookieValue,
  setCookie,
} from "cookies-utils";
import { Curso } from "./models/Curso";
import { Estudiante } from "./Estudiante";
import { LISTACURSOS } from "./mock/cursos.mock";
import { Trabajador, Jefe } from "./models/persona";
import { ITarea, Nivel } from "./intefaces/ITarea";
import { Programar } from "./models/programar";
import { Writable } from "stream";

console.log("Hello World!");
console.log("Hello Silkaleex =)");

//Comentario En TS
/** *Comentario multilinea */

/*Declaracion de Variables en Typescript: */

var nombre: string = "Alejandro";
let email = "alejandro@gmail.com"; //Variable de ambito local

console.log("Hola" + nombre);
console.log("¿Que tal", nombre, "?");
console.log("¿Como han ido las vacaciones,${nombre}?");

console.log(`El email de ${nombre} es ${email}`);

var perro = "Richi";

console.log("Hola" + perro);

const PI: number = 3.1416;

var apellidos: any = "Pascual"; //Tipo any hace que la variablee pueda cambiar de tipo
apellidos = 1;

var error: boolean;
error = false;
console.log(`¿Hay error?:${error}`);

let a: string, b: boolean, c: number; //intancia 3 variables sin valor incial
a = "Typescript";
b = true;
c = 6.9;

//BuiltIN Types: Number,String,Boolean,Void,null y Undefined

//Tipos de valores mas complejos que los primitivos
//Lista de cadenas de texto
let listaTareas = ["Tarea 1", "Tarea 2"];
//Combinacion de tipos en listas
let valores: (string | number | boolean)[] = [false, "hola", true, 39];
//Enumerados

enum Estados {
  "completado" = "C",
  "incompleto" = "I",
  "pendiente" = "P",
}

enum PuestoCarrera {
  "Primero" = 1,
  "segundo",
  "tercero",
}

let estadoTarea: Estados = Estados.completado;
let puestoMaraton: PuestoCarrera = PuestoCarrera.segundo;

//Interfaces
interface Tarea {
  nombre: string;
  estado: Estados;
  urgencia: number;
}

//podemos crear variables que puedan segir la inteface de Tarea

let tarea1: Tarea = {
  nombre: "Tarea 1",
  estado: Estados.pendiente,
  urgencia: 10,
};
console.log(`Tarea:${tarea1.nombre}`);

//Types de Typescript
type Producto = {
  precio: number;
  nombre: string;
  anio: number;
};

let coche: Producto = {
  nombre: "mercedes",
  precio: 23000,
  anio: 2000,
};
//Asignación multiples variables
let miTarea = {
  titulo: "Mi tarea",
  estado: Estados.completado,
  urgencia: 1,
};
//Declaracion 1 a 1
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miUrgencia = miTarea.urgencia;

//**Factor Spread(Propagacion) */
//Declaracion con factor de propagacion
//Asignando variables
let { titulo, estado, urgencia } = miTarea;

//En listas
let listaCompraLunes: string[] = ["zanahorias", "Pimientos"];
let listaCompraMartes: string[] = [...listaCompraLunes, "leche", "carne"];
let listaCompraMiercoles: string[] = ["pescado", "fruta"];
let listaCompraSemana = [...listaCompraLunes, ...listaCompraMiercoles];
//En Objetos
let estadoApp = {
  ususario: "Admin",
  session: 3,
  jwt: "users12345",
};
//Cambio de valores de propagación
let nuevoEstado = {
  ...estadoApp,
  session: 4,
};

//**Condicionales: */

//Operador ternario
console.log(
  coche.anio < 2000
    ? `coche:${coche.nombre} es viejo`
    : `coche:${coche.nombre} es nuevo`
);

//If - else

if (error) {
  console.log("Hay un error");
} else {
  console.log("Correcto!");
}
//if-elseif-else
if (coche.anio < 2000) {
  console.log(`coche:${coche.nombre} es viejo`);
} else if (coche.anio === 2000) {
  console.log(`coche:${coche.nombre} es del 2000`);
} else {
  `Coche.${coche.nombre} es nuevo`;
}

//Switch
switch (tarea1.estado) {
  case Estados.completado:
    console.log("La tarea esta completada");
    break;
  case Estados.incompleto:
    console.log("la tarea no esta completa");
  case Estados.pendiente:
    console.log("La tarea esta pendiente de revisarse");
  default:
    break;
}

//Bucles
let listaTareasNueva: Tarea[] = [
  { nombre: "Tarea1", estado: Estados.completado, urgencia: 2 },
  { nombre: "Tarea2", estado: Estados.pendiente, urgencia: 0 },
  { nombre: "Tarea1", estado: Estados.incompleto, urgencia: 15 },
];

//For Clásico
for (let index = 0; index < listaTareasNueva.length; index++) {
  const tarea = listaTareasNueva[index];
  console.log(`${index} - ${tarea.nombre}`);
}

//Foreach
listaTareasNueva.forEach((tarea: Tarea, index: number) => {
  console.log(`${index}-${tarea.nombre}`);
});

//Bucles While
while (tarea1.estado !== Estados.completado) {
  if (tarea1.urgencia == 20) {
    tarea1.estado = Estados.completado;
    break;
  } else {
    tarea1.urgencia++;
  }
}
//Do-while
do {
  tarea1.urgencia++;
  tarea1.estado = Estados.completado;
} while (tarea1.estado !== Estados.completado);

//Funciones en TS
//Dentro de la function no se puede acceder desde fuera
function saludo() {
  console.log("Hello World!");

  let nombre = "Alejandro";
  console.log(`Hola, ${nombre}`);
}
//Invocamos la funcion
saludo();
/*Function que muestra un saludo por consola a una persona*/
/*@param nombre Nombre de la persona saludo */
function saludoPersona(nombre: string) {
  console.log(`Hola,${nombre}!`);
}

saludoPersona("Alejandro");
/*
 *Function que muestra un Adiós por consola a una persona
 *@param nombre de la persona a depedirPersona,por defecto sera Pepe
 */
function despedirpersona(nombre: string = "Pepe") {
  console.log(`¡Adiós,${nombre}!`);
}

despedirpersona(); //Adios Pepe
despedirpersona("Alba"); //Adios, Alba

//? es Opcional
/** @param nombre(opcional) Nombre de la persona a depedidaOPcional*/
function despedidaOpcional(nombre?: string) {
  if (nombre) {
    console.log(`¡Adiós,${nombre}`);
  } else {
    console.log(`¡Adiós!`);
  }
}

despedidaOpcional(); //¡Adiós!
despedidaOpcional("Juan"); //¡Adios Juan!

function variosParams(nombre: string, apellidos?: string, edad: number = 18) {
  if (apellidos) {
    console.log(`${nombre},${apellidos} tiene ${edad} años`);
  } else {
    console.log(`${nombre} tiene ${edad} años`);
  }
}

variosParams("Alejandro"); //Alejandro tiene 18 años
variosParams("Alejandro", "Pascual"); //Alejandro Pascual tiene 18 años
variosParams("Alejandro", "Pascual", 27); //Alejandro Pascual tiene 27 años
variosParams("Alejandro", undefined, 27); //Alejandro tiene 27 años

variosParams((nombre = "Alejandro"), (apellidos = "Pascual")); //Alejandro Pascual tiene 27años

function ejemploVariosTipos(a: string | number) {
  if (typeof a === "string") {
    console.log("A es un string");
  } else if (typeof a === "number") {
    console.log("A no es un number");
  } else {
    console.log("A no es un string ni un number");
    throw Error("A no es un string ni un number");
  }
}
ejemploVariosTipos("hola");
ejemploVariosTipos(3);
/**@param nombre Nombre de la persona
 * @param apellidos Apellidos de la persona
 * @returns Nombre completo de la persona
 */
function ejemploReturn(nombre: string, apellidos: string): string | number {
  return `${nombre}, ${apellidos}`;
}

const nombreCompleto = ejemploReturn("Alejandro", "Pascual");
console.log(nombreCompleto);
console.log(ejemploReturn("Alejandro", "Pascual")); //Alejandro Pascual

/**@params nombres es una lista de nombres de string */
function multiparams(...nombres: string[]): void {
  nombres.forEach((nombre) => {
    console.log(nombre);
  });
}
multiparams("Alejandro", "Facundo", "Fernando", "Belen");

const lista = ["Raquel", "Monica"];
multiparams(...lista);

function ejemploParamLista(nombres: string[]) {
  nombres.forEach((nombre) => {
    console.log(nombre);
  });
}

ejemploParamLista(lista);

//Arrow Functions

type Empleado = {
  nombre: string;
  apellidos: string;
  edad: number;
};
let empleado: Empleado = {
  nombre: "Alejandro",
  apellidos: "Pascual",
  edad: 27,
};

const mostrarEmpleado = (empleado: Empleado): string =>
  `${empleado.nombre} tiene ${empleado.edad} años`;
//Llamamos a la función
mostrarEmpleado(empleado);

const datosEmpleado = (empleado: Empleado): string => {
  if (empleado.edad > 70) {
    return `Empleado ${empleado.nombre} esta en edad de jubilacion`;
  } else {
    return `Empleado ${empleado.nombre} esta en edad laboral`;
  }
};
datosEmpleado(empleado); //Empleado Alejandro esta en edad laboral

const obtenerSalario = (empleado: Empleado, cobrar: () => void) => {
  if (empleado.edad > 70) {
    return;
  } else {
    cobrar(); //callback a ejecutar
  }
};
const cobrarEmpleado = (empleado: Empleado) => {
  console.log(`${empleado.nombre} Cobra su salario`);
};
obtenerSalario(empleado, () => "Cobrar Alejandro");

//Async Function
async function ejemploAsync(): Promise<string> {
  await console.log(
    "tarea a completar antes de seguir con la secuencia de instrucciones"
  );
  console.log("Tarea Completada");
  return "completado";
}

ejemploAsync()
  .then((respuesta) => {
    console.log("Respuesta", respuesta);
  })
  .catch((error) => {
    console.log("Ha habido un error", error);
  })
  .finally(() => "Todo a Terminado");

// //Funciones generatdoras(Generators)
// function ejemploGenerator() {
//   //yield ==> Emite Valores

//   let index = 0;
//   while (index > 5) {
//     //Emitimos un valor incrementado
//     yield index++;
//   }
// }

// //Guardamos la funcion generadora en una variable
// let generadora = ejemploGenerator();

// //Acceder a los valores emitidos

// console.log(generadora.next().value); //0
// console.log(generadora.next().value); //1
// console.log(generadora.next().value); //2
// console.log(generadora.next().value); //0

//Worker

function* watcher(valor: number) {
  yield valor; //emitimos el valor inicial
  yield* worker(valor); //Llamamos a las emisiones del worker para que no emita otros valores
  yield valor + 4; //emitimos el valor final + 4
}

function* worker(valor: number) {
  yield valor + 1;
  yield valor + 2;
  yield valor + 3;
}
let generatorSaga = watcher(0);

console.log(generatorSaga.next().value); //0(Lo hace el watcher)
console.log(generatorSaga.next().value); //1(Lo hace el worker)
console.log(generatorSaga.next().value); //2(Lo hace el worker)
console.log(generatorSaga.next().value); //3(Lo hace el worker)
console.log(generatorSaga.next().value); //4(Lo hace el watcher)

//sobrecarga de funciones

function mostrarError(error: string | number): void {
  console.log("Hay un error:", error);
}

//Persistencia de datos
//1:LocalStorage --> Almacena los datos en el navegador (No se eliminan automaticamente)
//2:SessionStorage-->La diferencia radica en la sesion de navegador.Es decir,los datos se persisten en la sesion del navegado
//3:Cookies--->Tienen fecha de caducidad y tienen un ambito de URl

//LocalStorage
// function guardar(): void {
//   localStorage.set("nombre", "Alejandro");
//   sessionStorage.set("nombre", "Alejandro");
// }

// function leer(): void {
//   let nombre = localStorage.get("nombre");
//   let nombreSession = sessionStorage.get("nombre");
// }

// function borrarItem(item:string){
//   localStorage.removeItem(item)
//   sessionStorage.removeItem(item)
// }

// function borrarTodas():void{
//   localStorage.clear();
//   sessionStorage.clear()
// }
//Cookies
const cookieOptions = {
  name: "usuario", // string,
  value: "Alejandro", // string,
  maxAge: 10 * 60, // optional number (value in seconds),
  expires: new Date(2099, 10, 1), // optional Date,
  path: "/", // optional string,
};
//Seteamos la Cookie

setCookie(cookieOptions);

//Eliminar Cookie
deleteCookie("usuario");

//Eliminar todas las cookies
deleteAllCookies();

//leer una Cokie
let cookieLeida = getCookieValue("usuario");

//Clase Temporizador

class Temporizador {
  public terminar?: (tiempo: number) => void;

  public empezar(): void {
    setTimeout(() => {
      //Comprobar que exisa la funcion terminar como callback
      if (!this.terminar) return;
      //Cuando haya pasado el tiempo se ejecute la funcion terminar
      this.terminar(Date.now());
    }, 10000);
  }
}
const miTemporizador: Temporizador = new Temporizador();

//Definimos la funcion del calback a ejecutar cuando termine el tiempo

miTemporizador.terminar = (tiempo: number) => {
  console.log("Evento ha finalizado:", tiempo);
};

//Lanzamos el temporizador
miTemporizador.empezar(); //Se inicia el timeout y cuando termine, se ejecuta la funcioin terminar()

setInterval(() => console.log("Tic"), 1000); ///Imprimir "tic" cada segundo por consola

//Elimina la ejecucion de la funcion
delete miTemporizador.terminar;

//Dom con eventos
// document.getElementById("boton-login").addEventListener("click", () => {
//   console.log("Has echo click en login");
// });
///ESTAS CLASES ESTAN IMPORTADAS EN ESTUDIANTE Y CURSO .TS

//Creamos Curso
// const cursoEnTs: Curso = new Curso("Typescript", 15);
// const cursoEnJs: Curso = new Curso("Javascript", 20);

//Usamos el Mock que son com un Fake Data
const listaCursos: Curso[] = LISTACURSOS;
// listaCursos.push(cursoEnTs, cursoEnJs); //[Datos en la lista de Curso]

//Crear un estudiante
const Alejandro: Estudiante = new Estudiante(
  "Alejandro",
  listaCursos,
  "Pascual"
);

console.log(`${Alejandro.nombre}Estudia:`);
//Iteramos por cada uno de ellos
Alejandro.cursos.forEach((Curso) => {
  console.log(`- ${Curso.nombre}  (${Curso.horas} horas)`);
}); //Typescript (15 horas)
const cursoAngular: Curso = new Curso("Angular", 40);
Alejandro.cursos.push(cursoAngular); //Añadimos

//Conocer horas estudiadas;//number
Alejandro.horasEstudiadas; //number
Alejandro.Id_Estudiante;

//Saber instancia de un objeto o una variable
//TypeOf
//InstanceOf

let texto = new String("Hola");

let fehcaNacimiento = new Date(1995, 30, 1);

if (fehcaNacimiento instanceof Date) {
  console.log("Es una instancia de Date");
}
if (Alejandro instanceof Estudiante) {
  console.log("Alejandro Es un estudiante");
}

//Herencia y Polimorfismo

let trabajador1 = new Trabajador("Alejandro", "Pascual", 27, 2000);
let trabajador2 = new Trabajador("Lucia", "Gomez", 40, 1500);
let trabajador3 = new Trabajador("Pedro", "Perez", 18, 5000);

// empleado1.saludar();

let jefe = new Jefe("Alfredo", "rodriguez", 55);

jefe.trabajadores.push(trabajador1, trabajador2, trabajador3);

trabajador1.saludar(); //uso especificado en empleado
jefe.saludar(); //Herencia de Persona

jefe.trabajadores.forEach((trabajador: Trabajador) => {
  trabajador.saludar(); //Especifica el trabajador
});

//Uso de Interfaces
let programar: ITarea = {
  titulo: "Programar en Typescript",
  description: "Aprendiendo Katas para desarrollar TS",
  completada: false,
  urgencia: Nivel.urgente,
  resumen: function (): string {
    return `${this.titulo} - ${this.completada} - Nivel:${this.urgencia}`;
  },
};

console.log(programar.resumen());

//Tarea de programacion(implementa ITarea)

let ProgramarTS = new Programar(
  "Typescript",
  "Tarea de Programación en TS",
  false,
  Nivel.Bloqueante
);
console.log(ProgramarTS.resumen());

//Decoradores Experimentales ---> @
// - Clases
// - Parametros
// - Metodos
// - Propiedades

// @Components{
//   //configuraciones
// }class Botton{

// }

/* */

// function Override(label: string) {
//   return function (target: any, key: string) {
//     Object.defineProperty(target, key, {
//       configurable: false,
//       get: () => label,
//     });
//   };
// }

// class PuebaDecorador {
//   @Override("Prueba") //LLamar a ala funcion Override
//   nombre: string = "Alejandro";
// }

// let prueba = new PuebaDecorador();

// console.log(prueba.nombre); //"Prueba siempre se devolvera a traves del get"

// //Otra FUncion para usarla como decorador
// function sololectura(target: any, key: string) {
//   Object.defineProperty(target, key, {
//     writable: false,
//   });
// }

// class pruebaSoloLectura {
//   @sololectura
//   nombre: string = "";
// }

// let pruebaLectura = new pruebaSoloLectura();
// pruebaLectura.nombre = "Alejandro";

// console.log(pruebaLectura.nombre); // Undefined, no se le puede dar un valor, es solo de lectura

// //Decorador de parametros de un argumento
// function mostrarPosicion(
//   target: any,
//   propertykey: string,
//   parameterIndex: number
// ) {
//   console.log("Posicion", parameterIndex);
// }

// class pruebaMetodoDecorador {
//   prueba(a: string, @mostrarPosicion b: boolean) {
//     console.log(b);
//   }
// }

// //usamos el método con el parametro y su decorador
// let pruebaDecoradorEnParam = new pruebaMetodoDecorador().prueba("Hola", false);
