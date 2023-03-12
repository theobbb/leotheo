import { Box } from "@mui/system";
import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Typography, Button, Menu, ButtonBase } from "@mui/material";


export default function InputSelectField(props) {
    const { onSelect, options, row } = props;

    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleOpenMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleCloseMenu = () => {
      setAnchorEl(null);
    };
  
    const handleSelectOption = (option) => {
        onSelect(row.id, row.column, option);  
        handleCloseMenu();
    };

    return (
        <Box>
            <Button onClick={handleOpenMenu}>
                {row.value}
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
                {options && options.map((option, index) => (
                    <MenuItem 
                    key={`${row.id}-${option.text}`} 
                    selected={option.value == row.value}
                    onClick={() => handleSelectOption(option.value)}
                    >
                        {option.text}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}