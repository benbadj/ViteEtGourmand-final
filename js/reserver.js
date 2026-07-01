const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputAllergies = document.getElementById("AllergiesInput");
const inputNbconvives = document.getElementById("NbconvivesInput");
const inputDate = document.getElementById("DateInput");
const inputSelectHour = document.getElementById("SelectHourInput");
const btnValidation = document.getElementById("btnValidation");
const btnAnnulation = document.getElementById("btnAnnulation");

inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputAllergies.addEventListener("keyup", validateForm);
inputNbconvives.addEventListener("keyup", validateForm);
inputDate.addEventListener("keyup", validateForm);
inputSelectHour.addEventListener("change", validateForm);

btnAnnulation.addEventListener("click", function (event) {
    const confirmation = confirm("Êtes-vous sûr de vouloir annuler la réservation ?");
    if  (confirmation) {
        sessionStorage.clear();
        alert("Votre réservation a été annulée.");
        window.location.href = "/";
    }
    else {
        event.preventDefault();
    }
});



function validateForm() {
    const NomOk = validateRequired(inputNom);
    const PrenomOk = validateRequired(inputPrenom);
    const AllergiesOk = validateRequired(inputAllergies);
    const NbconvivesOk = validateRequired(inputNbconvives);
    const DateOk = validateRequired(inputDate);
    const SelectHourOk = validateRequired(inputSelectHour);

    if (NomOk && PrenomOk && AllergiesOk && NbconvivesOk && DateOk && SelectHourOk) {
        btnValidation.disabled = false;
    } else {
        btnValidation.disabled = true;
    }
}


function validateRequired(input) {
    if (input.value != '') {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    } else {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        return true;
    }
}
