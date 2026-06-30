//verifiaction que l'utilisateur a bien le droit d'acceder au contenu de la page avant de le charger grace à authorize
const path = window.location.pathname
const actualRoute = getRouteByUrl(path); //nrécuperation de l'url actuel
const allRolesArray = actualRoute.authorize; // vérifier le droit d'accès à la page

if(allRolesArray.length > 0){ // on fait le controle que si la taille de notre tableau est > 0 soit []
  if(allRolesArray.includes("disconnected")){
    if(isConnected()){
      window.location.replace("/"); //ici ca veut dire lorsque l'utilisateur a le statut ["disconnecte"], on redirige
    }
  }
  else{
    const roleUser = getRole();
    if(!allRolesArray.include(roleUser)){
      Window.location.replace("/"); 
    }
  }
}



//1. on attend que le html initial soit soit completement chargé
document.addEventListener("DOMContentLoaded", function() { 
  const appContainer = document.getElementById("main-page");
  const navLinks = document.querySelectorAll(".nav-link");
  //fonction pour charger le contenu d'une page de manière assynchrome
  async function loadPage(url) {
    try {
      console.log("tentative de chargement de :", url)
      //on recupere le fichier html demandé (ex: /page/main.html)
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Page non trouvée")
      }
      const htmlContent = await response.text();

      //on injecte le contenu récupéré dans notre container principal
      appContainer.innerHTML = htmlContent;
    } catch (error) {
      console.error(error);
      appContainer.innerHTML = '<h2>Erreur 404</h2><p>Désolé, impossible de chargé la page.</p>';
    }
    //afficher et masquer les élements en fonction du role
    showAndHideElementsForRoles();
  }
  //2.on écoute tous les clics sur tous les liens du menu
    document.addEventListener("click", function(event) {
      //on cherche si l'élément cliqué ou son parent est un lien avec la class .nav-link
      const link = event.target.closest(".nav-link");
      //si on a bien cliqué sur le lien de menu
      if (link) {
          even.preventDefault();
      //on recupere la cible du lien (ex:page/main.html)
      let pageUrl = link.getAttribute("href");
      //si c'est le lien home"/", on le redirige vers notre page d'accueil réelle
      if (pageUrl === "/" || pageUrl === ""){
        loadPage("/home.html");
      } else {
        //si le lien commence par un "/", on l'enleve pour repartir propreement de la racine du navigateur
        if (pageUrl.startsWith("/")) {
            pageUrl = pageUrl.substring(1); //devient "pages/main.html"
        }
        loadPage(pageUrl);
      }
    };
  });
  //3. charger la page d'accueil par defaut au premier démarrage
  loadPage("pages/home.html");
});