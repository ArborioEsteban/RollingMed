import { cargarDatosEnForm } from "./usuarioActualizar.js";


export const crearUsuarioTabla = (usuario) =>{
    const tbody = document.getElementById("tbodyAdmin")

    const tr = document.createElement("tr");
    const tdCodigo = document.createElement("td");

    tdCodigo.innerText = usuario.codigo;
    tr.appendChild(tdCodigo);

    const tdNombre = document.createElement("td");

    tdNombre.innerText = usuario.nombre;
    tr.appendChild(tdNombre);

    const tdApellido = document.createElement("td");
    
    tdApellido.innerText = usuario.apellido;
    tr.appendChild(tdApellido);

    const tdAge = document.createElement("td");
    
    tdAge.innerText = usuario.edad;
    tr.appendChild(tdAge);

    const tdNotas = document.createElement("td");
    
    tdNotas.innerText = usuario.notas;
    tr.appendChild(tdNotas);

    const tdBotones = document.createElement("td")
    // const bottonEditar = document.createElement("button");
    // const bottonEliminar = document.createElement("button");
    
    // bottonEditar.classList = "btn btn-warning me-2 mb-2"
    // bottonEliminar.classList = "btn btn-danger"
    // bottonEditar.innerText = "Editar"
    // bottonEliminar.innerText = "Elimiar"

const buttonEditar = document.createElement("button");
  buttonEditar.type = "button";
  buttonEditar.classList = "botonEditDelete";

  const buttonEliminar = document.createElement("button");
  buttonEliminar.type = "button";
  buttonEliminar.classList = "botonEditDelete";

  const iEditar = document.createElement("i");
  iEditar.classList = "fa-solid fa-pencil ms-3";

  const iEliminar = document.createElement("i");
  iEliminar.classList = "fa-solid fa-trash-can ms-3";

  buttonEditar.appendChild(iEditar);
  buttonEliminar.appendChild(iEliminar);


    buttonEditar.onclick = ()=>{
        cargarDatosEnForm(usuario.codigo)
    }

    tdBotones.appendChild(buttonEditar)
    tdBotones.appendChild(buttonEliminar)
    tr.appendChild(tdBotones);

    tbody.appendChild(tr)
}