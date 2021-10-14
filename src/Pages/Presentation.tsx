import React from "react"
import { useTranslation, withTranslation } from "react-i18next";
import { Link } from 'react-router-dom'
import cancer from "../images/Cancer.png"
import leo from "../images/Leo.png"
import taureau from "../images/Taureau.png"
import ours from "../images/grande ourse.png"


const PresentationScreen = () => {
    const { t } = useTranslation("pagePresentation")

    return (
        <div className="presentation-bg">
            <div className="text-white text-center paddingtop">
                <h1 className="pt-5">Nicolas Tremblay</h1>
                <h2 className="mt-3">{t("portfolio")} </h2>
                <h3>{t("univers")}</h3>
            </div>
            <div className="constellation-wrapper d-flex flex-column align-content-center row">
                <Link to="/resume" className="col-3 d-flex flex-column align-content-center constellation-hover">
                        <img src={cancer} alt="constellation" className="constellation " />
                        <h2 className="col text-center">{t("resume")}</h2>
                </Link>
                <Link to="/projets" className="col-3 d-flex flex-column align-content-center constellation-hover">
                    <img src={ours} alt="constellation" className="constellation "/>
                    <h2 className="col text-center">{t("projets")}</h2>
                </Link>
                <Link to="/apropos" className="col-3 d-flex flex-column align-content-center constellation-hover">
                    <img src={taureau} alt="constellation" className="constellation "/>
                    <h2 className="col text-center">{t("apropos")}</h2>
                </Link>
                <Link to="/contact" className="col-3 d-flex flex-column align-content-center constellation-hover">
                    <img src={leo} alt="constellation" className="constellation " />
                    <h2 className="col text-center">{t("contact")}</h2>
                </Link>
            </div>

        </div>
    )
}

export default withTranslation("pagePresentation")(PresentationScreen)