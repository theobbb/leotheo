import { Box, Button, ButtonBase, Card, IconButton, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ReactApexChart = dynamic(() =>
  import('react-apexcharts'), { ssr: false }
);


export default function ChartCard ({series, text, color}) {

    const areaChartOptions = {
        colors: [color],
        
        tooltip: {
            enabled: false
        },
        chart: {
            sparkline: {
                enabled: false,
            },
            width: '100%',
            height: '100%',
            type: 'area',
            background: 'transparent',
            toolbar: {
                show: false
            },
            /*
            animations: {
                enabled: false,
                animateGradually: false
            },*/
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
            padding: {
                left: 0,
                right: 0
               }
        },
        xaxis: {
            
            labels: {
              show: false
            },
            axisTicks: {
                show: false
              }
          },
        yaxis: {
            labels: {
                show: false
            }
        }
    };

    const matchDownMD = useMediaQuery(theme => theme.breakpoints.down('md'));
    const matchDownLG = useMediaQuery(theme => theme.breakpoints.down('lg'));

    return (
        <ButtonBase variant='card' sx={{width: '100%', height: '100%'}}>
            <Card variant='main' sx={{height: `${matchDownLG? 180: 250}px`, width: '100%', position: 'relative', }}>
            
                <Box sx={{height: '20%', px:2, py: 1, display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                    <Typography variant='h5'>{text}</Typography>
                    <Box sx={{display:'flex'}}>

                        {/*<Button variant='inline'>year</Button>
                        <Button variant='inline'>month</Button>*/}
                    </Box>
                    {/*<IconButton><MoreVertIcon /></IconButton>*/}
                </Box>
                
                
                <Box sx={{
                    width: '100%', 
                    height: '80%', 
                    position: 'absolute', 
                    bottom: -10, left: -5,
                    transform: 'scale(1.08)', 
                }} >
                    <ReactApexChart options={areaChartOptions} series={series} type="area" height='100%' />
                </Box>
                
            </Card>
        </ButtonBase>
    )
    
};

//transform: 'scale(1.2) translate(-3%, 15%)'