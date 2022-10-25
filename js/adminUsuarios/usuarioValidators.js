export const validarNombre = (valor, campo) => {
  if (valor.trim().length < 2) {
    campo.classList = "form-control is-invalid";
    return false;
  }

  const regexLetras = /^[A-Z]+$/i;
  if (!regexLetras.test(valor)) {
    campo.classList = "form-control is-invalid";
    return false;
  }

  campo.classList = "form-control is-valid";
  return true;
};

export const validarApellido = (valor, campo) => {
  if (valor.trim().length < 2) {
    campo.classList = "form-control is-invalid";
    return false;
  }

  const regexLetras = /^[A-Z]+$/i;
  if (!regexLetras.test(valor)) {
    campo.classList = "form-control is-invalid";
    return false;
  }

  campo.classList = "form-control is-valid";
  return true;
};

export const validarFecha = (valor, campo) => {
  let fecha = new Date();
  fecha.setDate(fecha.getDate());
  let fechaMax = fecha.toISOString().split("T")[0];
  const fechaMinima = new Date(1920, 0, 1);
  let fechaNacimientoMenor = fechaMinima.toISOString().split("T")[0];

  if (valor > fechaMax || valor < fechaNacimientoMenor) {
    campo.classList = "form-control is-invalid";
    return false;
  }

  campo.classList = "form-control is-valid";
  return true;
};

export const validarEmail = (valor, campo) => {
  // que no este vacio
  if (valor.trim().length < 4) {
    campo.classList = "form-control is-invalid";
    return false;
  }

  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!regex.test(valor)) {
    campo.classList = "form-control is-invalid";
    return false;
  }

  campo.classList = "form-control is-valid";
  return true;
};

export const validarTelefono = (valor, campo) => {
  // que no este vacio
  if (valor.trim().length < 8) {
    campo.classList = "form-control is-invalid";
    return false;
  }

  const regex = /^\d+$/;

  if (!regex.test(valor)) {
    campo.classList = "form-control is-invalid";
    return false;
  }

  campo.classList = "form-control is-valid";
  return true;
};
