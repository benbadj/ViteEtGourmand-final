import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/main", "menu", "/pages/main.html"),
    new Route("/contact", "contact", "/pages/contact.html"),
    new Route("/moncompte", "moncompte", "/pages/moncompte.html"),
    new Route("/signin", "connexion", "/pages/auth/signin.html", "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", "/js/auth/signup.js"),
    new Route("/editpassword", "editpassword", "/pages/auth/editpassword.html"),
    new Route("/allsreservations", "allresrvations", "/pages/reservations/allsreservations.html"),
    new Route("/reserver", "reserver", "/pages/reservations/reserver.html"),
    new Route("/404", "404", "/pages/404.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Vite et Gourmand";