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
let buttoncargar = document.getElementById("buttonLogin")

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

  let isEditando;

  if(buttoncargar.innerHTML==="Actualizar"){
    isEditando = true;
  } else {
    isEditando = false;
  }

  nombre = campoNombre.value;
  apellido=campoApellido.value;
  fechaNacimiento=campoFechaNacimiento.value;
  notas =campoNotas.value;

  if (
    validarNombre(nombre, campoNombre) &&
    validarApellido(apellido, campoApellido) &&
    validarFecha(fechaNacimiento, campoFechaNacimiento)
  ) {

    if(!isEditando){
    const usuario = new Usuario(nombre, apellido, fechaNacimiento, notas, edad);
    agregarUsuarioLs(usuario);
    Swal.fire("Exito!", "Usuario cargado exitosamente!", "success");
    } else {
      const codigo = Number(sessionStorage.getItem("codigoEdicion"))
      sessionStorage.removeItem("codigoEdicion")

      const usuarioIndice = usuarios.findIndex((elemento)=>{
        return elemento.codigo === codigo
      });
      usuarios[usuarioIndice].nombre = nombre;
      usuarios[usuarioIndice].apellido = apellido;
      usuarios[usuarioIndice].fechaNacimiento = fechaNacimiento;
      usuarios[usuarioIndice].notas = notas;

      localStorage.setItem("usuarios",JSON.stringify(usuarios))

      Swal.fire("Exito!", "Usuario Actualizado exitosamente!", "success");

      buttoncargar.innerHTML="cargar"

    }

    recargarUsuarios();
    
    formUsuario.reset()
    campoApellido.classList = "form-control"
    campoNombre.classList = "form-control"
    campoFechaNacimiento.classList = "form-control"
    nombre = ""
    apellido = ""
    fechaNacimiento = ""
    notas = ""
  } else {
    Swal.fire("Error!", "Verifique los campos", "error");
  }
});

export const recargarUsuarios = () =>{
  const usuariosLs = JSON.parse(localStorage.getItem("usuarios")).reverse();

  const tbody = document.getElementById("tbodyAdmin");

  tbody.innerHTML = "";

  usuariosLs.forEach((elemento)=>{
    crearUsuarioTabla(elemento)
  })
}