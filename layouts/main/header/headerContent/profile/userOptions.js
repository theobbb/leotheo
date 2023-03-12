import { Button, Popover, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { signOut } from "next-auth/react";

export default function UserOptions({ id, open, anchorEl, onClose }) {
    return (
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        
      >
        <Stack 
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
        sx={{margin: 2}}>

        </Stack>
        <Typography sx={{ p: 2 }}>Manage Team</Typography>
        <Button onClick={() => signOut()}>Sign out</Button>
      </Popover>
    )
}