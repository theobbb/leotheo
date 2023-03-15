
import Layout from "@layouts/main";

import { useContext, useState } from 'react';

import { Box, Button, Grid, Stack, Toolbar, Typography } from '@mui/material';


import TrafficChart from '@components/TrafficChart';
import MonthlyBarChart from '@components/MonthlyBarChart';
import MainCard from '@components/MainCard';
import { useTheme } from '@mui/material/styles';
import RecentOrders from "@components/recentOrders";
import ChartCard from "@components/cards/chart";
import { DataContext } from "@utils/dataContext";


// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};


export default function Dashboard () {
    const [value, setValue] = useState('today');
    const [slot, setSlot] = useState('week');

    const theme = useTheme();

    const data = useContext(DataContext);

    return (
        <Layout>

        <Toolbar><Typography variant="h4">Dashboard</Typography></Toolbar>

        <Box sx={{p: 3}}>

        
        
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}

            {/*
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="Total Page Views" count="4,42,236" percentage={59.3} extra="35,000" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="Total Users" count="78,250" percentage={70.5} extra="8,900" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="Total Order" count="18,800" percentage={27.4} isLoss color="warning" extra="1,943" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="Total Sales" count="$35,078" percentage={27.4} isLoss color="warning" extra="$20,395" />
            </Grid>
*/}
            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

            <Grid item xs={12} sm={6} md={4} lg={3}></Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <ChartCard color={'#388e3c'} series={[{data: data.analytics.products[1000], name: 'page views'}]} text="Sales" />
                
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <ChartCard color={'#388e3c'} series={[{data: data.analytics.products[1000], name: 'sessions'}]} text="Sales" />
                    
                    
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                
                <ChartCard color={'#388e3c'} series={[{data: data.analytics.products[1000], name: 'sales'}]} text="Sales" />
                    
                    
            </Grid>

            <Grid item xs={12} md={12} lg={12}>

            </Grid>

            {/* row 2 */}
            <Grid item xs={12} md={7} lg={8}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Button sx={{border: `solid 2px #F65AA5`, background: "#F2CDDF"}}>
                            <Typography sx={{color: theme.palette.text.primary}}>unique visits</Typography>
                        </Button>
                        <Button sx={{border: `solid 2px #774DAC`, background: "#9E89B9"}}>
                            <Typography>sessions</Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Stack direction="row" alignItems="center" spacing={0}>
                            <Button
                                size="small"
                                onClick={() => setSlot('month')}
                                color={slot === 'month' ? 'primary' : 'secondary'}
                                variant={slot === 'month' ? 'outlined' : 'text'}
                            >
                                Month
                            </Button>
                            <Button
                                size="small"
                                onClick={() => setSlot('week')}
                                color={slot === 'week' ? 'primary' : 'secondary'}
                                variant={slot === 'week' ? 'outlined' : 'text'}
                            >
                                Week
                            </Button>


                        </Stack>
                    </Grid>
                </Grid>
                <MainCard content={false} sx={{ mt: 1.5 }}>
                    <Box sx={{ pt: 1, pr: 2 }}>
                        <TrafficChart slot={slot} />
                    </Box>
                </MainCard>
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Income Overview</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <Box sx={{ p: 3, pb: 0 }}>
                        <Stack spacing={2}>
                            <Typography variant="h6" color="textSecondary">
                                This Week Statistics
                            </Typography>
                            <Typography variant="h3">$7,650</Typography>
                        </Stack>
                    </Box>
                    <MonthlyBarChart />
                </MainCard>
            </Grid>

            <Grid item xs={12} md={7} lg={8}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Recent Orders</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2, height: 600 }} content={false}>
                    <RecentOrders />
                </MainCard>
            </Grid>
            
            {/* row 3 */}
            {/*
            <Grid item xs={12} md={7} lg={8}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Recent Orders</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <OrderTable />
                </MainCard>
            </Grid>
*/}

            

        </Grid>
        </Box>
        </Layout>
    );


};

Dashboard.auth = true;



