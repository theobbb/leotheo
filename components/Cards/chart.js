import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import MainCard from '../MainCard';

const ReactApexChart = dynamic(() =>
  import('react-apexcharts'), { ssr: false }
);


const areaChartOptions = {
    tooltip: {
        enabled: false
    },
    chart: {
        height: 250,
        type: 'area',
        background: 'transparent',
        toolbar: {
            show: false
        },
        animations: {
            enabled: false,
            animateGradually: false
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    grid: {
        strokeDashArray: 0,
        show: false,
    },
    xaxis: {
        labels: {
          show: false
        }
      },
    yaxis: {
        labels: {
            show: false
        }
    }
};

// ==============================|| INCOME AREA CHART ||============================== //
export default function ChartCard ({series, text}) {

    return (
        <MainCard sx={{height:300, position: 'relative', overflow: 'hidden'}}>
            <Box sx={{position: 'absolute', width: '100%', height: '100%'}}>
                <Typography variant='h5'>{text}</Typography>
            </Box>
            
            <Box sx={{position: 'absolute', width: '100%', height: '100%', transform: 'scale(1.2) translate(-3%, 15%)'}} >
                <ReactApexChart options={areaChartOptions} series={series} type="area" height={250} />
            </Box>
        </MainCard>
    )
    
};

