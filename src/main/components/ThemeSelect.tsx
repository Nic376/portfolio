import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { toggleTheme } from '../Theme/actions/themeActions';
import { getTheme } from '../Theme/selectors/themeSelector';
import pastilleBleu from "../../images/Pastille bleu.png"
import pastilleJaune from "../../images/pastille jaune.png"

export enum SupportedThemes {
    LIGHT = "LIGHT",
    DARK = "DARK"
}

interface Props {
  theme: SupportedThemes
  actions: {
    toggleTheme: (theme: SupportedThemes) => void
  }
}

const ThemeSelect = (props: Props) => {
    const [theme, setTheme] = useState<SupportedThemes>(SupportedThemes.DARK)
    const [open, setOpen] = useState(false)

    const handleChange = (event: any) =>{
      const newTheme = event.target.value
        setTheme(newTheme)
        props.actions.toggleTheme(newTheme)
        setColors(newTheme)
    }
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

    const setColors = (theme: SupportedThemes) => {
      const getColors = document.querySelector<HTMLElement>(':root')!;
      if(theme === "DARK") {
        getColors.style.setProperty('--primary', '#00588F')
        getColors.style.setProperty('--secondary', '#E0A451')
        getColors.style.setProperty('--text', '#ffffff')
      }
      if(theme === "LIGHT"){
        getColors.style.setProperty('--primary', '#E0A451')
        getColors.style.setProperty('--secondary', '#00588F')
        getColors.style.setProperty('--text', '#000000')
      }
    }
  
    return (
      <div className="row theme-div d-flex justify-content-center">
        <Button sx={{ mt: 2 }} onClick={handleOpen} className="theme-button text-white">
          Thème
        </Button>
        <FormControl className="theme-form ">
          <InputLabel id="controlled-open-select-label " ></InputLabel>
          <Select
            labelId="controlled-open-select-label"
            id="controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={theme}
            label="Theme"
            onChange={handleChange}
            sx={{ height: 50 }}
          >
            <MenuItem value={SupportedThemes.LIGHT}><img src={pastilleJaune} alt="" className="pastille "/></MenuItem>
            <MenuItem value={SupportedThemes.DARK}><img src={pastilleBleu} alt="" className="pastille "/></MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }

const mapStateToProps = (state: any) => {
  return {
    theme: getTheme(state)
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    actions:bindActionCreators({
      toggleTheme: toggleTheme,
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSelect)