import { Box, Button, Drawer, styled, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { DataGrid, useGridApiRef, GridRow } from "@mui/x-data-grid";
import { useMemo, useCallback, useState, useRef, useEffect } from "react";
import GridToolbar from "./toolbar";
import Order from "./single/order";
import SingleHeader from "./single/header";



export default function GridPageLayout(props) {

    const { rows, columns, density, setDensity, Single, children, selectedRow, setSelectedRow, } = props;

    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme => theme.breakpoints.down('sm'));
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
            
            <Box sx={{marginRight: matchDownMD? `${-drawerWidth}px` : 0 }}>
                <GridToolbar {...toolbarProps} />
                <Box sx={{maxWidth: '100%', position: 'relative', overflowX: 'scroll', }}>
                    <Box sx={{minWidth: '550px', px: matchDownSM? 2 : 3, paddingBottom: 6 }}>
                        {children}
                    </Box>
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
            {selectedRow && 
                <Box>
                    
                    <SingleHeader {...{rows, selectedRow, setSelectedRow }} />
                    <SingleO />
                </Box>
            }
            </Drawer>
        </Box>

    )
}



