const emailInput = document.getElementById("inputEmail");
const passwordInput = document.getElementById("inputPassword");

const btnSignin = document.getElementById("btnSignin");

//function validation
//ici la btnsignin permet de controler qe tous les informations sont vrai 
// on fait appel a l'API (base de donnée) pour verifier les credentials (permet de vérifier le mail et le password de l'utilisateur)

function checkCredentials() {
    if(emailInput.value == "test@gmail.com" && passwordInput.value == "123"){

        //recuparation du vrai token
        const token = "qsdfghjklmpoiuytreza";
        setToken(token); // appel du token depuis script.js
        //placer ce token en cookie
        setCookie(RoleCookieName,"admin", 7); //ajout du cookie appelé role
        window.location.replace("/");
    }
    else{
        emailInput.classList.add("is-valid");
        passwordInput.classList.add("is-invalid");
    }
}
//methode pour les cookies
