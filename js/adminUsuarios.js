import { crearUsuarioTabla } from "./usuario.CreacionTabla.js";
import { Usuario } from "./usuarioClass.js";
import { validarApellido, validarFecha, validarNombre } from "./usuarioValidators.js";

let usuariosLs = localStorage.getItem("usuarios");
usuariosLs = JSON.parse(usuariosLs);

let usuarios = [];
if (usuariosLs != null && usuariosLs.length > 0) {
  usuarios = usuariosLs;
  usuarios.forEach((elemento) => {
    crearUsuarioTabla(elemento);
  });
}

let nombre = "";
let apellido = "";
let fechaNacimiento = "";
let notas = "";
let edad = 0;

let campoNombre = document.getElementById("nombreUsuario");
let campoApellido = document.getElementById("ApellidoUsuario");
let campoFechaNacimiento = document.getElementById("fechaNacimientoUsuario");
let campoNotas = document.getElementById("notasUSuario");

let formUsuario = document.getElementById("formAdmin");

campoNombre.addEventListener("blur", (e) => {
  if (validarNombre(e.target.value, campoNombre)) {
    nombre = e.target.value;
  }
});

campoApellido.addEventListener("blur", (e) => {
  if (validarApellido(e.target.value, campoApellido)) {
    apellido = e.target.value;
  }
});

campoFechaNacimiento.addEventListener("blur", (e) => {
  if (validarFecha(e.target.value, campoFechaNacimiento)) {
    fechaNacimiento = e.target.value;
  }
});

campoNotas.addEventListener("blur", (e) => {
  notas = e.target.value;
});

const agregarUsuarioLs = (usuario) => {
  usuarios.push(usuario);

  const usuariosJson = JSON.stringify(usuarios);
  localStorage.setItem("usuarios", usuariosJson);
};

formUsuario.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    validarNombre(nombre, campoNombre) &&
    validarApellido(apellido, campoApellido) &&
    validarFecha(fechaNacimiento, campoFechaNacimiento)
  ) {
    const usuario = new Usuario(nombre, apellido, fechaNacimiento, notas, edad);
    crearUsuarioTabla(usuario);
    agregarUsuarioLs(usuario);
    Swal.fire("Exito!", "Usuario cargado exitosamente!", "success");
    formUsuario.reset()
    return 
  } else {
    Swal.fire("Error!", "Verifique los campos", "error");
  }
});