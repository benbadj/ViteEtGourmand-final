import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/main", "menu", "/pages/main.html"),
    new Route("/contact", "contact", "/page/contact.html"),
    new Route("/moncompte", "moncompte", "/pages/moncompte.html"),
    new Route("/auth", "connexion", "/pages/auth/signin.html"),
    new Route("/signup", "signup", "/pages/auth/signup.html"),
    new Route("/editpassword", "editpassword", "/pages/auth/editpassword.html"),
    new Route("/allsreservations", "allresrvation", "/pages/reservations/allsreservations.html"),
    new Route("/reserver", "reserver", "/pages/reservations/reserver.html"),
    new Route("/404", "404", "/pages/404.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Vite et Gourmand";