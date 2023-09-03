import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Puzzle,List,Alert } from './Icons'; 
import { Link } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={2}>
      <BottomNavigation
        sx={{backgroundColor: '#202225'}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
       
        <Link to="/" ><BottomNavigationAction label="" icon={<Puzzle index={value}/>} /></Link>
        <Link to="/alerts" ><BottomNavigationAction label="" icon={<Alert index={value}/>} /></Link>
        <Link to="/list" ><BottomNavigationAction label="" icon={<List index={value}/>} /></Link>
      </BottomNavigation> 
    </Box>
  );
}