import React from 'react'

interface Props {
    source: any,
    titre: string,
    texte: string,
    styleClass: string,
    styleNumero: string,
}

const ContactCard = ( props: Props ) => {
    return (
        <div className="wrapper phoneContainer row justify-content-center contactMargin">
            <div className="card col-md-6 height" >
                <img src={props.source} className={props.styleClass} alt="" />
                <h2 className={props.styleNumero}>{props.titre}</h2>
                <div className="card-body height">
                    <p className="card-text">{props.texte}</p>
                </div>
            </div>
        </div>
    )

}

export default ContactCard