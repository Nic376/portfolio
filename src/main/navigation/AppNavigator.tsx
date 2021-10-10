import { Switch, Route } from "react-router"
import React from "react"
import PresentationScreen from "../../Presentation/Presentation"
import ContactScreen from "../../Presentation/Contact"
import ProjetsScreen from "../../Presentation/Projets"
import ResumeScreen from "../../Presentation/Resume"
import { connect } from "react-redux"
import { getTheme } from "../Theme/selectors/themeSelector";
import { SupportedThemes } from "../components/ThemeSelect";
import { makeStyles } from "@material-ui/core/styles";
import BasicThemes from "../Theme/BasicThemes"

interface Props {
    theme: SupportedThemes,
}

const useStyles = makeStyles(() => ({
    LIGHT: {
            backgroundColor: BasicThemes.colors.primary,
            color: BasicThemes.colors.secondary,
    },
    DARK: {
            // backgroundColor: BasicThemes.colors.secondary,
            // color: BasicThemes.colors.primary,
    }
}))
const AppNavigator = (props: Props) => {
    const classes = useStyles()
    const getClass = () => {
        if (props.theme === SupportedThemes.LIGHT) {
            // return 'backgroundColor: #E0A451, color: #00588F'
            return classes.LIGHT
            // return "light"
        }
        else {
            // return 'backgroundColor: #00588F, color: #E0A451'
            return classes.DARK
            // return "dark"
        }
    }

    return (
        <Switch>
            <Route exact path="/">
                <div className={getClass()}>
                    <PresentationScreen />
                </div>
            </Route>

            <Route exact path="/resume">
                <div className={getClass()}>
                    <ResumeScreen />
                </div>
            </Route>

            <Route exact path="/projets">
                <div className={getClass()}>
                    <ProjetsScreen />
                </div>
            </Route>

            <Route exact path="/contact">
                <div>
                    <ContactScreen />
                </div>
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