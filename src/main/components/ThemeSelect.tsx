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
    const [open, setOpen] = useState(false);

    const handleChange = (event: any) =>{
      const newTheme = event.target.value
        setTheme(newTheme)
        props.actions.toggleTheme(newTheme)
    }
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    return (
      <div>
        <Button sx={{ mt: 2 }} onClick={handleOpen}>
          Thème
        </Button>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="controlled-open-select-label" ></InputLabel>
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
            <MenuItem value={SupportedThemes.LIGHT}>Light</MenuItem>
            <MenuItem value={SupportedThemes.DARK}>Dark</MenuItem>
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