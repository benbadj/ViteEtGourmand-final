const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputAllergies = document.getElementById("AllergiesInput");
const inputNbconvives = document.getElementById("NbconvivesInput");
const btnValidation = document.getElementById("btnValidation");
const btnSuppression = document.getElementById("btnSuppression");


inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputAllergies.addEventListener("keyup", validateForm);
inputNbconvives.addEventListener("keyup", validateForm);


btnSuppression.addEventListener("click", function (event) {
    const confirmation = confirm("Êtes-vous sûr de vouloir supprimer votre compte ?");
    if (confirmation) {
        // Logique pour supprimer le compte
        localStoage.removeItem("user");
        alert("Votre compte a été supprimé.");
        window.location.href = "/";
    }else {
        event.preventDefault();
    }
});


function validateForm() {
    const NomOk = validateRequired(inputNom);
    const PrenomOk = validateRequired(inputPrenom);
    const AllergiesOk = validateRequired(inputAllergies);
    const NbconvivesOk = validateRequired(inputNbconvives);

    if (NomOk && PrenomOk && AllergiesOk && NbconvivesOk) {
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
