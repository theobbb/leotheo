// material-ui
import { Box, ButtonBase, IconButton, Link, useMediaQuery } from '@mui/material';
import UserAvatar from './profile/userAvatar';


// project import
import Search from './search';


// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = ({openProfile, handleDrawerProfileToggle}) => {
    
    const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

    return (
        <>
            
            <UserAvatar openProfile={openProfile} handleDrawerProfileToggle={handleDrawerProfileToggle} />


        </>
    );
};

export default HeaderContent;