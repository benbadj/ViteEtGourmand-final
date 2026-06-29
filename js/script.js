const signoutBtn = document.getElementById("signout-btn");
signoutBtn.addEventListener = ('clik', signout);

// création de la methode role(admin, utilisateur, client)
function getRole(){
    return getCookie(RoleCookieName);
}

function signout() {
    eraseCookie(tokenCookieName);
    eraseCookie("role");
    window.location.reload();
}

// on cree la methode token qui ser adapté a notre connection.
//1.on stoque tokencookiename dans une variable, 
//2.on crée la methode setToken qu'on appelera dans signin.js
//3.on crée la methode getToken

const tokenCookieName = "accestoken"; 
const RoleCookieName = "Role" //stoke le role en variable pour le réutilisé

function setToken(token){
    setCookie(tokenCookieName, token, 7);
}

function getToken(){
    return getCookie(tokenCookieName);
}

// a trouver sur internet les 3 methode setcookie, getcookie et erasecookie
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";

}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// pour savoir si on est connecté ou pas on crée lamethode is connect

function isConnected() {
    if(getToken() == null || getToken == undefined){
        return false;
    }
    else {
        return true;
    }
}

//création d'une fonction pour afficher et masquer les élements (4 roles)
function showAndHideElementsRoles(){
    const userConnected = isConnected();
    const role = getRole();

    let allElementsToEdit = forEach(element =>{
        switch(element.dataset.show){//dataset permetde recuperer le data dans le html
            case 'disconnected':
                if(userConnected){
                    element.classList.add("d-none");
                }
                breack;
            case 'connected':
                if(!userConnected){
                    element.classList.add("d-none");
                }
                breack;
            case 'admin':
                if(!userConnected || role != "admin"){
                    element.classList.add("d-none");
                }
                breack;
            case 'client':
                if(!userConnected || role != "client"){
                    element.classList.add("d-none");
                }
                breack;
        } 
    })
}