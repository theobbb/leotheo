import React from 'react'
import { Box } from '@mui/material'

export default function LayoutSmall(props) {
    
  return (
    <Box>
        <Button onClick={()=>setSelectedRow(null)}>X</Button>
    </Box>    
  )
}
