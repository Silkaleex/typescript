"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
class Estudiante {
    //constructor
    constructor(nombre, cursos, apellidos) {
        //Propiedades de clase
        this.nombre = "Anonimo";
        this.ID = "12345";
        //Iniciamos las propiedades
        this.nombre = nombre;
        //son lo mismo podemos usar una o otra
        this.apellidos = apellidos ? apellidos : undefined;
        if (apellidos) {
            this.apellidos = apellidos;
        }
        this.cursos = cursos;
    }
    get horasEstudiadas() {
        let horasEstudiadas = 0;
        this.cursos.forEach((curso) => {
            horasEstudiadas += curso.horas;
        });
        return horasEstudiadas;
    }
    set Id_Estudiante(id) {
        this.ID = id;
    }
}
exports.Estudiante = Estudiante;
//# sourceMappingURL=Estudiante.js.map