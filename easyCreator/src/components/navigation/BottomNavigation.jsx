import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Puzzle,List,Alert } from './Icons'; 
import { Link } from 'react-router-dom';

export default function SimpleBottomNavigation({btnValue}) {
  return (
    <Box sx={
      { 
        position: 'fixed',
        bottom: 0, 
        left: 0, 
        right: 0,
        backgroundColor: 'transparent',
      }
      } elevation={1}>
      <BottomNavigation
     
        sx={
          {
            backgroundColor: '#202225',
            display: 'flex',
            justifyContent: 'space-between',
            height:80,
          }}
      >
        <Link style={{display:'flex'}} to="/" ><BottomNavigationAction label="" icon={<Puzzle index={btnValue}/>} /></Link>
        <Link style={{display:'flex'}} to="/alerts" ><BottomNavigationAction label="" icon={<Alert index={btnValue}/>} /></Link>
        <Link style={{display:'flex'}} to="/list" ><BottomNavigationAction label="" icon={<List index={btnValue}/>} /></Link>
      </BottomNavigation> 
    </Box>
  );
}