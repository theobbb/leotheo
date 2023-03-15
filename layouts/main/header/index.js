import Link from 'next/link';

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Box, ButtonBase, IconButton, Stack, styled, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react";

import MenuIcon from '@mui/icons-material/Menu';

//import { drawerWidth } from 'config';
import HeaderContent from './headerContent';
import Search from './headerContent/search';

export default function Header({ open, handleDrawerToggle, openProfile, handleDrawerProfileToggle }) {


/*
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
*/

  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  const toggleButton = (
    <IconButton
        disableRipple
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        edge="start"
        color="secondary"
        sx={{ color: 'text.primary',  ml: { xs: 0, lg: -2 } }}
    >
        <MenuIcon />
    </IconButton>
  )
    // common header
  const mainHeader = (
      <Toolbar>
        <Stack direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
        sx={{ width: '100%' }}>
          <Box>
            {matchDownMD && toggleButton}
            <Search />
          </Box>
          <Box>
            <HeaderContent openProfile={openProfile} handleDrawerProfileToggle={handleDrawerProfileToggle} />
          </Box>
        </Stack>
          
      </Toolbar>
  );
  // app-bar params
  const appBar = {

      position: 'fixed',
      color: 'inherit',
      elevation: 0,
      sx: {
        zIndex: (theme) => theme.zIndex.drawer - 1,
        backgroundColor: theme.palette.primary.main,
          borderBottom: `1px solid ${theme.palette.divider}`,
          width: matchDownMD? '100%' : `calc(100% - ${196}px)`,
          // boxShadow: theme.customShadows.z1
      }
  };

  return (
      <>
          {!matchDownMD ? (
              <AppBar open={open} {...appBar}>
                  {mainHeader}
              </AppBar>
          ) : (
              <AppBar {...appBar}>{mainHeader}</AppBar>
          )}
      </>
  );
}


const AppBarStyled = styled(AppBar, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
      marginLeft: 196,
      width: `calc(100% - ${196}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
      })
  })
}));

