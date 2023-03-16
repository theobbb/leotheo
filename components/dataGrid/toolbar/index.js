import { Box, Stack, Toolbar, useMediaQuery } from "@mui/material";
import Density from "./content/density";
import Export from "./content/export";
import Import from "./content/import";

export default function GridToolbar(props) {
  
  const matchDownSM = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return (
      <Stack 
      direction="row" 
      spacing={2} 
      justifyContent="space-between" 
      sx={{py: 2, px: matchDownSM? 2 : 3}}
      >
          <Density {...props} />
          <Stack spacing={2} direction="row">
            <Import {...props} />
            <Export {...props} />
          </Stack>
          
      </Stack>
  )
}
