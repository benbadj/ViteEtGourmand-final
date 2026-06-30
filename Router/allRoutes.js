import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/main", "menu", "/pages/main.html", [], "/js/main.js"),
    new Route("/contact", "contact", "/pages/contact.html", ["disconnected"], "/js/contact.js"),
    new Route("/moncompte", "moncompte", "/pages/moncompte.html", ["client", "admin"]),
    new Route("/signin", "connexion", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/editpassword", "editpassword", "/pages/auth/editpassword.html", ["client", "admin"]),
    new Route("/allsreservations", "allresrvations", "/pages/reservations/allsreservations.html", ["client"]),
    new Route("/reserver", "reserver", "/pages/reservations/reserver.html", ["client"]),
    new Route("/404", "404", "/pages/404.html", []),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Vite et Gourmand";