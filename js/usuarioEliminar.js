import { recargarUsuarios } from "./adminUsuarios.js";

export const deleteUsuario = (codigo)=>{
    const usuarios = JSON.parse(localStorage.getItem("usuarios"))

    const usuariosAEliminar = usuarios.findIndex((elemento)=>{
        return elemento.codigo === codigo
    });

    Swal.fire({
        title: 'Estas seguro?',
        text: "No podras deshacer esta accion!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar contacto!',
        cancelButtontext: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
            usuarios.splice(usuariosAEliminar,1)
            localStorage.setItem("usuarios",JSON.stringify(usuarios))

            recargarUsuarios();

          Swal.fire({
            title:"Eliminado",
            text:"El usuario ha sido eliminado",
            icon:"success"
          }
            
          )
        }
      })
} 