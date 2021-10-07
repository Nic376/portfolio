import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export enum SupportedThemes {
    LIGHT,
    DARK
}

const ThemeSelect = () => {
    const [theme, setTheme] = useState<SupportedThemes>(SupportedThemes.DARK)
    const [open, setOpen] = useState(false);

    const handleChange = (event: any) =>{
        setTheme(event.target.value)
    }
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    return (
      <div>
        <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
          Thème
        </Button>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="controlled-open-select-label"></InputLabel>
          <Select
            labelId="controlled-open-select-label"
            id="controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={theme}
            label="Theme"
            onChange={handleChange}
          >
            <MenuItem value={SupportedThemes.LIGHT}>Light</MenuItem>
            <MenuItem value={SupportedThemes.DARK}>Dark</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }

export default ThemeSelect


// -------------------------------------------------------------------------------------------------------------
// import { Box, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
// import React, { useState } from "react"

// export enum SupportedThemes {
//   LIGHT, 
//   DARK
// }

// const ThemeSelect = () => {
//   const [theme, setTheme] = useState<SupportedThemes>(SupportedThemes.LIGHT)

//   const handleChange = (event:any) => {
//     setTheme(event.target.value)
//   }

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl>
//         <InputLabel id="demo-simple-select-label">Theme</InputLabel>
//         <Select
//         labelId="demo-simple-select-label"
//         id="demon-simple-select"
//         value={theme}
//         label="Theme"
//         onChange={handleChange}
//         >
//           <MenuItem value={SupportedThemes.LIGHT}>Light</MenuItem>
//           <MenuItem value={SupportedThemes.DARK}>Dark</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   )
// }

// export default ThemeSelect