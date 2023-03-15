import { Button, Typography } from '@mui/material'
import { textIconStyle } from '@styles/global';
import { exportJson } from '@utils/exportJson';
import { useTheme } from "@mui/system";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default function Export(props) {
    const { rows, columns } = props;
    const theme = useTheme();
    
  return (
    <Button onClick={() => exportJson({rows, columns, filename: "grid_demo"})}>
        <FileDownloadIcon sx={textIconStyle(theme)} />
        <Typography variant='button'>EXPORT</Typography>
    </Button>
  )
}
