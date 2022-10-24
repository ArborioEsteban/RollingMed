import { recargarDatos } from "./adminTurnos.js";

export const deleteTurno = (codigo) => {
  const turnos = JSON.parse(localStorage.getItem("turnos"));

  const turnoAEliminarIndex = turnos.findIndex((elemento) => {
    return elemento.codigo === codigo;
  });

  Swal.fire({
    title: "¿Estás seguro?",
    text: "No podrás deshacer esta acción",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#0099FF",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar turno",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      turnos.splice(turnoAEliminarIndex, 1);

      localStorage.setItem("turnos", JSON.stringify(turnos));

      recargarDatos();

      Swal.fire({
        title: "Eliminado",
        text: "El turno ha sido eliminado",
        icon: "success",
        confirmButtonColor: "#0099FF",
      });
    }
  });
};