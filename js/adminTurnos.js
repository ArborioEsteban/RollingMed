import { Turno } from "./Turno.js";
import{crearTurnoTabla} from "./crearTurnoTabla.js"

let paciente = "";
let medico = "";
let fechaT = "";
let horaT = "";


const buttonCargar = document.getElementById("buttonCargar");

let turnosLStorage = localStorage.getItem("turnos");
turnosLStorage = JSON.parse(turnosLStorage);
// console.log(turnosLStorage);
let listaPacientesLS = localStorage.getItem("usuarios");
listaPacientesLS = JSON.parse(listaPacientesLS);
console.log(listaPacientesLS);

let turnosArray = [];
let listaPacientes=[];


const nombrePaciente = document.getElementById("listaPacientes");
const optionDefaultPaciente = document.createElement("option");

// recordar poner el value a 1 para poder verificar q no este seleccionada la opcion por defecto
optionDefaultPaciente.value = 1;
optionDefaultPaciente.innerText = "Seleccione un paciente";
nombrePaciente.appendChild(optionDefaultPaciente);

if(listaPacientesLS != null){
  listaPacientes = listaPacientesLS;
  listaPacientes.forEach((paciente) =>{
    let desplegablePaciente = document.createElement("option");
    let nombreYApellido = paciente.nombre + " " + paciente.apellido
    desplegablePaciente.value = nombreYApellido;
    desplegablePaciente.innerText = nombreYApellido;
    nombrePaciente.appendChild(desplegablePaciente);
  })

}


if(turnosLStorage != null){
    turnosArray = turnosLStorage;
    
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



// agregar maximo y minimo para la hora
const horario = document.getElementById("appt-time");
horario.setAttribute("min", "08:00");
horario.setAttribute("max", "18:00");

// establecer q la fecha no sea menor al dia de hoy
// Obtener fecha actual
let fecha = new Date();
// establecerlo en fecha del dia d hoy
fecha.setDate(fecha.getDate());

// Obtener cadena en formato yyyy-mm-dd, eliminando zona y hora
let fechaMin = fecha.toISOString().split("T")[0];


// Asignar valor maximo (100 años a partir del dia de hoy)
document.querySelector("#diaTurno").min = fechaMin;
const fechaMaxima = new Date(2122, 0, 1);
let fechaMaximaTurno = fechaMaxima.toISOString().split("T")[0];
document.querySelector("#diaTurno").max = fechaMaximaTurno;


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
  
  let isEditando;

  if(buttonCargar.innerText === "Editar"){
    isEditando = true;
  }else{
    isEditando = false;
  }

  paciente = nombrePaciente.value;
  medico = selectMedicos.value;
  fechaT = dia.value;
  horaT = horario.value;


  if(verificarMedico && verificarPaciente){
    if(!isEditando){
      // contacto nuevo
      paciente = nombrePaciente.value;
      medico = selectMedicos.value;
      fechaT = dia.value;
      horaT = horario.value;

      // agregamos el contacto
      const turno = new Turno(paciente, medico, fechaT, horaT);
      turnosArray.unshift(turno);
      const turnosJSON = JSON.stringify(turnosArray);
      localStorage.setItem("turnos",turnosJSON);
      crearTurnoTabla(turno);
  
      Swal.fire({
        title: "Exito",
        text: "Turno Agendado!",
        icon: "success",
        confirmButtonColor: "#0099FF",
      });
    }else{
      // esta editando los turnos
      const codigo = Number(sessionStorage.getItem("codigoEdicion"));
      sessionStorage.removeItem("codigoEdicion");

      const turnoIndice = turnosArray.findIndex((elemento) => {
        return elemento.codigo === codigo;
      });

      turnosArray[turnoIndice].paciente = paciente;
      turnosArray[turnoIndice].medico = medico;
      turnosArray[turnoIndice].fecha = fechaT;
      turnosArray[turnoIndice].hora = horaT;

      localStorage.setItem("turnos", JSON.stringify(turnosArray));


      Swal.fire({
        title: "Exito",
        text: "El turno se editó correctamente",
        icon: "success",
      });

      
      buttonCargar.innerText = "Cargar";

    }

    recargarDatos();
    nombrePaciente.value=1;
    selectMedicos.value=1;
    nombrePaciente.classList = "form-control";
    selectMedicos.classList = "form-control";
    horario.value="";
    dia.value="";

    paciente = "";
    medico = "";
    fechaT = "";
    horaT = "";
  } else{
    Swal.fire({
      title: "Error",
      text: "Datos no validos. Por favor Revisar los campos",
      icon: "warning",
    });
  }
});


export const recargarDatos = () => {
  const turnosLS = JSON.parse(localStorage.getItem("turnos"));

  //vaciar tabla
  const tbody = document.getElementById("tbody__turno");

  tbody.innerHTML = "";

  // crear nuevas filas
  turnosLS.forEach((elemento) => {
    crearTurnoTabla(elemento);
  });
};