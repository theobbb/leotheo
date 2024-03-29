import { Button, Typography } from '@mui/material'
import { textIconStyle } from '@styles/global';
import { useTheme } from "@mui/system";
import FileUploadIcon from '@mui/icons-material/FileUpload';

export default function Import(props) {
    const { rows, columns } = props;
    const theme = useTheme();
  return (
    <Button>
        <FileUploadIcon sx={textIconStyle(theme)} />
        <Typography variant='button'>IMPORT</Typography>
    
    </Button>
  )
}
