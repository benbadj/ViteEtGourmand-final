
export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize; // pour le controle de sécurité
    }
}


//on rajoute des roles d'autorisation, on en a 4 possibilité
/*
[] => tout le monde peut y acceder
 ["disconnected"] => réservé aux utilisateurs déconnecté
 ["client"] => réserver aux utilisateurs avec le role client
 ["admin"] => réserver aux utilisateurs avec le role admin
 ["admin", "client"] => réserver aux utilisateurs avec le role client ou admin */