import React from 'react'
import { AppBar, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ThemeSelect from '../components/ThemeSelect'

const useStyles = makeStyles(() => ({
        container: {
            margin:0,
        },
        sections: {
            padding: "8px",
            flex: 1,
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0)"
        },
        main: {
            paddingRight: "10px",
            color: "#000000"
        },
        link: {
            padding: "0 50px",
            fontSize: "28px",
            textDecoration: "none",
            color: "#000000"
        }
    })
)

const Header = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <AppBar className={classes.sections} position="relative">
                <div >
                    <Link to="/" className={classes.main}>App React</Link>
                </div>
                <div className={classes.link}>
                    <Link to="/resume" className={classes.link}>Resume</Link>

                    <Link to="/projets" className={classes.link}>Projet</Link>

                    <Link to="/contact" className={classes.link}>Contact</Link>
                </div>
                <ThemeSelect/>
            </AppBar>
        </div>
    )
}

export default Header