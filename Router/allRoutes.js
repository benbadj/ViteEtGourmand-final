import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/main", "menu", "/pages/main.html"),
    new Route("/contact", "contact", "/page/contact.html"),
    new Route("/auth", "auth", "/pages/auth.html"),
    new Route("/signup", "signup", "/pages/signup.html"),
    new Route("/reservation", "reservation", "/pages/reservation.html"),
    new Route("/404", "404", "/pages/404.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Vite et Gourmand";