const nombrePaciente = document.getElementById("listaPacientes");
const selectMedicos = document.getElementById("listaMedicos");
const dia = document.getElementById("diaTurno");
const horario = document.getElementById("appt-time");
const buttonCargar = document.getElementById("buttonCargar");

export const cargarDatosEnFormulario = (codigo) => {
  const contactos = JSON.parse(localStorage.getItem("turnos"));

  const turnoAModificar = contactos.find((elemento) => {
    return elemento.codigo === codigo;
  });
  nombrePaciente.value = turnoAModificar.paciente;
  selectMedicos.value = turnoAModificar.medico;
  dia.value = turnoAModificar.fecha;
  horario.value = turnoAModificar.hora;

  buttonCargar.innerText = "Editar";

  sessionStorage.setItem("codigoEdicion", codigo);
  selectMedicos.classList = "form-control is-valid";
  nombrePaciente.classList = "form-control is-valid";

  
};
