import { Switch, Route } from "react-router"
import React from "react"
import PresentationScreen from "../../Pages/Presentation"
import ContactScreen from "../../Pages/Contact"
import ProjetsScreen from "../../Pages/Projets"
import ResumeScreen from "../../Pages/Resume"
import { connect } from "react-redux"
import { getTheme } from "../Theme/selectors/themeSelector";
import { SupportedThemes } from "../components/ThemeSelect";

interface Props {
    theme: SupportedThemes,
}

const AppNavigator = (props: Props) => {

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