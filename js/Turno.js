export class Turno {
    constructor(paciente,medico,fecha,hora) {
      this.paciente = paciente;
      this.medico = medico;
      this.fecha = fecha;
      this.hora = hora;
      this.codigo = Math.floor(Math.random() * 1000);
    }
  }

