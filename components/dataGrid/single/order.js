import ProductImage from '@components/productImage';
import StatusPastille from '@components/StatusPastille';
import { Box, Button, Card, Divider, Grid, Stack, styled, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import { DataContext } from '@utils/dataContext';

import React, { useContext } from 'react'
import SingleComponents from './components';
import SingleLayout from './layout';

//import * as C from './components';

import { Title, Value, GridTitle, RowDivider, SingleCard } from './components';

export default function SingleOrder(props) {

  const { rows, selectedRow, setSelectedRow } = props;
  if (!selectedRow) return null;

  const data = useContext(DataContext);

  const order = data.ecommerce.orders.find(order => order.id === selectedRow.id);

  const customer = data.ecommerce.customers.find(customer => customer.id === order.customerID);

  const theme = useTheme();

  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchDownXL = useMediaQuery(theme.breakpoints.down('xl'));

  const rowSpacing = matchDownXL? 0.5:0.6;
  const dividerSpacing = matchDownXL? 0.5:0.6;


  return data && customer && order && (

    

    <SingleLayout>

      <GridTitle>Details</GridTitle>
      <SingleCard>

          <Title>Date</Title>
          <Value>{`${selectedRow.date}`}</Value>

          <RowDivider />

          <Title>Promotion Code</Title>
          <Value>HIGH</Value>

          <RowDivider />

          <Title>Total Amount</Title>
          <Value>{selectedRow.total}</Value>

          <RowDivider />

          <Title>Status</Title>
          <Value>
            <StatusPastille value={order.status} />
          </Value>

        </SingleCard>

        <GridTitle>Customer</GridTitle>
        <SingleCard>
          

              <Title>Name</Title>
              <Value>
                <Button variant='inline'>
                  {customer.name}
                </Button>
              
              </Value>

              <RowDivider />

              <Title>Email</Title>
              <Value>
                <Button variant='inline'>
                  {customer.email}
                </Button>
              </Value>

                <RowDivider />

              <Title>Address</Title>
              <Value>{customer.location}</Value>

              <RowDivider />

              <Title>ID</Title>
              <Value>{customer.id}</Value>
            
        
        </SingleCard>
      
        <GridTitle>Items</GridTitle>
        <Card variant='main' sx={{py: rowSpacing+dividerSpacing, px: 2, marginBottom: 5}}>
        {selectedRow.items.map((item, index) => (
          <Grid key={item.id} item xs={12} >

            <Grid container rowSpacing={rowSpacing+dividerSpacing} columnSpacing={1}>

                <Grid item xs={6} xl={2} order={matchDownXL? index+2 : 0}>
                  <Typography variant='p'>{`${item.quantity}g`}</Typography>
                </Grid>

                <Grid item xs={12} xl={7} order={matchDownXL? index+1 : 0}>
                  
                    <Stack direction='row' alignItems='center' spacing={2} >
                      <ProductImage color={item.item.color} size={24} />
                      <Button variant='inline'>
                      <Typography variant='p'>{item.item.name}</Typography>
                      </Button>
                    </Stack>
                  
                </Grid>

                <Grid align='right' item xs={6} xl={3} order={matchDownXL? index+3 : 0}>
                  <Typography variant='p'>{item.total}</Typography>
                </Grid>

                {index != selectedRow.items.length - 1 && 
                <Grid item xs={12} sx={{py: rowSpacing+dividerSpacing}} order={matchDownXL? index+4 : 0}>
                  <Divider />
                </Grid>
                }
              
            </Grid>
          </Grid>
          
        ))}
        </Card>
      
    </SingleLayout>

  )
}
