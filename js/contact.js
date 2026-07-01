const imputNom = document.getElementById("prenomImput");
const imputPrenom = document.getElementById("prenomImput");
const imputNumber = document.getElementById("numberImput");
const imputPost = document.getElementById("postImput");
const imputEmail = document.getElementById("emailImput");
const imputBtnValidation = document.getElementById("btn-validation")


imputNom.addEventListener("keyup", validateForm);
imputPrenom .addEventListener("keyup", validateForm);
imputNumber.addEventListener("keyup", validateForm);
imputPost.addEventListener("keyup", validateorm);


function validateForm(){
    const nomOk = validateRequired(imputNom);
    const prenomOk = validateRequired(imputPrenom);
    const numberOk = validateRequired(imputNumber);
    const emailOk = validateRequired(imputNumber);
    const postOk = validateRequired(imputPost)
    if (nomOk && prenomOk && numberOk && emailOk && postOk){
        imputBtnValidation.disable = false;
    }else{
        imputBtnValidation.disable = true;
    }

}


function validateRequired(imput) {
    if(imput.value != ''){
        imput.classList.add("is-valid");
        imput.classList.remove("is-invalid");
        return true;
    }else{
        imput.classList.remove("is-invalid");
        imput.classList.add("is-valide");
        return false;
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