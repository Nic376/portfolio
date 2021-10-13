import React from "react"
import { getTheme } from "../main/Theme/selectors/themeSelector";
import { SupportedThemes } from "../main/components/ThemeSelect";
import { connect } from "react-redux";
import phone from "../images/smartphone-153650.svg"
import courriel from "../images/letter-147697.svg"
import ContactCard from "../main/components/ContactCard";

interface Props {
    theme: SupportedThemes
}



const ContactScreen = (props: Props) => {
    const phoneText = "La meilleur façon de me rejoindre c'est de me contacter directement par telephone"
    const emailText = "Vous pouvez aussi prendre la chance de m'envoyer un courriel"

    return (
        <div className="blur-bg text-center height-vh">
    
            <h1 className="py-5 text-center ">Me contacter</h1>
          
            <div className="wrapper text-center ">
                <h2>Nicolas Tremblay</h2>
                <div className="contactMargin">
                    <ContactCard source={phone} titre="581-996-5716" texte={phoneText} styleClass="card-img-top img-contact-phone" />
                </div>
                <div className="courrielMargin">
                    <ContactCard source={courriel} titre="Nick376@hotmail.fr" texte={emailText} styleClass="card-img-top img-contact-courriel" />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        theme:getTheme(state),
    }
}

export default connect(mapStateToProps, () => {})(ContactScreen)