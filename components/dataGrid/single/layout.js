import { Box, useMediaQuery } from "@mui/material";


export default function SingleLayout({children}) {

    const matchDownSM = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return (
        <Box sx={{py:3, px: matchDownSM? 2 : 3}} >
            {children}
        </Box>
    )
}
