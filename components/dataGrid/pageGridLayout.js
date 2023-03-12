import { Box, Button, Drawer, Grid, styled, useMediaQuery, useTheme } from "@mui/material";
import { DataGrid, useGridApiRef, GridRow } from "@mui/x-data-grid";
import { useMemo, useCallback, useState, useRef } from "react";
import GridToolbar from "./toolbar";
import Order from "./single/order";
import LayoutBig from "./single/layout/layoutBig";



export default function PageGridLayout(props) {

    const { rows, columns, Single } = props;

    const [selectedRow, setSelectedRow] = useState(null);
    if (!selectedRow) setSelectedRow(rows[0]);

    const [density, setDensity] = useState('standard');
    const newProps = {...props, density, setDensity};

    const apiRef = useGridApiRef();

    const theme = useTheme();
    const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));
    const matchDownXL = useMediaQuery(theme.breakpoints.down('xl'));

    const bigDrawerWidth = matchDownXL? 300 : 500;

    const gridRef = useRef(null);
    console.log(gridRef?.current?.value);
/*
    const handleRowClick = useCallback(
        (row) => {
            //setSelectedRow(row);
        },
        [setSelectedRow]
      );*/
    function handleClick(row) {
        setSelectedRow(row)
    }

    function ButtonRow(props) {

        
        return (
            <Button variant='grid-row' onClick={() => handleClick(props.row)}>
                <GridRow {...props} />
            </Button>
        );
    };


/*
    const Main = () => (
        <Box sx={{marginRight: `${bigDrawerWidth}px`, px: 3, height: '500px'}}>
            <GridToolbar {...newProps} />
            <DataGrid
                autoHeight 
                apiRef={apiRef}
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                density={density}
                //onRowClick={handleRowClick}
                slots={{row: () => ButtonRow({setSelectedRow})}}
            />
        </Box>
    )
*/
    return !matchDownXL ? (
        <>
        
        <Box sx={{marginRight: `${bigDrawerWidth}px`, px: 3, height: '500px'}}>
            <GridToolbar {...newProps} />
            
            <DataGrid
                autoHeight 
                ref={gridRef}
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                density={density}
                //onRowClick={handleRowClick}
                slots={{row: ButtonRow}}
                //slotsProps={{row: {handleClick: handleClick}}}
            />
        </Box>
            {<LayoutBig drawerWidth={bigDrawerWidth}>
                {selectedRow && <Single row={selectedRow} setSelectedRow={setSelectedRow} />}
            </LayoutBig>}

        </>) : null
    
}
/*
function Grid (props) {

    const { rows, columns, setSelectedRow }

    return (
        <DataGrid
            autoHeight 
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            //density={density}
            slots={{row: ButtonRow}}
        />
    )
}*/