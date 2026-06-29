const imputNom = document.getElementById("NomInput");
const imputPrenom = document.getElementById("PrenomImput")
const imputEmail = document.getElementById("EmailInput");
const imputPassword = document.getElementById("PasswordInput");
const imputValidatePassword = document.getElementById("ValidatePasswordInput");
const imputBtnValidation = document.getElementById("btn__ValidationInscription")

NomInput.addEvenListerner("keyup", validateForm);
PrenomImput.addEvenListerner("keyup", validateForm);
imputEmail.addEvenListerner("keyup", validateForm);
imputPassword.addEvenListerner("keyup", validateForm);
imputValidatePassword.addEvenListerner("keyup", validateForm);


//ma function permettant de valider tous les formulaire
function validateForm(){
    const NomOk = validetaRequired(imputNom);
    const PrenomOk = validetaRequired(imputPrenom);
    const EmailOk = validateMail(imputEmail);
    const passwordOk = imputValidatePassword(imputPassword);
    const confirmpasswordOk = imputConfirmationPassword(imputValidatePassword);

    if(nomOk && prenomOk && mailOk &&passwordOk &&confirmpasswordOk){
        btnValidation.disabled = false;
    }
    else{
        btnValidation.disabled = true;
    }
}

function validateMail(imput){
    //definir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = imputEmail.value;
    if(mailUser.match(emailRegex)){
        imput.classList.add("is-valid");
        imput.classList.remove("is-invalid");
        return true;
    }else{
        imput.classList.remove("is-valid");
        imput.classList.add("is-invalid");
        return false;
    }
}

//verification password
function validatePassword(imput){

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = imputEmail.value;
    if(passwordUser.match(emailRegex)){
        imput.classList.add("is-valid");
        imput.classList.remove("is-invalid");
        return true;
    }else{
        imput.classList.remove("is-valid");
        imput.classList.add("is-invalid");
        return false;
    }
}

//confirmation password
function validateConfirmationPassword(imputPwd, ImputConfirmPwd){
    
    if(imputPwd.value == imputConfirmPwd){
        imputConfirmPwd.classList.add("is-valid");
        imputConfirmPwd.classList.remove("is-invalid");
        return true;
    }else{
        imputConfirmPwd.classList.remove("is-valid");
        imputConfirmPwd.classList.add("is-invalid");
        return false;
    }
}
    

function validateRequired(imput){
    if(imput.value != ''){
        imput.classList.add("is-valid");
        imput.classList.remove("is-invalid");
        return true;
    }else{
        imput.classList.remove("is-valid");
        imput.classList.add("is-invalid");
        return false;
    }
}