import React from 'react'
import { AppBar, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ThemeSelect from '../components/ThemeSelect'

const useStyles = makeStyles(() => ({
        container: {
            margin:0
        },
        sections: {
            padding: "10px",
            flex: 1,
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between"
        },
        link: {
            paddingRight: "10px",
            color: "#ffffff"
        }
    })
)

const Header = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <AppBar className={classes.sections} position="relative">
                <div >
                    <Link to="/" className={classes.link}>App React</Link>
                </div>
                <div>
                    <Link to="/contact" className={classes.link}>Contact</Link>

                    <Link to="/projets" className={classes.link}>Projet</Link>
                    
                    <Link to="/resume" className={classes.link}>Resume</Link>
                </div>
                <ThemeSelect/>
            </AppBar>
        </div>
    )
}

export default Header