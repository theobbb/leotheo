import { useState } from 'react';
import { Avatar, ButtonBase, IconButton } from "@mui/material";
import { useSession } from "next-auth/react";
import UserOptions from './userOptions';
import PersonIcon from '@mui/icons-material/Person';

export default function UserAvatar({openProfile, handleDrawerProfileToggle}) {

  //const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    handleDrawerProfileToggle(!openProfile);
    //setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const Avatar = () => (
    <IconButton variant='invert' aria-describedby={id} onClick={handleClick} >
      
      <PersonIcon />
    </IconButton>
  )
  
  return (
    <>
      {/*session && avatar*/}
      <Avatar />
      <UserOptions handleDrawerProfileToggle={handleDrawerProfileToggle} id={id} open={open} anchorEl={anchorEl} onClose={handleClose} />
    </>
  )
}
function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: name[0]
      //children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}
function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
}