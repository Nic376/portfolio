import React from "react"
import { useTranslation, withTranslation } from "react-i18next";

interface Props {
    source: any,
    project: string,
    cours: string,
    note: string,
    techno: string,
    lien: string,
    git: string

}

const ProjectCard = ( props: Props ) => {
    const { t } = useTranslation("projectCard")

    return (
        <div className="projectContainer col-6">
            <div className="card col row align-content-center" >
                <img src={props.source} className="card-img-top img-project align-self-center" alt="" />
                <div className="card-body body-project">
                    <p><b>{t("projet")} </b>{props.project}</p>
                    <p><b>{t("cours")} </b>{props.cours}</p>
                    <p><b>{t("note")} </b>{props.note}%</p>
                    <p><b>{t("techno")} </b>{props.techno}</p>
                    <p><b>{t("lien")} </b>{props.lien}</p>
                    <p><b>Git : </b><a href={props.git}>{props.git}</a></p>
                </div>
            </div>
        </div>
    )
}

export default withTranslation("projectCard")(ProjectCard)

