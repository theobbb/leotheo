import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const statusBackgroundColor = [
    'rgba(16, 185, 129, 0.12)', 
    'rgba(6, 174, 212, 0.12)', 
    'rgba(247, 144, 9, 0.12)', 
    'rgba(240, 68, 56, 0.12)'
];
const statusTextcolor = [
    'rgb(11, 129, 90)', 
    'rgb(14, 112, 144)', 
    'rgb(181, 71, 8)', 
    'rgb(180, 35, 24)'
];
export const statusText = [
    'complete', 
    'pending', 
    'canceled', 
    'rejected'
];

export default function StatusPastille({value}) {
    return (
        <Box sx={{px: 0.5, display: 'flex', borderRadius: 12, color: statusTextcolor[value], width: 'max-content', background: statusBackgroundColor[value]}}>
            <Typography variant='p'>{statusText[value]}</Typography>
        </Box>      
    )
} 