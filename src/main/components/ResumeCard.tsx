import React from 'react'
import imgFantassin from "../../images/pfoto nic.jpg";
import imgPhotographe from "../../images/Me.jpg";
import { useTranslation, withTranslation } from "react-i18next";
    const ResumeCard = () => {
    const { t } = useTranslation("pageResume")

    return (
        <div className="wrapper pb-5 paddingtop">

            <h1 className="pt-5 text-center color-text">{t("h1")}</h1>

            <div className="resumeContainer-small pt-5">
                <div className="card col row align-content-center" >
                    <h2 className="card-text text-center my-4 ">{t("expPro")}</h2>
                </div>
            </div>

            <div className="resumeContainer">
                <div className="card col row align-content-center" >
                    <img src={imgPhotographe} className="card-img-top img-resume-fantassin align-self-center" alt="" />
                    <div className="card-body body-resume">
                        <h3 className="card-text text-center">{t("imgtech")}</h3>
                        <h4 className="text-center mb-3">{t("forces")}</h4>
                        <ul className="ps-5">
                            <li>{t("imgtech1")}</li>
                            <li>{t("imgtech2")}</li>
                            <li>{t("imgtech3")}</li>
                            <li>{t("imgtech4")}</li>
                            <li>{t("imgtech5")}</li>
                            <li>{t("imgtech6")}</li>
                            <li>{t("imgtech7")}</li>
                            <li>{t("imgtech8")}</li>
                            <li>{t("imgtech9")}</li>
                            <li>{t("imgtech10")}</li>
                            <li>{t("imgtech11")}</li>
                            <li>{t("imgtech12")}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="resumeContainer">
                <div className="card col row align-content-center" >
                    <img src={imgFantassin} className="card-img-top img-resume-fantassin align-self-center" alt="" />
                    <div className="card-body body-resume">
                        <h3 className="card-text text-center">{t("fantassin")}</h3>
                        <h4 className="text-center mb-3">{t("forces")}</h4>
                        <ul className="ps-5">
                            <li>{t("fant1")}</li>
                            <li>{t("fant2")}</li>
                            <li>{t("fant3")}</li>
                            <li>{t("fant4")}</li>
                            <li>{t("fant5")}</li>
                            <li>{t("fant6")}</li>
                            <li>{t("fant7")}</li>
                            <li>{t("fant8")}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="resumeContainer-small">
                <div className="card col row align-content-center" >
                    <h3 className="card-text text-center my-4">{t("formpro")} </h3>
                    <h4 className="text-center mb-3">({t("formprocomp")}) </h4>
                    <div className="card-body body-resume my-0">
                        <ul className="ps-5">
                            <li>{t("formpro1")}</li>
                            <li>{t("formpro2")}</li>
                            <li>{t("formpro3")}</li>
                            <li>{t("formpro4")}</li>
                            <li>{t("formpro5")}</li>
                            <li>{t("formpro6")}</li>
                            <li>{t("formpro7")}</li>
                            <li>{t("formpro8")}</li>
                            <li>{t("formpro9")}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="resumeContainer-small">
                <div className="card col row align-content-center" >
                    <h3 className="card-text text-center my-4">{t("formacad")}</h3>
                    <div className="card-body body-resume my-0">
                        <ul className="ps-5">
                            <li>{t("formacad1")}</li>
                            <p>Cégep Garneau</p>
                            <li>{t("formacad2")}</li>
                            <p>Polyvalente Charles-Gravel</p>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="resumeContainer-small">
                <div className="card col row align-content-center" >
                    <h3 className="card-text text-center my-4">{t("comp")}</h3>
                    <div className="card-body body-resume my-0">
                        <ul className="ps-5">
                            <li>{t("comp1")}</li>
                            <li>{t("comp2")}</li>
                            <li>{t("comp3")}</li>
                            <li>{t("comp4")}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="resumeContainer-small">
                <div className="card col row align-content-center" >
                    <h3 className="card-text text-center my-4">{t("trait")}</h3>
                    <div className="card-body body-resume my-0">
                        <ul className="ps-5">
                            <li>{t("trait1")}</li>
                            <li>{t("trait2")}</li>
                            <li>{t("trait3")}</li>
                            <li>{t("trait4")}</li>
                            <li>{t("trait5")}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="resumeContainer-small">
                <div className="card col row align-content-center" >
                    <h3 className="card-text text-center my-4">{t("loisirs")}</h3>
                    <div className="card-body body-resume my-0">
                        <ul className="ps-5">
                            <li>{t("loisirs1")}</li>
                            <li>{t("loisirs2")}</li>
                            <li>{t("loisirs3")}</li>
                            <li>{t("loisirs4")}</li>
                            <li>{t("loisirs5")}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="resumeContainer-small">
                <div className="card col row align-content-center" >
                    <h3 className="card-text text-center my-4">{t("missions")}</h3>
                    <div className="card-body body-resume my-0">
                        <ul className="ps-5">
                            <li>Op Athena – Afghanistan 2004, 2007 et 2009</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default withTranslation()(ResumeCard)
