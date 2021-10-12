// import React from "react";
import img1 from "../images/site_DonjonsDragons.jpg"
import img2 from "../images/Quiz.jpg"
import img4 from "../images/Site_de_chien.jpg"
import img5 from "../images/sn_Appchat.jpg"
import img6 from "../images/Faitmonmenage.jpg"
import img7 from "../images/Nourriture communautaire.jpg"

const textProjets = () => {
    return(
        [
            {
                "source" : {img1},
                "project" : "Créer un site web de style Donjons et Dragons",
                "cours" : "Intégration 2",
                "note" : "107.5",
                "techno" : "Bootstrap",
                "lien" : "https://gitlab.com/Nicolas_Tremblay/tp2-intg2.git",
                "git" : "https://gitlab.com/Nicolas_Tremblay/tp2-intg2.git"
            },
            {
                "source" : {img2},
                "project" : "Créer un quiz qui affiche nos résultat et les informations de l'utilisateur",
                "cours" : "Intégration 2",
                "note" : "95",
                "techno" : "Jquery",
                "lien" : "https://gitlab.com/Nicolas_Tremblay/tp3_-_quiz.git",
                "git" : "https://gitlab.com/Nicolas_Tremblay/tp3_-_quiz.git"
            },
            {
                "source" : "/static/media/site_DonjonsDragons.edffb694.jpg",
                "project" : "Créer un jeu de mémoire",
                "cours" : "Principe de programmation",
                "note" : "100",
                "techno" : "Javascript, HTML, CSS",
                "lien" : "https://gitlab.com/Nicolas_Tremblay/tp3_jeu-de-memoire.git",
                "git" : "https://gitlab.com/Nicolas_Tremblay/tp3_jeu-de-memoire.git"
            },
            {
                "source" : {img4},
                "project" : "Créer un site web sur un sujet libre à l'aide d'un patron ",
                "cours" : "Intégration 2",
                "note" : "99",
                "techno" : "Sass, BEM, HTML",
                "lien" : "https://gitlab.com/Nicolas_Tremblay/tp1-integration2.git",
                "git" : "https://gitlab.com/Nicolas_Tremblay/tp1-integration2.git"
            },
            {
                "source" : {img5},
                "project" : "Utilser un Api pour meubler notre site web et utiliser une pagination",
                "cours" : "Intégration 3",
                "note" : "100",
                "techno" : "React",
                "lien" : "https://github.com/Nic376/TP2-integration.git",
                "git" : "https://github.com/Nic376/TP2-integration.git"
            },
            {
                "source" : {img6},
                "project" : "Travail en équipe de 4 pour créer site web complet (maquette, backend, frontend et Api)",
                "cours" : "Projet de production 1",
                "note" : "90",
                "techno" : "Express, Mongoose",
                "lien" : "https://gitlab.com/Dmorel571/alpha-pp1-integration.git",
                "git" : "https://gitlab.com/Dmorel571/alpha-pp1-integration.git"
            },
            {
                "source" : {img7},
                "project" : "Créer un quiz qui affiche nos résultat et les informations de l'utilisateur",
                "cours" : "Programation 2",
                "note" : "À venir",
                "techno" : "Php, Laravel",
                "lien" : "https://gitlab.com/sam22may/tp3_prog_food.git",
                "git" : "https://gitlab.com/sam22may/tp3_prog_food.git"
            },
        ]
    )
}

export default textProjets