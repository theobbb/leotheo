import { Box } from "@mui/system";
import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Typography, Button, Menu, ButtonBase, TextField } from "@mui/material";


export default function InputText(props) {
    const { onChange, options, row } = props;

    const [inputText, setInputText] = useState('');


  
    const handleInputChange = (event) => {
        setInputText(event.target.value);
    }
    const handleInputSubmit = () => {
        onChange(inputText);
    }

    return (
        <Box>
            <TextField 
            id={`inputText-${row.id}`} 
            label="Standard" 
            variant="standard" 
            onChange={handleInputChange} 
            //onBlur={handleInputSubmit}
            value={inputText} />
        </Box>
    );
}