import { validarApellido, validarEmail, validarNombre, validarTelefono } from "./adminUsuarios/usuarioValidators.js"

let nombreContacto = ""
let apellidoContacto = ""
let emailContacto = ""
let telefonoContacto = 0
let mensajeContacto =""

let campoNombreContacto = document.getElementById("nombreContacto")
let campoApellidoContacto = document.getElementById("apellidoContacto")
let campoEmailContacto = document.getElementById("emailContacto")
let campoTelefonoContacto = document.getElementById("telefonoContacto")
let campoMensajeContacto = document.getElementById("notasContacto")
let formContacto = document.getElementById("formularioContacto")

//VALIDADORES 

export const validarMensaje = (valor, campo) => {
        if (valor.trim().length < 5) {
          campo.classList = "form-control is-invalid";
          return false;
        } else{
         campo.classList = "form-control is-valid"
         return true
        }
    }
        

      campoNombreContacto.addEventListener("blur",(e)=>{
        if(validarNombre(e.target.value,campoNombreContacto)){
            nombreContacto=e.target.value;
        }
      })

      campoApellidoContacto.addEventListener("blur",(e)=>{
        if(validarApellido(e.target.value,campoApellidoContacto)){
            apellidoContacto=e.target.value;
        }
      })

      campoEmailContacto.addEventListener("blur",(e)=>{
        if(validarEmail(e.target.value,campoEmailContacto)){
            emailContacto=e.target.value;
        }
      })

      campoTelefonoContacto.addEventListener("blur",(e)=>{
        if(validarTelefono(e.target.value,campoTelefonoContacto)){
            telefonoContacto=e.target.value;
        }
      })

      campoMensajeContacto.addEventListener ("blur",(e)=>{
        if(validarMensaje(e.target.value,campoMensajeContacto)){
            mensajeContacto=e.target.value;
        }
      })

      formContacto.addEventListener("submit",(e)=>{
        e.preventDefault();

        if(validarNombre(nombreContacto,campoNombreContacto) &&
            validarApellido(apellidoContacto,campoApellidoContacto) &&
            validarEmail(emailContacto,campoEmailContacto) &&
            validarTelefono(telefonoContacto,campoTelefonoContacto) &&
            validarMensaje(mensajeContacto,campoMensajeContacto)){
                Swal.fire("Exito!", "Nos contactaremos a la brevedad!", "success");
                
                      campoNombreContacto.value = "";
                      campoApellidoContacto.value = "";
                      campoEmailContacto.value = "";
                      campoTelefonoContacto.value = "";
                      campoMensajeContacto.value = ""; 
                      

            } else{
                Swal.fire("Error!", "Verifique los campos", "error");
            }
            formContacto.reset();
            campoNombreContacto.classList += "form-control";
            campoApellidoContacto.classList += "form-control"; 
            campoEmailContacto.classList += "form-control";
            campoTelefonoContacto.classList += "form-control";
            campoMensajeContacto.classList += "form-control";
                    
      })
