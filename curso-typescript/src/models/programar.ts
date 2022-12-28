import { ITarea, Nivel } from "../intefaces/ITarea";

export class Programar implements ITarea {
  titulo: string;
  description: string;
  completada: boolean;
  urgencia?: Nivel | undefined;
  constructor(
    titulo: string,
    description: string,
    completada: boolean,
    urgencia: Nivel
  ) {
    this.titulo = titulo;
    this.description = description;
    this.completada = completada;
    this.urgencia = urgencia;
  }
  resumen = (): string => {
    return `Tarea de Programacion: ${this.titulo} - ${this.completada}`;
  };
}
