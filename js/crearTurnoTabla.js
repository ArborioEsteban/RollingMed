import { deleteTurno } from "./delete.js";
import { Turno } from "./Turno.js";
import { cargarDatosEnFormulario } from "./update.js";




export const crearTurnoTabla = (turno) => {
  const tbody = document.getElementById("tbody__turno");

  const tr = document.createElement("tr");

  
  const td1 = document.createElement("td");
  td1.innerText = turno.codigo;
  tr.appendChild(td1);

  const td2 =document.createElement("td");
  td2.innerText = turno.medico;
  tr.appendChild(td2);

  const td3 =document.createElement("td");
  td3.innerText = turno.paciente;
  tr.appendChild(td3);

  const td4 =document.createElement("td");
  td4.innerText = turno.fecha;
  tr.appendChild(td4);

  const td5 =document.createElement("td");
  td5.innerText = turno.hora;
  tr.appendChild(td5);


  const buttonEditar = document.createElement("button");
  buttonEditar.type = "button";
  buttonEditar.classList = "botonTarea";

  const buttonEliminar = document.createElement("button");
  buttonEliminar.type = "button";
  buttonEliminar.classList = "botonTarea";

  const iEditar = document.createElement("i");
  iEditar.classList = "fa-solid fa-pencil ms-3";

  const iEliminar = document.createElement("i");
  iEliminar.classList = "fa-solid fa-trash-can ms-3";

  buttonEditar.appendChild(iEditar);
  buttonEliminar.appendChild(iEliminar);

  buttonEditar.onclick = () => {
    cargarDatosEnFormulario(turno.codigo);
    

  }

  buttonEliminar.onclick = () => {
    deleteTurno(turno.codigo);
  }


  const td6 = document.createElement("td");

  td6.appendChild(buttonEditar);
  td6.appendChild(buttonEliminar);

  tr.appendChild(td6);



  tbody.appendChild(tr);

}
  