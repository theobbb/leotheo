import { Box, Button, Drawer, styled, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { DataGrid, useGridApiRef, GridRow } from "@mui/x-data-grid";
import { useMemo, useCallback, useState, useRef, useEffect } from "react";
import GridToolbar from "./toolbar";
import Order from "./single/order";
import SingleHeader from "./single/header";



export default function GridPageLayout(props) {

    const { rows, columns, density, setDensity, Single, children, selectedRow, setSelectedRow, } = props;

    const theme = useTheme();
    const matchDownMD = useMediaQuery(theme => theme.breakpoints.down('md'));
    const matchDownLG = useMediaQuery(theme => theme.breakpoints.down('lg'));
    const matchDownXL = useMediaQuery(theme => theme.breakpoints.down('xl'));


    const drawerWidth = matchDownXL? 300 : 420;

    function handleClose() {
        setSelectedRow(null);
    }


    const toolbarProps = {...props, density, setDensity};

    const SingleO = () => <Single {...{ rows, selectedRow, setSelectedRow, drawerWidth }} />


    return (
        <Box sx={{height: '100%', maxHeight: '100vh', position: 'relative', width: `calc(100% - ${drawerWidth}px)`}}>
            
            <Box sx={{px: 3, marginRight: matchDownMD? `${-drawerWidth}px` : 0 }}>
                <GridToolbar {...toolbarProps} />
                <Box sx={{minWidth: '700px', paddingRight: matchDownMD? 3:0}}>
                {children}
                </Box>
            </Box>
            
            <Drawer
            key={selectedRow}
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            position: 'relative',
            '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    zIndex: (theme) => theme.zIndex.drawer,
                    background: theme.palette.primary.main,
                },
            }}
            variant={matchDownMD? 'temporary' : 'persistent'} 
            anchor="right"
            open={selectedRow != null}
            onClose={handleClose}
            >
            {/*selectedRow && 
                <Box>
                    
                    <SingleHeader {...{rows, selectedRow, setSelectedRow }} />
                    <SingleO />
                </Box>
            */}
            </Drawer>
        </Box>

    )
}



