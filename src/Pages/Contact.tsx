import React from "react"
import { getTheme } from "../main/Theme/selectors/themeSelector";
import { SupportedThemes } from "../main/components/ThemeSelect";
import { connect } from "react-redux";
import phone from "../images/smartphone-153650.svg"
import courriel from "../images/letter-147697.svg"
import ContactCard from "../main/components/ContactCard";
import { useTranslation, withTranslation } from "react-i18next";


interface Props {
    theme: SupportedThemes
}



const ContactScreen = (props: Props) => {
    const { t } = useTranslation("pageContact")
    const phoneText = t("phoneText")
    const emailText = t("emailText")

    return (
        <div className="blur-bg text-center height-vh">
            <div className="paddingtop">
                <h1 className="pt-5 text-center color-text">{t("contact")}</h1>
          
                <div className="wrapper text-center ">
                    <div className="contactMargin">
                        <ContactCard source={phone} titre="581-996-5716" texte={phoneText} styleClass=" img-contact-phone" styleNumero="numero cellNumber"/>
                    </div>
                    <div className="courrielMargin">
                        <ContactCard source={courriel} titre="Nick376@hotmail.fr" texte={emailText} styleClass=" img-contact-courriel" styleNumero="numero" />
                    </div>
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

export default connect(mapStateToProps, () => {})(withTranslation("pageContact")(ContactScreen))