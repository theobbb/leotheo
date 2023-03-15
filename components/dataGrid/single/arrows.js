import React from 'react'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';

export default function Arrows(props) {

    const { rows, selectedRow, setSelectedRow } = props;

    const index = rows.indexOf(selectedRow);
    const lastIndex = rows.length - 1;

    function handlePrev() {
  
        const prevIndex = index === 0 ? lastIndex : index - 1;
        setSelectedRow(rows[prevIndex]);
    }
    function handleNext() {
        const nextIndex = index === lastIndex ? 0 : index + 1;
        setSelectedRow(rows[nextIndex]);
    }

    function newRow(id) {
        const newRow = rows.find(row => row.id == id)
        setSelectedRow(newRow);
    }

  return (
    <Box sx={{display: 'flex'}}>
        <IconButton onClick={handlePrev}>
            <NavigateBeforeIcon sx={{fontSize: 24}} />
        </IconButton>
        <IconButton onClick={handleNext}>
            <NavigateNextIcon sx={{fontSize: 24}} />
        </IconButton>
    </Box>
  )
}
