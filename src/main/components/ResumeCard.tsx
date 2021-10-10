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
        <>
            <h1 className="text-center">Mon curriculum vitae</h1>
            <h2 className="mt-4 text-center">Expérience professionnelle</h2>
            <div className="wrapper resumeContainer">
                <div className="card col-10 row justify-content-center align-content-center" >
                    <img src={imgPhotographe} className="card-img-top img-resume-fantassin align-self-center" alt="" />
                    <div className="card-body body-resume">
                        <h2 className="card-text text-center">Technicien en imagerie 2011-à ce jour</h2>
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

            <div className="wrapper resumeContainer">
                <div className="card col-11 offset-sm-1" >
                    <img src={imgFantassin} className="card-img-top img-resume-fantassin" alt="" />
                    <div className="card-body body-resume">
                        <h2 className="card-text text-center">Fantassin et chef d’équipage 2000-2011</h2>
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


        </>
    )
}

export default ResumeCard