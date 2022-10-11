import { Turno } from "./Turno.js";

let paciente = "";
let medico = "";
let fechaT = "";
let horaT = "";

let turnosArray = [];

// Cargar  tres Medicos a la lista desplegable
const selectMedicos = document.getElementById("listaMedicos");

const optionDefault = document.createElement("option");
const medico1 = document.createElement("option");
const medico2 = document.createElement("option");
const medico3 = document.createElement("option");

optionDefault.value = 1;
optionDefault.innerText = "Seleccione un Profesional";
medico1.value = "Dr.Strange";
medico1.innerText = "Dr.Strange";

medico2.value = "Dr.Who";
medico2.innerText = "Dr.Who";

medico3.value = "Dr.House";
medico3.innerText = "Dr.House";

selectMedicos.appendChild(optionDefault);
selectMedicos.appendChild(medico1);
selectMedicos.appendChild(medico2);
selectMedicos.appendChild(medico3);

let formTurnos = document.getElementById("formTurnos");

const nombrePaciente = document.getElementById("listaPacientes");
const optionDefaultPaciente = document.createElement("option");
// recordar poner el value a 1 para poder verificar q no este seleccionada la opcion por defecto
optionDefaultPaciente.value = 1;
optionDefaultPaciente.innerText = "Seleccione un paciente";
nombrePaciente.appendChild(optionDefaultPaciente);

// verificamos que se seleccione un medico de la lista
selectMedicos.addEventListener("blur", (e) => {
  if (selectMedicos.value == 1) {
    selectMedicos.classList = "form-control is-invalid";
  } else {
    selectMedicos.classList = "form-control is-valid";
  }
});

// verificamos que se seleccione un paciente de la lista
nombrePaciente.addEventListener("blur", (e) => {
  if (nombrePaciente.value == 1) {
    nombrePaciente.classList = "form-control is-invalid";
  } else {
    nombrePaciente.classList = "form-control is-valid";
  }
});

// agregar maximo y minimo para la hora
let horario = document.getElementById("appt-time");
horario.setAttribute("min", "08:00");
horario.setAttribute("max", "18:00");

// verficar q la fecha no sea menor al dia de hoy
// Obtener fecha actual
let fecha = new Date();
// establecerlo en fecha del dia d hoy
fecha.setDate(fecha.getDate());
// Obtener cadena en formato yyyy-mm-dd, eliminando zona y hora
let fechaMin = fecha.toISOString().split("T")[0];
// Asignar valor mínimo(o sea el dia de hoy)
document.querySelector("#diaTurno").min = fechaMin;

const dia = document.getElementById("diaTurno");

//Aqui capturamos el boton de submit del formulario
formTurnos.addEventListener("submit", (e) => {
  e.preventDefault();
  paciente = nombrePaciente.value;
  medico = selectMedicos.value;
  fechaT = dia.value;
  horaT = horario.value;
  const turno = new Turno(paciente, medico, fechaT, horaT);
  turnosArray.push(turno);
  console.log(turnosArray);
  const turnosJSON = JSON.stringify(turnosArray);
  console.log(turnosJSON);

  localStorage.setItem("turnos",turnosJSON);
});
