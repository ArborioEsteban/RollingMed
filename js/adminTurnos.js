
// Aqui cargamos tres Medicos a la lista desplegable
const SelectMedicos = document.getElementById("selectMedicos");
const medico1 = document.createElement("option");
const medico2= document.createElement("option");
const medico3= document.createElement("option");

medico1.value = "Dr.Strange";
medico1.innerText = "Dr.Strange";

medico2.value = "Dr.Who";
medico2.innerText = "Dr.Who";

medico3.value = "Dr.House";
medico3.innerText = "Dr.House";

SelectMedicos.appendChild(medico1);
SelectMedicos.appendChild(medico2);
SelectMedicos.appendChild(medico3);