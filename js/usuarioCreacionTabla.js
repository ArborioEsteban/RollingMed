import { cargarDatosEnForm} from "./usuarioActualizar.js";
import { deleteUsuario} from "./usuarioEliminar.js";

export const crearUsuarioTabla = (usuario) => {
  const tbody = document.getElementById("tbodyAdmin");

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

  const tdBotones = document.createElement("td");
  const bottonEditar = document.createElement("button");
  const bottonEliminar = document.createElement("button");

  const iEditar = document.createElement("i");
  iEditar.classList = "fa-solid fa-pencil ms-3";

  const iEliminar = document.createElement("i");
  iEliminar.classList = "fa-solid fa-trash-can ms-3";

  bottonEditar.classList = "botonEdit";
  bottonEliminar.classList = "botonDelete";

  bottonEditar.appendChild(iEditar);
  bottonEliminar.appendChild(iEliminar);

  bottonEditar.onclick = () => {
    cargarDatosEnForm(usuario.codigo);
  };

  bottonEliminar.onclick = () => {
    deleteUsuario(usuario.codigo);
  };

  tdBotones.appendChild(bottonEditar);
  tdBotones.appendChild(bottonEliminar);
  tr.appendChild(tdBotones);

  tbody.appendChild(tr);
};
