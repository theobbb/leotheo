import React, { useEffect, useState } from 'react';
import Header from './header/index';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { styled, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';

import MainDrawer from './drawer';

//import { drawerWidth } from 'config';
import ProfileDrawer from './drawerProfile';
import { Main } from 'next/document';


export default function Layout ({ children }) {

    const theme = useTheme();

    const [open, setOpen] = useState(false);
    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const [openProfile, setOpenProfile] = useState(false);
    const handleDrawerProfileToggle = () => {
        setOpenProfile(!openProfile);
    };

    return (
      <div>


      <Box sx={{ display: 'flex', width: '100%' }}>
          <CssBaseline />
          <Header handleDrawerToggle={handleDrawerToggle} openProfile={openProfile} handleDrawerProfileToggle={handleDrawerProfileToggle} />

          <MainDrawer handleDrawerToggle={handleDrawerToggle} open={open} />
          
          <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: theme.palette.primary.main }}
          >
              <Toolbar />

              <ProfileDrawer handleDrawerToggle={handleDrawerProfileToggle} open={openProfile} />

              <Box sx={{ maxWidth: "100%", mx: "auto" }}>
                {children}
              </Box>
              
              {/*<Main open={openProfile}>
                  {children}
              </Main>*/}
              
          </Box>
      </Box>
      </div>
  );

    /*
    return (
        <div>

        <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

        </Head>
        <Box sx={{ display: 'flex', width: '100%' }}>
            <CssBaseline />
            <Header handleDrawerToggle={handleDrawerToggle} openProfile={openProfile} handleDrawerProfileToggle={handleDrawerProfileToggle} />

            <MainDrawer handleDrawerToggle={handleDrawerToggle} open={open} />
            
            <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: theme.palette.primary.main }}
            >
                <Toolbar />

                <ProfileDrawer handleDrawerToggle={handleDrawerProfileToggle} open={openProfile} />

                <Main open={openProfile}>
                    {children}
                </Main>
                
            </Box>
        </Box>
        </div>
    );*/
};
/*
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: 0,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: `${196}px`
        
      }),
    }),
  );*/
