const formLogin = document.getElementById("formLogin");
let passwordAdmin = document.getElementById("passwordAdmin");
let btnCancelarModal = document.getElementById("btnCancelarModal");

// limpiamos el input de la contraseña al clickear en cancelar
btnCancelarModal.addEventListener("click" , (e)=>{
  passwordAdmin.classList = "form-control";
  passwordAdmin.value = "";
});


// limpiamos el input de la contraseña al clickear fuera del modal para q se cierre
let loginModal = document.getElementById('loginModal')
loginModal.addEventListener('hidden.bs.modal', function (event) {
  passwordAdmin.classList = "form-control";
  passwordAdmin.value = "";
})

// verificar q no pueda escribir la direccion html e ingresar

// verificar con js q este el nombre de usuario en la base de datos

// if localstorage esta guardado el admin , sigue
// si no aparece ese admin , no se carga la tabla , le pones document get element inner y la vaciamos

// otra idea podria ser poner un modal q ocupe toda la pantalla y se cierre , solamente cuando clickeamos el botton de cerrar y lo devuelve a la pagina principal si no coincide los datos q teemos guardados en local storage y no muestre nada

formLogin.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    let pass = "roll";
    if(passwordAdmin.value === pass){
        passwordAdmin.classList = "form-control is-valid";
        window.open("./adminPrincipal.html","_self");
    }else{
        passwordAdmin.classList = "form-control is-invalid";
    }
});