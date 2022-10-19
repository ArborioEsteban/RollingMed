class Login {
    constructor(contraseña) {
      this.contraseña = contraseña;
    }

    get validacion(){
        if(this.contraseña === "rolling"){
            window.open("https://www.youtube.com/");
        }
    }
  }