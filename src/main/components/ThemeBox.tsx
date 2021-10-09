import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { connect } from "react-redux"
import { getTheme } from "../Theme/selectors/themeSelector";
import { SupportedThemes } from "./ThemeSelect";

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

const ThemeBox = (props: Props) => {
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
        <div className={getClass()}>
            Le reste de ma page
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        theme:getTheme(state),
    }
}
export default connect(mapStateToProps, () => {})(ThemeBox)