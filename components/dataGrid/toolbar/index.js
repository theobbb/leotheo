import { Box, Stack, Toolbar } from "@mui/material";
import Density from "./content/density";
import Export from "./content/export";
import Import from "./content/import";

export default function GridToolbar(props) {

    return (
      <Stack 
      direction="row" 
      spacing={2} 
      justifyContent="space-between" 
      sx={{py: 2}}
      >
          <Density {...props} />
          <Stack spacing={2} direction="row">
            <Import {...props} />
            <Export {...props} />
          </Stack>
          
      </Stack>
  )
}
