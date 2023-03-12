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

const links = [
  {
    name: "Dashboard",
    path: '/dashboard',
    children: [],
  },
  {
    name: "Content",
    path: '/content',
    children: [
      {
        name: "Posts",
        path: '/content/posts',
        children: [],
      },
      {
        name: "News",
        path: '/content/news',
        children: [],
      },
      {
        name: "Singles",
        path: '/content/singles',
        children: [],
      },
    ],
  },
  {
    name: "Ecommerce",
    path: '/ecommerce',
    children: [
      {
        name: "Products",
        path: '/ecommerce/products/list',
        children: [
          {
            name: "List",
            path: '/ecommerce/products/list',
            children: [],
          },
          {
            name: "Create",
            path: '/ecommerce/products/create',
            children: [],
          },
        ],
      },
      {
        name: "Orders",
        path: '/ecommerce/orders',
        children: [],
      },
      {
        name: "Customers",
        path: '/ecommerce/customers',
        children: [],
      },
    ],
  },
  {
    name: "Analytics",
    path: '/analytics',
    children: [
      {
        name: "Posts",
        path: '/content/posts',
        children: [],
      },
      {
        name: "News",
        path: '/content/news',
        children: [],
      },
      {
        name: "Singles",
        path: '/content/singles',
        children: [],
      },
    ],
  },
  /*
  ['Dashboard'], 
  ['Content', 'Posts', 'News', 'Singles'], 
  ['Ecommerce', 'Products', 'Orders', 'Customers'],
  ['Analytics', 'Products', 'Orders', 'Customers'],*/
];

  
function MenuItem({link, index}) {

  return link && (
      <>
      <ListItem disablePadding>
      <ListItemButton href={link.path.toLowerCase()} sx={{ height: 28, marginLeft: index*3, marginTop: 0}}>
          <ListItemText primary={
          <Typography>
              {link.name}
          </Typography>
          }/>
      </ListItemButton>
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