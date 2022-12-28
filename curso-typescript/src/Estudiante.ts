import { Curso } from "./models/Curso";

export class Estudiante {
  //Propiedades de clase
  nombre: string = "Anonimo";
  apellidos?: string; //? es opcional
  cursos!: Curso[];

  private ID: string = "12345";

  //constructor
  constructor(nombre: string, cursos: Curso[], apellidos?: string) {
    //Iniciamos las propiedades
    this.nombre = nombre;
    //son lo mismo podemos usar una o otra
    this.apellidos = apellidos ? apellidos : undefined;
    if (apellidos) {
      this.apellidos = apellidos;
    }
    this.cursos = cursos;
  }
  get horasEstudiadas(): number {
    let horasEstudiadas = 0;
    this.cursos.forEach((curso: Curso) => {
      horasEstudiadas += curso.horas;
    });
    return horasEstudiadas;
  }
  set Id_Estudiante(id: string) {
    this.ID = id;
  }
}
