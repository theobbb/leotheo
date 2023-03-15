import { withStyles } from "@material-ui/core";
import { Box, Button, styled, useMediaQuery, useTheme } from "@mui/material";
import { DataGrid, GridRow, useGridApiRef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import GridPageLayout from "./gridPageLayout";

export default function GridPage(props) {
    const {rows, columns, Single} = props;

    const [sortedRows, setSortedRows] = useState(rows);

    const [visibleColumns, setVisibleColumns] = useState(null);
    const [columnsBreakPoints, setColumnsBreakPoints] = useState(null);

    const [selectedRow, setSelectedRow] = useState(null);

    const [density, setDensity] = useState('standard');


    const breakPoints = ['md', 'lg', 'xl'];
    useEffect(() => {

      const newBp = breakPoints.map((bp, index) => {
        const obj = {};
        columns.forEach(col => {

          const colBpIndex = breakPoints.indexOf(col.hide);
          if (colBpIndex == -1) obj[col.field] = true;
          else {
            obj[col.field] = index > colBpIndex;
          }
        });
        return { [bp]: obj };
      });

      const objAll = {};
      columns.map(col => { return objAll[col.field] = true });

      const combinedObject = Object.assign({}, ...newBp);
      combinedObject.all = objAll;

      setColumnsBreakPoints(combinedObject);

    }, []);

    const matchDownMD = useMediaQuery(theme => theme.breakpoints.down('md'));
    const matchDownLG = useMediaQuery(theme => theme.breakpoints.down('lg'));
    const matchDownXL = useMediaQuery(theme => theme.breakpoints.down('xl'));

    if (!matchDownMD && !selectedRow) setSelectedRow(rows[0]);

    useEffect(() => {
      if (matchDownMD) {
        if (visibleColumns !== columnsBreakPoints?.md) 
          return setVisibleColumns(columnsBreakPoints?.md);
        else return;
      } 
      if (matchDownLG) {
        if (visibleColumns !== columnsBreakPoints?.lg) 
          return setVisibleColumns(columnsBreakPoints?.lg);
        else return;
      } 
      if (matchDownXL) {
        if (visibleColumns !== columnsBreakPoints?.xl) 
          return setVisibleColumns(columnsBreakPoints?.xl);
        else return;
      } 
      else {
        if (visibleColumns !== columnsBreakPoints?.all) 
          return setVisibleColumns(columnsBreakPoints?.all);
        else return;
      }
      
    }, [columnsBreakPoints, matchDownMD, matchDownLG, matchDownXL])

    const apiRef = useGridApiRef(null);

    const sortedRows_ = apiRef.current.instanceId != null? apiRef.current.getSortedRows() : rows;

    const layoutProps = {  
      rows: sortedRows_,
      selectedRow,
      setSelectedRow,
      columns,
      columnsBreakPoints,
      setVisibleColumns,
      Single: Single,
      selectedRow,
      setSelectedRow,
      density,
      setDensity,
  };

  const theme = useTheme();

  console.log(theme);

  function handleSortModelChange() {
    setSortedRows(apiRef.current.getSortedRows())
  }

    return visibleColumns && (
      <GridPageLayout {...layoutProps} >
        
        <DataGrid
        apiRef={apiRef}
        autoHeight 
        rows={rows}
        columns={columns}
        columnVisibilityModel={visibleColumns}
        pageSize={5}
        onSortModelChange={handleSortModelChange}
        //onResize={() => console.log('test')}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        density={density}
        slots={{row: ButtonRow}}
        slotProps={{row: {handleClick: setSelectedRow, selectedRow: selectedRow}}}
        />
        
      </GridPageLayout>
    )
}
const buttonStyle = (theme) => ({
  root: theme.mixins.button,
});
/*
const ButtonRow = styled(buttonStyle)(({ classes, selectedRow, handleClick, ...other }) => (
  <div className={classes.root} onClick={() => handleClick(other.row)} role="button">
    <GridRow {...other} />
  </div>
));*/

function ButtonRow ({selectedRow, handleClick, ...other}) {
  return (

    <Button variant='grid-row' className={other.row.id == selectedRow?.id? 'grid-row-selected' : null} onClick={() => handleClick(other.row)} >
        <GridRow {...other} />
    </Button>
    
  )
}

