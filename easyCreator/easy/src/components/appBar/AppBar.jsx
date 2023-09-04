import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {EasyIcon,BtnTheme}from './Icons'

export default function ButtonAppBar() {

  const [theme, setValue] = React.useState(0);
  const clickBtnTheme = () => {
    const themeState = theme === 0 ? 1 : 0
    setValue(themeState)
  }

  return (
    <Box >
      <AppBar position="static" sx={{backgroundColor: 'transparent', boxShadow:0}}>
        <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: '#202225',
              height:80,
              pl:'29px',
              pr:'29px'
            }}
        >
          <EasyIcon />
          <BtnTheme click={clickBtnTheme} theme={theme} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}