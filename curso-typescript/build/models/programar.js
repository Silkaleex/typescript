"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Programar = void 0;
class Programar {
    constructor(titulo, description, completada, urgencia) {
        this.resumen = () => {
            return `Tarea de Programacion: ${this.titulo} - ${this.completada}`;
        };
        this.titulo = titulo;
        this.description = description;
        this.completada = completada;
        this.urgencia = urgencia;
    }
}
exports.Programar = Programar;
//# sourceMappingURL=programar.js.map