let campoNombre = document.getElementById("nombreUsuario");
let campoApellido = document.getElementById("ApellidoUsuario");
let campoFechaNacimiento = document.getElementById("fechaNacimientoUsuario");
let campoNotas = document.getElementById("notasUSuario");

export const cargarDatosEnForm = (codigo) =>{
    const usuarios = JSON.parse(localStorage.getItem("usuarios"))

    const usuariosAModificar = usuarios.find((elemento)=>{
        return elemento.codigo === codigo
    })

    campoNombre.value = usuariosAModificar.nombre;
    campoApellido.value = usuariosAModificar.apellido;
    campoFechaNacimiento.value = usuariosAModificar.fechaNacimiento;
    campoNotas.value = usuariosAModificar.notas;
}