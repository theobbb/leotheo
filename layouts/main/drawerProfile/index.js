import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { Toolbar, useMediaQuery, useTheme } from '@mui/material';

import DrawerContent from './drawerContent';

import { drawerWidth } from 'config';



export default function ProfileDrawer({ open, handleDrawerToggle, window }) {

  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      {!matchDownMD ? (
        <Drawer
          container={container}
          variant="persistent"
          anchor="right"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            width: 196,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 196,
              boxSizing: 'border-box',
              backgroundColor: theme.palette.primary.main
            },
          }}
        >
        
        <Toolbar />
        <DrawerContent />
          
        </Drawer>
      ) : (
    
        <Drawer
        container={container}
        variant="temporary"
        anchor="right"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
            width: 196,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            backgroundColor: theme.palette.primary.main
            },
        }}
        >
            <Toolbar />
        
        {open && DrawerContent}
          
        </Drawer>
      )}
    </Box>
  );
}

ProfileDrawer.propTypes = {
    open: PropTypes.bool,
    handleDrawerToggle: PropTypes.func,
    window: PropTypes.object
  };