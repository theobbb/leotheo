import { Box } from "@mui/system";
import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Typography, Button, Menu, ButtonBase } from "@mui/material";


export default function InputSelect(props) {
    const { onSelect, options, selected, children } = props;

    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleOpenMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleCloseMenu = () => {
      setAnchorEl(null);
    };
  
    const handleSelectOption = (option) => {
        onSelect(option);  
        handleCloseMenu();
    };

    return (
        <Box>
            <Button onClick={handleOpenMenu}>
                {children}
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
                {options.map((option, index) => (
                    <MenuItem 
                    onClick={() => handleSelectOption(option.value)}
                    selected={selected == option.value}
                    key={`select-${option.value}`}
                    >
                    {option.text}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}