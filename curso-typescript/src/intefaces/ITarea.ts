export enum Nivel {
  "Informativa",
  "urgente",
  "Bloqueante",
}
//Interface que define la firma de los puntos que se necesita para implementar para quien lo use
export interface ITarea {
  titulo: string;
  description: string;
  completada: boolean;
  urgencia?: Nivel;
  resumen: () => string;
}
