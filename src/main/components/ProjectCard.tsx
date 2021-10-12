import React from "react"

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
    return (
        <div className="projectContainer col-6">
            <div className="card col row align-content-center" >
                <img src={props.source} className="card-img-top img-project align-self-center" alt="" />
                <div className="card-body body-project">
                    <p><b>Projet : </b>{props.project}</p>
                    <p><b>Cours : </b>{props.cours}</p>
                    <p><b>Note : </b>{props.note}%</p>
                    <p><b>Technologie : </b>{props.techno}</p>
                    <p><b>Lien : </b>{props.lien}</p>
                    <p><b>Git : </b><a href={props.git}>{props.git}</a></p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard

