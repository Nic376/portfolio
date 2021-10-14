import React from "react"
import { useTranslation, withTranslation } from "react-i18next";
import { Link } from 'react-router-dom'
import cancer from "../images/Cancer.png"
import gemini from "../images/Gemini.png"
import leo from "../images/Leo.png"


const PresentationScreen = () => {
    const { t } = useTranslation("pagePresentation")

    return (
        <div className="presentation-bg">
            <div className="text-white text-center paddingtop">
                <h1 className="pt-5">Nicolas Tremblay</h1>
                <h2 className="mt-3">{t("portfolio")} </h2>
                <h3>{t("univers")}</h3>
            </div>
            <Link to="/resume" className="row justify-content-center constellation-wrapper ">
                <div className="col-4 d-flex flex-column align-content-center constellation-hover">
                    <img src={cancer} alt="constellation" className="constellation" />
                    <h2 className="col text-center">Resume</h2>
                </div>
                <Link to="/projets" className="col-4 d-flex flex-column align-content-center constellation-hover">
                    <img src={gemini} alt="constellation" className="constellation"/>
                    <h2 className="col text-center">Projets</h2>
                </Link>
                <Link to="/contact" className="col-4 d-flex flex-column align-content-center constellation-hover">
                    <img src={leo} alt="constellation" className="constellation" />
                    <h2 className="col text-center">Contact</h2>
                </Link>

            </Link>
        </div>
    )
}

export default withTranslation("pagePresentation")(PresentationScreen)