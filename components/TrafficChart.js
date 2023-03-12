import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() =>
  import('react-apexcharts'), { ssr: false }
);

const areaChartOptions = {
    chart: {
        height: 250,
        type: 'area',
        toolbar: {
            show: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    grid: {
        strokeDashArray: 0
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
export default function TrafficChart ({slot}) {
    const theme = useTheme();

    const { primary, secondary } = theme.palette.text;
    const line = theme.palette.divider;

    const [options, setOptions] = useState(areaChartOptions);


    useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
            colors: ["#F65AA5", "#774DAC"],
            xaxis: {
                categories:
                    slot === 'month'
                        ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                        : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                labels: {
                    style: {
                        colors: [
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary
                        ]
                    }
                },
                axisBorder: {
                    show: false,
                    color: line
                },
                tickAmount: slot === 'month' ? 11 : 7
            },
            yaxis: {
                labels: {
                    
                    style: {
                        colors: [secondary]
                    }
                }
            },
            grid: {
                borderColor: 'none'
            },
            tooltip: {
                theme: 'light'
            }
        }));
    }, [primary, secondary, line, theme, slot]);

    const [series, setSeries] = useState([
        {
            name: 'unique visits',
            data: [0, 86, 28, 115, 48, 210, 136]
        },
        {
            name: 'sessions',
            data: [0, 43, 14, 56, 24, 105, 68]
        }
    ]);

    useEffect(() => {
        setSeries([
            {
                name: 'unique visits',
                data: slot === 'month' ?  [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35] : [31, 40, 28, 51, 42, 109, 100]
            },
            {
                name: 'sessions',
                data: slot === 'month' ? [110, 60, 150, 35, 60, 36, 26, 45, 65, 52, 53, 41] : [11, 32, 45, 32, 34, 52, 41]
            }
        ]);
    }, [slot]);

    return <ReactApexChart options={options} series={series} type="area" height={450} />
};

TrafficChart.propTypes = {
    slot: PropTypes.string
};

