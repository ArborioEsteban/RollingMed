export class Usuario {
  constructor(nombre, apellido, fechaNacimiento, notas, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.notas = notas;
    this.codigo = Math.round(Math.random() * 1000);
    this.edad = this.calcularEdad(edad);
  }

  calcularEdad() {
    let today = new Date();
    let birthDate = new Date(this.fechaNacimiento);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  mostrarDatos() {
    alert(
      `Nombre: ${this.nombre},Apellido: ${this.apellido},Fecha de nacimiento: ${this.fechaNacimiento}, Edad: ${this.age}, Codigo: ${this.codigo}`
    );
  }
}
