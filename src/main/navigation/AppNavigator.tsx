import { Switch, Route } from "react-router"
import React from "react"
import PresentationScreen from "../../Presentation/Presentation"

const AppNavigator = () => {
    return (
        <Switch>
            <Route exact path="/">
                <PresentationScreen />
            </Route>

            <Route exact path="/contact">
                <div>
                    contact
                </div>
            </Route>

            <Route exact path="/projets">
                <div>
                    projets
                </div>
            </Route>

            <Route exact path="/resume">
                <div>
                    Resume
                </div>
            </Route>

        </Switch>
    )
}

export default AppNavigator