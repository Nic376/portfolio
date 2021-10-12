import { Switch, Route } from "react-router"
import React from "react"
import PresentationScreen from "../../Presentation/Presentation"
import ContactScreen from "../../Presentation/Contact"
import ProjetsScreen from "../../Presentation/Projets"
import ResumeScreen from "../../Presentation/Resume"
import { connect } from "react-redux"
import { getTheme } from "../Theme/selectors/themeSelector";
import { SupportedThemes } from "../components/ThemeSelect";
// import { makeStyles } from "@material-ui/core/styles";
// import BasicThemes from "../Theme/BasicThemes"

interface Props {
    theme: SupportedThemes,
}

// const useStyles = makeStyles(() => ({
//     LIGHT: {
//             backgroundColor: BasicThemes.colors.primary,
//             color: BasicThemes.colors.secondary,
//     },
//     DARK: {
//             // backgroundColor: BasicThemes.colors.secondary,
//             // color: BasicThemes.colors.primary,
//     }
// }))
const AppNavigator = (props: Props) => {
    // const classes = useStyles()


    return (
        <Switch>
            <Route exact path="/">
                    <PresentationScreen />
            </Route>

            <Route exact path="/resume">
                    <ResumeScreen />
            </Route>

            <Route exact path="/projets">
                    <ProjetsScreen />
            </Route>

            <Route exact path="/contact">
                    <ContactScreen />
            </Route>
        </Switch>
    )
}
const mapStateToProps = (state: any) => {
    return {
        theme:getTheme(state),
    }
}

export default connect(mapStateToProps, () => {})(AppNavigator)