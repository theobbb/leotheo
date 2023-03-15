import { Box } from '@mui/material'

export default function ProductImage({color, size}) {
  
    return (
        
        <Box sx={{height: `${size}px`, width: `${size}px`, background: color, borderRadius: 1}} />
        
    )
  
}
