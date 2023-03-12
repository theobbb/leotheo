import { useState, useEffect, useMemo } from 'react';
import { Box } from "@mui/system";
import { DataGrid, useGridApiRef  } from "@mui/x-data-grid";
import InputSelectField from './inputs/selectField';
import { Button, FormControl, MenuItem, Select, TextField } from '@mui/material';
import InputText from './inputs/text';


const filterColumns = [
    { field: 'column', headerName: 'Column', flex: 0.5, minWidth: 50, renderCell: (params) => params.value, },
    { field: 'operator', headerName: 'Operator', flex: 0.5, minWidth: 50, renderCell: (params) => params.value, },
    { field: 'value', headerName: 'Value', flex: 0.5, minWidth: 50, renderCell: (params) => params.value, },
]


export default function FilterGrid (props) {

    const apiRef = useGridApiRef();

    const { dataRows, dataColumns } = props;

    const [filters, setFilters] = useState([]);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        addFilter();
    }, [])
    



    const columnsOptions = dataColumns.map((column) => ({
        text: column.headerName,
        value: column.field,
    }));  
    const operatorOptions = [
        { text: 'contains', value: 'contains' },
        { text: 'equals', value: 'equals' },
        { text: 'starts with', value: 'starts with' },
        { text: 'ends with', value: 'ends with' },
        { text: 'is empty', value: 'is empty' },
    ];

    const Cell = ({row, options, key}) => {
        return (
        row.column == 'value'?
            <InputText row={row} onChange={updateRow} key={key} />
            :
            <InputSelectField row={row} options={options} onSelect={updateRow} key={key} />
           ) 
    }
    const Input = ({row, options, key}) => (
        <InputText row={row} onChange={updateRow} key={key} />
    )



    const [rowsToUpdate, setRowsToUpdate] = useState([]);
    const [rowsUpdated, setRowsUpdated] = useState(false);

    function updateRow (id, column, value) {
        
        setRowsToUpdate([...rowsToUpdate, {id, column, value}]);
    }


    useEffect(() => {
        if (rowsToUpdate.length > 0 && !rowsUpdated) {

        rowsToUpdate.map((row) => {
            const {id, column, value} = row;

            console.log(id, column, value);
            
            const filterIndex = filters.findIndex((filter) => filter.id == id);
            const newFilter = { ...filters[filterIndex], [column]: value };
            const newFilters = [...filters];
            newFilters[filterIndex] = newFilter;
            setFilters(newFilters);

            const rowIndex = rows.findIndex((row) => row.id == id);
            const columnOptions = rows[rowIndex][column].props.options;
            const newRow = { ...rows[rowIndex], [column]: Cell({row: {id, column, value}, options: columnOptions, key: Date.now()})};
            const newRows = [...rows];
            newRows[rowIndex] = newRow;
            setRows(newRows);

            setRowsUpdated(true);

            setRowsToUpdate([]);
        });

        } else {
            setRowsUpdated(false)
        }
        
        //const index = filters.findIndex((filter) => filter.id == id);
       
    }, [rowsToUpdate, rowsUpdated])

    const newFilter = (id) => {
        return { id: id, column: null, operator: null, value: null }
    }
    const newRow = (id) => {
        const selectColumn = { row: { id, column: 'column', value: 'select..' }, options: columnsOptions, key: Date.now() };
        const selectOperator = { row: { id, column: 'operator', value: 'select..' }, options: operatorOptions, key: Date.now() };
        const inputValue = { row: { id, column: 'value', value: 'filter value' }, options: operatorOptions, key: Date.now() }

        return {
            id: id, 
            column: Cell(selectColumn), 
            operator: Cell(selectOperator), 
            value: Cell(inputValue)
        }
    }

    function addFilter () {
        const id = Date.now();
        setFilters([...filters, newFilter(id)]);
        setRows([...rows, newRow(id)]);
    }
/*
    useEffect(() => {
        const newRows = Array.from({ length: filters.length });

        filters.forEach((filter, index) => {
            const matchingItem = rows.find((x) => x.id === filter.id);
      
            // If there's a matching object, use it in the new array
            if (matchingItem) {
                newRows[index] = matchingItem;
            } else {
              // If there's no matching object, create a new one with the same id
                newRows[index] = { 
                    id: filter.id, 
                    column: SelectColumn({id: filter.id, dataColumns, filters, setFilters, apiRef, handleUpdateRow, setFilter}), 
                    operator: null, 
                    value: null,
                };
            }
          });
      
          // Remove any objects from secondArray that don't have a matching id in firstArray
          const filteredRows = newRows.filter((filter) =>
            filters.some((x) => x.id === filter.id)
          );
      
          // Update secondArray with the filtered array
          setRows(filteredRows);
    }, [filters]);*/
  

  
    return (
      
            <Box sx={{width: '450px', maxWidth: '1200px', mx: 6}}>
                <DataGrid
                autoHeight 
                rows={rows}
                columns={filterColumns}
                
                
                
                checkboxSelection
               
                hideFooter
                />
                <Button onClick={addFilter}>Add</Button>
                
            </Box>
        
      
    );
  };