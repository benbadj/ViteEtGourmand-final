const inputEmail = document.getElementById("emailInput");
const inputPassword = document.getElementById("passwordInput");
const inputValidatePassword = document.getElementById("ValidatePasswordInput");


inputEmail.addEvenListerner("keyup", validateForm);
inputPassword.addEvenListerner("keyup", validateForm);
inputValidatePassword.addEvenListerner("keyup", validateForm);



function validateForm(){
    const EmailOk = validateMail(inputEmail);
    const passwordOk = imputValidatePassword(inputPassword);
    const confirmpasswordOk = imputConfirmationPassword(inputValidatePassword);

    if(mailOk &&passwordOk &&confirmpasswordOk){
        btn.disabled = false;
    }
    else{
        btn.disabled = true;
    }
}

function validateMail(input){
    //definir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = imputEmail.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validatePassword(imput){

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = inputEmail.value;
    if(passwordUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}
function validateConfirmationPassword(inputPwd, inputConfirmPwd){
    
    if(inputPwd.value == inputConfirmPwd){
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    }else{
        inputConfirmPwd.classList.remove("is-valid");
        inputConfirmPwd.classList.add("is-invalid");
        return false;
    }
}
    

function validateRequired(imput){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}