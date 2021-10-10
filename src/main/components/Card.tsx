import React from 'react'

interface Props {
    source: any,
    titre: string,
    texte: string,
    styleClass: string
}

const ResumeCard = ( props: Props ) => {
    return (    
        <div className="wrapper phoneContainer">
            <div className="card col-6 offset-sm-2" >
                <img src={props.source} className={props.styleClass} alt="telephone cellulaire" />
                <h2 className="numero">{props.titre}</h2>
                <div className="card-body">
                    <p className="card-text">{props.texte} </p>
                </div>
            </div>
        </div>
    )

}

export default ResumeCard