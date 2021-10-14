import React from 'react'
import { AppBar, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ThemeSelect from '../components/ThemeSelect'
import logo from "../../images/Nicky_Logo.svg"
import { useTranslation, withTranslation } from "react-i18next";

const useStyles = makeStyles(() => ({
        container: {
            margin: "0 auto",
        },
        sections: {
            maxWidth: "100%",
            margin: "0 auto",
            padding: "8px",
            flex: 1,
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems: "center",
            backgroundImage: "linear-gradient(var(--primary), rgba(255, 255, 255, 0))"
        },
        main: {
            paddingLeft: "10px",
        },
        link: {
            padding: "0 50px",
            fontFamily: "DM Serif Display, serif",
            fontSize: "34px",
            textDecoration: "none",
            color: "#ffffff",
            filter: "drop-shadow(5px 6px 8px rgba(0, 0, 0, 0.7))",
            "&:hover": {
                color: "var(--secondary)",
                textDecoration: "overline",
            }
        }, 
        logo: {
            width: "200px"
        }
    })
)

const Header = () => {
    const classes = useStyles()
    const { t } = useTranslation("header")

    return (
        <div className={classes.container}>
            <AppBar className={classes.sections} position="relative">
                <div>
                    <Link to="/" className={classes.main}><img src={logo} alt="logo" className={classes.logo} /></Link>
                </div>
                <div>
                    <Link to="/resume" className={classes.link}>{t("resume")}</Link>

                    <Link to="/projets" className={classes.link}>{t("projets")}</Link>

                    <Link to="/apropos" className={classes.link}>{t("apropos")}</Link>

                    <Link to="/contact" className={classes.link}>{t("contact")}</Link>
                </div>
                <ThemeSelect/>
            </AppBar>
        </div>
    )
}

export default withTranslation("header")(Header)