import React from "react";
import portrait from "../images/Photo ID.jpg"
import img1 from "../images/02-Presentation-02_Cheval.jpg"
import img2 from "../images/02-Presentation-02_Feuille.jpg"
import img3 from "../images/02-Presentation-03_Champ.jpg"
import img4 from "../images/02-Presentation-04_Souvenir.jpg"
import img5 from "../images/02-Presentation-05_Chat.jpg"
import img6 from "../images/02-Presentation-06_Portrait.jpg"
import img7 from "../images/VL2013-0018-001.jpg"
import img8 from "../images/_DSC0063 copy.jpg"
import note from "../images/note.jpg"

const AProposScreen = () => {
    return (
        <div className="blur-bg py-5 row d-flex justify-content-center">

            <div className="pb-5 wrapper row gx-5 d-flex justify-content-center paddingtop h-100">
                <h1 className="pt-5 text-center color-text">À propos</h1>
                <div className="col-10">
                    <div className="card col row align-content-center" >

                        <img src={portrait} className="card-img-top img-project align-self-center w-50 " alt=""/>
                        <div className="card-body body-project">
                            <p>Je suis né à Alma, dans la magnifique région géographique qu’est le lac Saint-Jean. Cependant, les cinq premières années de ma vie se sont déroulées en Amérique du Sud, plus précisément au Pérou. Mes parents y représentaient les intérêts du Canada dans un projet de développement. C’est au retour de cette expérience que nous nous sommes établis dans la ville de ma naissance. Par la suite, j’ai déménagé dans les villes de Québec, Chicoutimi et Montréal. J’ai appris très jeune à m’adapter à de nouveaux milieux.</p>
                            <p>À mes côtés, sur les photos de famille, se trouve mon frère David, dont je suis de 4 ans le cadet. Celui-ci à étudier à l’UQAM en science politique et est maintenant facteur à Montréal. Pour ma part, j’ai obtenu mon diplôme d’étude secondaire à Chicoutimi en 1998. Par la suite, j’ai décidé d’émigrer vers la région métropolitaine de Montréal afin d’y poursuivre une technique en infographie. Après ma deuxième année complétée, j’ai évalué de nouvelles options qui conviendraient mieux à mes exigences. C’est ainsi que j’ai joint les rangs des forces armées canadiennes.</p>
                            <p>Je suis souvent en vélo de montage, sur un mur d'escalade ou sur mon snowboard. Je détiens une License de pilote, vol a vue seulement, une License A de parachutiste, un brevet de moulinet pour l'escalade et je suis moniteur de niveau 1 en snowboard.</p>
                            <p>Je me suis enrôlé au sein des forces canadiennes le 20 septembre 2000. J’ai été déployé à trois reprises en missions en Afghanistan : la première en 2004 où je fus utilisé comme canonnier au sein d’une section d’infanterie. En 2007, j’étais utilisé comme servant sur le détachement des armes soit : 84mm, C-6 et mortier 60mm. J’ai également été utilisé comme canonnier, signaleur et commandant de section lors d’opérations offensives. Finalement en 2009, j’ai été utiliser comme commandant de char, adjoint de section et commandant de section.</p>
                            <p>En 2011 j’ai de nouveau réorienté mes objectifs, ce qui m’a mené à un changement de carrière au sein des forces. Je suis ainsi devenu un technicien en imagerie, j’étais photographe et vidéographe. J’ai appris à me développer par moi-même et à me débrouiller pour que tout les systèmes informatiques et l’équipement soient toujours opérationnels. En 2016 j’ai été muté à l’école nationale d’imagerie pour être instructeur et fournir un support bilingue aux étudiants qui en avaient besoin. Cela m’a permis d’améliorer considérablement mon anglais et fut une expérience enrichissante.</p>
                            <p>En 2020 après 20 ans dans les forces canadiennes j’ai eu l’opportunité de choisir une seconde carrière à
                                l’extérieur des forces, c’est ce qui m’a mené vers le développement web.</p>
                            <p>Le cours de développement web est pour moi une occasion de prouver mon professionnalisme, ma
                            détermination et mon sens des responsabilités. En effet, ma grande capacité d’adaptation m’a toujours
                            permis d’atteindre les hauts standards requis par la profession de militaire. Je suis maintenant prêt à
                            relever de nouveaux défis.</p>
                            <q>" Ce n'est pas parce que les choses sont difficiles que nous n'osons pas, c'est parce que nous n'osons
                            pas qu'elles sont difficiles. "
                                <br/>- Sénèque
                            </q>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-100 col-12 px-5 pb-5">
                <div className="card col row" >
                    <h2 className="text-center pt-3">Quelques unes de mes photos</h2>
                    <div className="card-body body-project row align-self-center">
                        <img src={img1} alt="" className="col-3 g-3 " />
                        <img src={img2} alt="" className="col-3 g-3 " />
                        <img src={img3} alt="" className="col-3 g-3 " />
                        <img src={img4} alt="" className="col-3 g-3 " />
                        <img src={img5} alt="" className="col-3 g-3 " />
                        <img src={img6} alt="" className="col-3 g-3 " />
                        <img src={img7} alt="" className="col-3 g-3 " />
                        <img src={img8} alt="" className="col-3 g-3 " />
                    </div>
                </div>
            </div>

            <div className="h-100 col-6 px-5 pb-5">
                <div className="card col row" >
                    <h2 className="text-center pt-3">Langages et technologies utilisées</h2>
                    <div className="card-body body-project row align-self-center ps-5">
                        <ul>
                            <li>HTML</li>
                            <li>CSS/SCSS</li>
                            <li>Javascript</li>
                            <li>PHP</li>
                            <li>Python</li>
                            <li>Bootstrap</li>
                            <li>JQuery</li>
                            <li>Express</li>
                            <li>React</li>
                            <li>VueJS</li>
                            <li>Typescript</li>
                            <li>Laravel</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="h-100 col-6 px-5 pb-5">
                <div className="card col row" >
                    <h2 className="text-center pt-3">Applications utilisées</h2>
                    <div className="card-body body-project row align-self-center ps-5">
                        <ul>
                            <li>Visual Studio Code</li>
                            <li>GIT</li>
                            <li>Postman</li>
                            <li>Teams</li>
                            <li>Azure DevOps</li>
                            <li>MongoDB</li>
                            <li>WAMP</li>
                            <li>Figma</li>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>Audition</li>
                            <li>After Effetct</li>
                            <li>Premier pro</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="h-100 col-6 px-5 pb-5">
                <div className="card col row" >
                    <h2 className="text-center pt-3">AEC développement web - Notes</h2>
                    <div className="card-body body-project row align-self-center">
                        <img src={note} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AProposScreen