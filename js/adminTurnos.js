import { Turno } from "./Turno.js";
import{crearTurnoTabla} from "./crearTurnoTabla.js"

let paciente = "";
let medico = "";
let fechaT = "";
let horaT = "";

let turnosLStorage = localStorage.getItem("turnos");
turnosLStorage = JSON.parse(turnosLStorage);

let turnosArray = [];

if(turnosLStorage != null){
    turnosArray = turnosLStorage;
    console.log(turnosArray);
    // crearTurnoTabla , aqui conviene agregar otra funcion en otro javascript para cuando toque cargar y mostrar los turnos
    turnosArray.forEach((turno) => {
      crearTurnoTabla(turno);
    });
}

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

// verificamos que se seleccione un medico de la lista
let verificarMedico;

 selectMedicos.addEventListener("blur", (e) => {
  if (selectMedicos.value == 1) {
    selectMedicos.classList = "form-control is-invalid";
    verificarMedico = false;
  } else {
    selectMedicos.classList = "form-control is-valid";
    verificarMedico = true;
  }
});

// verificamos que se seleccione un paciente de la lista
let verificarPaciente ;
nombrePaciente.addEventListener("blur", (e) => {
  if (nombrePaciente.value == 1) {
    nombrePaciente.classList = "form-control is-invalid";
    verificarPaciente = false;
  } else {
    nombrePaciente.classList = "form-control is-valid";
    verificarPaciente = true;
  }
});

//Aqui capturamos el boton de submit del formulario
formTurnos.addEventListener("submit", (e) => {
  e.preventDefault();

  if(verificarMedico && verificarPaciente){
    paciente = nombrePaciente.value;
    medico = selectMedicos.value;
    fechaT = dia.value;
    horaT = horario.value;
    const turno = new Turno(paciente, medico, fechaT, horaT);
    turnosArray.push(turno);
    console.log(turnosArray);
    const turnosJSON = JSON.stringify(turnosArray);
    localStorage.setItem("turnos",turnosJSON);
    crearTurnoTabla(turno);
  }
});
