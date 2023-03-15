import InputSelect from '@components/inputs/select'
import DensityLargeIcon from '@mui/icons-material/DensityLarge';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import { Typography } from '@mui/material';

import { useTheme } from "@mui/system";
import { textIconStyle } from '@styles/global';

const options = [
    { text: 'Compact', value: 'compact'},
    { text: 'Standard', value: 'standard'},
    { text: 'Comfortable', value: 'comfortable'},
]  

export default function Density(props) {

    const { density, setDensity } = props;
    
    const theme = useTheme();

  return (
    <InputSelect onSelect={setDensity} options={options} selected={density}>
        <DensityMediumIcon sx={textIconStyle(theme)} />
        <Typography variant='button'>DENSITY</Typography>
    </InputSelect>
  )
}
