import React from 'react'
import { AppBar, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ThemeSelect from '../components/ThemeSelect'
import logo from "../../images/Nicky_Logo.svg"

const useStyles = makeStyles(() => ({
        container: {
            margin: "0 auto",
        },
        sections: {
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
            fontSize: "28px",
            textDecoration: "none",
            color: "#000000"
        }, 
        logo: {
            width: "200px"
        }
    })
)

const Header = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <AppBar className={classes.sections} position="relative">
                <div>
                    <Link to="/" className={classes.main}><img src={logo} alt="logo" className={classes.logo} /></Link>
                </div>
                <div className={classes.link}>
                    <Link to="/resume" className={classes.link}>Resume</Link>

                    <Link to="/projets" className={classes.link}>Projets</Link>

                    <Link to="/contact" className={classes.link}>Contact</Link>
                </div>
                <ThemeSelect/>
            </AppBar>
        </div>
    )
}

export default Header