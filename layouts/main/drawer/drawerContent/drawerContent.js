import * as React from 'react';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


import { Stack } from '@mui/system';
import { links } from '@utils/links';
import { Button } from '@mui/material';
import Link from 'next/link';

function MenuItem({link, index}) {

  return link && (
      <>
      <ListItem disablePadding>
        <Link href={link.path.toLowerCase()} style={{ textDecoration: 'none', color: 'inherit' }}>
        <ListItemButton sx={{ height: 28, marginLeft: index*3, marginTop: 0}}>
            <Typography>{link.name}</Typography>
        </ListItemButton>
        </Link>
      </ListItem> 
      
      {link.children.length > 0 && link.children.map((_link) => (
        <MenuItem key={_link.name} link={_link} index={index + 1} />
      ))}
      </>
      
  )
}

export default function DrawerContent () {
    return (
        <Stack direction="column"
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{height:'100%'}}
          >
          <Box sx={{width:'100%'}}>

            <Divider />
            <Toolbar />
            <Divider />
            <Stack direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              >
            {links.map((link) => (
              <List key={link.name} sx={{width:'100%'}}>
                <MenuItem 
                key={link.name} 
                link={link} 
                index={0} />
              </List>
            ))}
            </Stack>
          </Box>

          <Stack 
              sx={{width:'100%'}}>
            <List
              sx={{width:'100%'}}>
              <MenuItem text='Documentation' />
              
                {/*<ColorButton sx={{alignSelf: 'center'}} onClick={handleClickOpen} />   
                <ColorDialog
                  selectedValue={selectedValue}
                  open={open}
                  onClose={handleClose}
                />    */}          
              
            </List>
            
            
          </Stack>
        </Stack>
    )
}