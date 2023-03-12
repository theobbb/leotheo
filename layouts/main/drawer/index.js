import * as React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { Button, ButtonBase, IconButton, styled, ThemeProvider, useMediaQuery, useTheme } from '@mui/material';
import { Stack } from '@mui/system';
import { FavoriteBorder } from '@mui/icons-material';
//import ColorDialog from './colorDialog';
import DrawerContent from './drawerContent/drawerContent';
import DrawerHeader from './drawerHeader/drawerHeader';


//import { drawerWidth } from 'config';


export default function MainDrawer({ open, handleDrawerToggle, window }) {

  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  const container = window !== undefined ? () => window().document.body : undefined;


  const drawerContent = useMemo(() => <DrawerContent />, []);
  const drawerHeader = useMemo(() => <DrawerHeader open={open} />, [open]);

  return (
    <Box>
      {!matchDownMD ? (
        <Drawer
          container={container}
          variant="permanent"
          anchor="left"
          ModalProps={{ keepMounted: true }}
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 2,
            width: 196,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 196,
              boxSizing: 'border-box',
              backgroundColor: theme.palette.primary.main
            },
          }}
        >
        
        {drawerHeader}
        {drawerContent}
          
        </Drawer>
      ) : (
    
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 2,
            width: 196,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 196,
              boxSizing: 'border-box',
              backgroundColor: theme.palette.primary.main
            },
          }}
        >
        
        {open && drawerHeader}
        {open && drawerContent}
        
        </Drawer>
      )}
    </Box>
  );
}

MainDrawer.propTypes = {
  open: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  window: PropTypes.object
};

const ColorButton = styled(IconButton)({
  variant: "solid",
  //backgroundColor: color[400],
  height: 34,
  width: 34,
  borderRadius: 4,
  marginLeft: 16,
  marginBottom: 8,
  marginTop: 24,
  '&:hover': {
    //backgroundColor: color[500],
  },
});