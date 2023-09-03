import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Puzzle,List,Alert } from './Icons'; 

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(1);

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={2}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {console.log('VALUEE',value)}
        <BottomNavigationAction label="" icon={<Puzzle index={value}/>} />
        <BottomNavigationAction label="" icon={<Alert index={value}/>} />
        <BottomNavigationAction label="" icon={<List index={value}/>} />
      </BottomNavigation> 
    </Box>
  );
}