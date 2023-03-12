import styled from "@emotion/styled";
import { Dialog, DialogTitle, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import { amber, blue, blueGrey, cyan, deepPurple, green, grey, indigo, lightBlue, lightGreen, lime, orange, pink, purple, red, teal, yellow } from "@mui/material/colors";
import color from "../utils/global";


export default function ColorDialog(props) {
    const handleClose = () => {
        props.onClose(props.selectedValue);
      };
    
      const handleListItemClick = (value) => {
        props.onClose(value);
      };

    const colors = [red, pink, purple, deepPurple, indigo, blue, lightBlue, 
        cyan, teal, green, lightGreen, lime, yellow, amber, orange, blueGrey
    ]


    return (
        <Dialog onClose={handleClose} open={props.open}>
        <DialogTitle>Theme color</DialogTitle>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 4 }}>
                {colors.map((color) => (
                <Grid item xs={2} sm={4} md={1} key={color}>
                
                    
                        <IconButton 
                        onClick={() => handleListItemClick(color)}
                        variant="solid"
                        sx={{
                            height: 34,
                            width: 34, 
                            borderRadius: 4,
                            backgroundColor: color[400]
                            }} 
                        />  
                    
                </Grid>
                ))}
            </Grid>
        </Dialog>
    )
}




const ColorButton = styled(IconButton)({
    
    variant: "solid",
    backgroundColor: color[400],
    height: 34,
    width: 34,
    borderRadius: 4,
    marginLeft: 16,
    marginBottom: 8,
    marginTop: 24,
    '&:hover': {
      backgroundColor: color[500],
    },
});