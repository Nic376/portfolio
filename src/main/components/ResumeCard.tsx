import React from 'react'
import imgFantassin from "../../images/pfoto nic.jpg";
import imgPhotographe from "../../images/Me.jpg";


// interface Props {
//     source: any,
//     titre: string,
//     texte: string,
//     styleClass: string
// }

// const ResumeCard = ( props: Props ) => {
    const ResumeCard = () => {
    return (
        <div className="wrapper mb-5">
            <h1 className="text-center">Mon curriculum vitae</h1>
            <h2 className="mt-4 text-center">Expérience professionnelle</h2>
            <div className="resumeContainer">
                <div className="card col row align-content-center" >
                    <img src={imgPhotographe} className="card-img-top img-resume-fantassin align-self-center" alt="" />
                    <div className="card-body body-resume">
                        <h3 className="card-text text-center">Technicien en imagerie 2011-à ce jour</h3>
                        <h4 className="text-center mb-3">Forces armées canadiennes, Valcartier </h4>
                        <ul className="ps-5">
                            <li>Prise des portraits officiels pour le ministère de la Défense nationale;</li>
                            <li>Assurer la couverture médiatique des événements et exercices de la base Valcartier;</li>
                            <li>Utiliser de l’équipement photographique et vidéo;</li>
                            <li>Installation des éclairages lorsque nécessaire (photographique et vidéo) ;</li>
                            <li>Effectuer la production, la création et la réalisation de projet vidéo;</li>
                            <li>Maintenir et développer les compétences requissent sur les logiciels informatiques utilisés pour la photographie et le vidéo;</li>
                            <li>Voir au maintien du réseau informatique de la section d’imagerie;</li>
                            <li>Effectuer du dépannage technique lors des problèmes informatiques;</li>
                            <li>Procéder à la réparation et à l’entretien d’équipement photographique et vidéo;</li>
                            <li>Rechercher et archiver les travaux effectués par la section d’imagerie;</li>
                            <li>Gérer et donner de l’instruction aux autres photographes;</li>
                            <li>Agir comme instructeur avec support bilingue pour le cours de technicien en imagerie, donnée au niveau national;</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="resumeContainer">
                <div className="card col row align-content-center" >
                    <img src={imgFantassin} className="card-img-top img-resume-fantassin align-self-center" alt="" />
                    <div className="card-body body-resume">
                        <h3 className="card-text text-center">Fantassin et chef d’équipage 2000-2011</h3>
                        <h4 className="text-center mb-3">Forces armées canadiennes, Valcartier </h4>
                        <ul className="ps-5">
                            <li>Superviser une équipe et procéder à de la gestion administrative du personnel ;</li>
                            <li>Gérer une équipe, opérer et assurer l’entretien d’un véhicule blindé ;</li>
                            <li>Effectuer des tâches de contrôle de foules sur des périmètres sécurisés</li>
                            <li>Effectuer des barrages routiers, patrouiller des secteurs à risque et coordonner des offensives ciblées pour assurer la sécurité d’un secteur ;</li>
                            <li>Répondre aux alertes et urgences en tant que force de réaction rapide ;</li>
                            <li>Prodiguer les premiers soins lorsque nécessaire et au besoin alerter la police, les pompiers ou les ambulanciers ;</li>
                            <li>Travailler sous des conditions de stress intense, avec des horaires variables et sur appel ;</li>
                            <li>Utiliser du matériel de communications crypté et sécurisé à la fine pointe de la technologie ;</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="resumeContainer-small">
                <div className="card col row align-content-center" >
                    <div className="card-body body-resume">
                        <h3 className="card-text text-center">Formation professionnelle </h3>
                        <h4 className="text-center mb-3">(Formations données par les Forces armées canadiennes) </h4>
                        <ul className="ps-5">
                            <li>Cours de représentant des affaires publiques</li>
                            <li>Cours de technicien en imagerie (photo et vidéo)</li>
                            <li>Cours de chef d’équipage</li>
                            <li>Cours de superviseur (Alcool, drogues et jeux)</li>
                            <li>Cours de résolution de conflits</li>
                            <li>Cours de leadership</li>
                            <li>Cours de patrouilleur de reconnaissance</li>
                            <li>Cours de premiers soins et RCR</li>
                            <li>Cours de Fantassin</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="resumeContainer-small">
                <div className="card col row align-content-center" >
                    <div className="card-body body-resume">
                        <h3 className="card-text text-center">Formation académique </h3>
                        <ul className="ps-5">
                            <li>Attestation d’étude collégiale – Développement Web (en cours) 2022</li>
                            <p>Cégep Garneau</p>
                            <li>Diplôme d’études secondaires 1997</li>
                            <p>Polyvalente Charles-Gravel</p>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="resumeContainer-small">
                <div className="card col row align-content-center" >
                    <div className="card-body body-resume">
                        <h3 className="card-text text-center">Compétences</h3>
                        <ul className="ps-5">
                            <li>Bilingue (anglais et français)</li>
                            <li>Instructeur snowboard niveau 1</li>
                            <li>CDéveloppement web et programmation (HTML5, CSS3, JavaScript, JQuery, SQL, PHP, React)</li>
                            <li>Excellentes connaissances informatiques : Suite Microsoft (Word, Excel, PowerPoint, Outlook), Suite Adobe (Photoshop, Lightroom, Illustrator, Premier Pro, After Effects, Audible), plateforme de streaming (OBS, YouTube, Facebook, Twitch)</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="resumeContainer-small">
                <div className="card col row align-content-center" >
                    <div className="card-body body-resume">
                        <h3 className="card-text text-center">Traits personnels</h3>
                        <ul className="ps-5">
                            <li>Autonome</li>
                            <li>Résolution de problèmes</li>
                            <li>Travail d’équipe</li>
                            <li>Flexibilité et capacité d’adaptation</li>
                            <li>Gestion du stress</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="resumeContainer-small">
                <div className="card col row align-content-center" >
                    <div className="card-body body-resume">
                        <h3 className="card-text text-center">Activités et loisirs</h3>
                        <ul className="ps-5">
                            <li>Snowboard</li>
                            <li>vélo montagne</li>
                            <li>escalade</li>
                            <li>course</li>
                            <li>crossfit</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="resumeContainer-small">
                <div className="card col row align-content-center" >
                    <div className="card-body body-resume">
                        <h3 className="card-text text-center">Missions à l’étranger</h3>
                        <ul className="ps-5">
                            <p>Op Athena – Afghanistan 2004, 2007 et 2009</p>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ResumeCard
