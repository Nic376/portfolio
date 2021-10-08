import { Switch, Route } from "react-router"
import React from "react"
import PresentationScreen from "../../Presentation/Presentation"
import { connect } from "react-redux"
import { getTheme } from "../Theme/selectors/themeSelector";
import { SupportedThemes } from "../components/ThemeSelect";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
    theme: SupportedThemes
}

const useStyles = makeStyles(() => ({
    LIGHT: {
            backgroundColor: "#E0A451",
            color: "#00588F",
    },
    DARK: {
            backgroundColor: "#00588F",
            color: "#E0A451",
    }
}))
const AppNavigator = (props: Props) => {
    const classes = useStyles()
    const getClass = () => {
        if (props.theme === SupportedThemes.LIGHT) {
            // return 'backgroundColor: #E0A451, color: #00588F'
            return classes.LIGHT
        }
        else {
            // return 'backgroundColor: #00588F, color: #E0A451'
            return classes.DARK
        }
    }
    return (
        <Switch>
            <Route exact path="/">
                <div className={getClass()}>
                    <PresentationScreen />
                </div>
            </Route>

            <Route exact path="/contact">
                <div className={getClass()}>
                    contact
                </div>
            </Route>

            <Route exact path="/projets">
                <div className={getClass()}>
                    projets
                </div>
            </Route>

            <Route exact path="/resume">
                <div className={getClass()}>
                    Resume
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