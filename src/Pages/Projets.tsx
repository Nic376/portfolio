import React from "react"
import ProjectCard from "../main/components/ProjectCard"
import img1 from "../images/site_DonjonsDragons.jpg"
import img2 from "../images/Quiz.jpg"
import img4 from "../images/Site_de_chien.jpg"
import img5 from "../images/sn_Appchat.jpg"
import img6 from "../images/Faitmonmenage.jpg"
import img7 from "../images/Nourriture communautaire.jpg"
import img8 from "../images/Liste.jpg"




const ProjetsScreen = () => {

        return (
            <div className="blur-bg">
                <div className="mb-5 wrapper row gx-5 h-100 paddingtop">
                    <h1 className="py-5 text-center color-text">Mes projets</h1>

                    {/* {projects.map((project: any) => (
                        <ProjectCard source={nextImg(project)} project={project.project} cours={project.cours} note={project.note} techno={project.techno} lien={project.lien} git={project.git} />
                    ))} */}

                    <ProjectCard 
                        source={img1}
                        project="Créer un site web de style Donjons et Dragons"
                        cours="Intégration 2"
                        note="107.5"
                        techno="Bootstrap"
                        lien="https://gitlab.com/Nicolas_Tremblay/tp2-intg2.git"
                        git="https://gitlab.com/Nicolas_Tremblay/tp2-intg2.git"
                    />

                    <ProjectCard 
                        source={img2}
                        project="Créer un quiz qui affiche nos résultat et les informations de l'utilisateur"
                        cours="Intégration 2"
                        note="95"
                        techno="Jquery"
                        lien="https://gitlab.com/Nicolas_Tremblay/tp3_-_quiz.git"
                        git="https://gitlab.com/Nicolas_Tremblay/tp3_-_quiz.git"
                    />
                    
                    <ProjectCard 
                        source=""
                        project="Travail en équie de 4 pour créer un site web de type CMS, frontend et backend"
                        cours="Programation 2"
                        note="96"
                        techno="Express, MongoDB, NodeJS"
                        lien="https://gitlab.com/Nicolas_Tremblay/tp3_jeu-de-memoire.git"
                        git="https://gitlab.com/Nicolas_Tremblay/tp3_jeu-de-memoire.git"
                    />
                    
                    <ProjectCard 
                        source={img4}
                        project="Créer un site web sur un sujet libre à l'aide d'un patron "
                        cours="Intégration 2"
                        note="99"
                        techno="Sass, BEM, HTML"
                        lien="https://gitlab.com/Nicolas_Tremblay/tp1-integration2.git"
                        git="https://gitlab.com/Nicolas_Tremblay/tp1-integration2.git"
                    />
                    
                    <ProjectCard 
                        source={img5}
                        project="Utilser un Api pour meubler notre site web et utiliser une pagination"
                        cours="Intégration 3"
                        note="100"
                        techno="React"
                        lien="https://github.com/Nic376/TP2-integration.git"
                        git="https://github.com/Nic376/TP2-integration.git"
                    />
                    
                    <ProjectCard 
                        source={img6}
                        project="Travail en équipe de 4 pour créer site web complet (maquette, backend, frontend et Api)"
                        cours="Projet de production 1"
                        note="90"
                        techno="Express, Mongoose"
                        lien="https://gitlab.com/Nicolas_Tremblay/tp2-intg2.git"
                        git="https://gitlab.com/Nicolas_Tremblay/tp2-intg2.git"
                    />
                    
                    <ProjectCard 
                        source={img7}
                        project="Travail en équipe de 2 pour créer un site pour pouvoir déposer ou aller chercher des nourritures communautaires"
                        cours="Programation 2"
                        note="À venir"
                        techno="Php, Laravel"
                        lien="https://nourriture-communautaire.slemay.devwebgarneau.com/"
                        git="https://gitlab.com/sam22may/tp3_prog_food.git"
                    />
                    
                    <ProjectCard 
                        source={img8}
                        project="Faire une application qui nous permet de faire un liste d'épicerie"
                        cours="Intégration 2"
                        note="100"
                        techno="VueJs, Python"
                        lien=""
                        git="https://gitlab.com/sam22may/tp4-liste-epicerie"
                    />
                
                </div>
            </div>
            )
}

export default ProjetsScreen
