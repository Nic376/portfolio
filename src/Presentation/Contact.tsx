import React from "react"
import "./Styles.css"
import { getTheme } from "../main/Theme/selectors/themeSelector";
import { SupportedThemes } from "../main/components/ThemeSelect";
import { connect } from "react-redux";
// import BasicThemes from "../main/Theme/BasicThemes"

interface Props {
    theme: SupportedThemes
}



const ContactScreen = (props: Props) => {
    const getColors = document.querySelector<HTMLElement>(':root')!;
    const computedColors = getComputedStyle(getColors)
    console.log(computedColors.getPropertyValue('--primary'))

    const theme = props.theme
    const main = theme + " bg"

    return (
        <div className={main}>
            contact+
        </div>

    )
}

const mapStateToProps = (state: any) => {
    return {
        theme:getTheme(state),
    }
}

export default connect(mapStateToProps, () => {})(ContactScreen)