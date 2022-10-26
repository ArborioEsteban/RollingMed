const turnosLS = JSON.parse(localStorage.getItem("turnos"));
const listaPacientesLS = JSON.parse(localStorage.getItem("usuarios"));

const formBusquedaMedico =document.getElementById("formBusquedaMedico");

let adminVerificarSesion = sessionStorage.getItem("verificar");

adminVerificarSesion = JSON.parse(adminVerificarSesion);

if(adminVerificarSesion != null){
  
} else{
  Swal.fire({
    title: "Sesion no valida",
    text: "No pudimos verificar tu identidad por favor ingrese la contraseña nuevamente",
    icon: "error",
    allowOutsideClick: false,
    allowEnterKey:false,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        window.open("./index.html","_self"),
      )
    }
  })
}





turnosLS.sort((a, b) => {

  let ah = a.fecha +"T"+ a.hora;
  
  

  let bh = b.fecha +"T"+ b.hora;
  
  

  if (ah > bh ) {
    
    return 1;
  }
  if (ah < bh ) {
    
    return -1;
  }
  return 0;
});


let listaPacientes = document.getElementById("listaPacientes");
const optionDefaultPaciente = document.createElement("option");
optionDefaultPaciente.value = 1;
optionDefaultPaciente.innerText = "Buscar Paciente";
listaPacientes.appendChild(optionDefaultPaciente);

listaPacientesLS.forEach((elemento) => {
    let option = document.createElement("option");
    let nombreYApellido =  `${elemento.nombre} ${elemento.apellido}`
    option.value = nombreYApellido;
    option.innerText = nombreYApellido;
    listaPacientes.appendChild(option); 
  });

const selectMedicos = document.getElementById("listaMedicos");
const optionDefault = document.createElement("option");

// Cargar  tres Medicos a la lista desplegable
const medico1 = document.createElement("option");
const medico2 = document.createElement("option");
const medico3 = document.createElement("option");
const cualquiera = document.createElement("option");

optionDefault.value = 1;
optionDefault.innerText = "Buscar Medico";
medico1.value = "Dr.Strange";
medico1.innerText = "Dr.Strange";

medico2.value = "Dr.Who";
medico2.innerText = "Dr.Who";

medico3.value = "Dr.House";
medico3.innerText = "Dr.House";

cualquiera.value = 0;
cualquiera.innerText = "Cualquiera";


selectMedicos.appendChild(optionDefault);
// selectMedicos.appendChild(cualquiera);
selectMedicos.appendChild(medico1);
selectMedicos.appendChild(medico2);
selectMedicos.appendChild(medico3);

let tablaPrincipal = document.getElementById("tbody__tablaPrincipal");

const crearTabla = (elemento) =>{
    // creamos table row y td para elementos q trajimos del localstorage

    const tr = document.createElement("tr");

    const tdMedico = document.createElement("td");
    tdMedico.innerText = elemento.medico;
    tr.appendChild(tdMedico);

    const tdPaciente = document.createElement("td");
    tdPaciente.innerText = elemento.paciente;
    tr.appendChild(tdPaciente);

    const tdDiaTurno = document.createElement("td");
    tdDiaTurno.innerText = elemento.fecha;
    tr.appendChild(tdDiaTurno);

    const tdHoraTurno = document.createElement("td");
    tdHoraTurno.innerText = elemento.hora;
    tr.appendChild(tdHoraTurno);

    listaPacientesLS.forEach((paciente) =>{
        let nombreYApellido = paciente.nombre + " " + paciente.apellido;
        if((nombreYApellido === elemento.paciente)  && (paciente.notas != null)){
            
            const tdNotas = document.createElement("td");
            tdNotas.innerText = paciente.notas;
            tr.appendChild(tdNotas);
        }
    });
    tablaPrincipal.appendChild(tr);
}

turnosLS.forEach((elemento) => {
    crearTabla(elemento);
  });
  // formBusquedaMedico.addEventListener("submit", (e) => {
  //       e.preventDefault();
  //     let medico = selectMedicos.value;
      
  // });
 

  
  function filterMedicos(){
    let medico = selectMedicos.value;

  }

  