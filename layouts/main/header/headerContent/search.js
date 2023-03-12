import SearchIcon from '@mui/icons-material/Search';
import { ButtonBase } from '@mui/material';
import color from '@utils/global';


export default function Search() {
  return (
    <ButtonBase sx={{padding:1, borderRadius: 12}}>
        
          
      <SearchIcon sx={{color: color[700]}} />
          
          
        
    </ButtonBase>
  );
}