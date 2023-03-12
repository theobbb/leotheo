import StatusPastille from '@components/StatusPastille';
import { Box, Button, Card, Divider, Grid, Modal, Stack, styled, Toolbar, Typography } from '@mui/material'
import { tempData } from '@utils/tempData';
import React from 'react'
import SingleCard from './card';


export default function SingleOrder({row, setSelectedRow}) {

  
  const order = tempData.ecommerce.orders.find(order => order.id === row.id);

  const customer = tempData.ecommerce.customers.find(customer => customer.id === order.customerID);

  function Title(props) {
    return (
      <Grid item xs={12} sm={6} md={7} lg={5}>
        <Typography variant='p'>{props.children}</Typography>
      </Grid>
    )
  }
  function Value(props) {
    return (
      <Grid item xs={12} sm={6} md={7} lg={7} >
        <Typography variant='p'>{props.children}</Typography>
      </Grid>
    )
  }
  function GridTitle(props) {
    return <Typography sx={{marginBottom: 1}} variant='h6'>{props.children}</Typography>
  }

  return order && customer && (

    <>
    <Divider />
    <Toolbar>
      <Typography variant='h4'>{order.id}</Typography>
    </Toolbar>
    <Divider />
    <Box sx={{px:3, py: 3}} >

      <GridTitle>Details</GridTitle>
      <Card variant='main' sx={{p: 1.5, px: 2, marginBottom: 5}}>
          <Grid container rowSpacing={1.5} columnSpacing={1}>

              <Title>Date</Title>
              <Value >{`${row.date}`}</Value>

              <Grid item xs={12}><Divider /></Grid>

              <Title>Promotion Code</Title>
              <Value></Value>

              <Grid item xs={12}><Divider /></Grid>

              <Title>Total Amount</Title>
              <Value>{row.total}</Value>

              <Grid item xs={12}><Divider /></Grid>

              <Title>Status</Title>
              <Value>
                <StatusPastille value={order.status} />
              </Value>
                
              
              
            
          </Grid>
        </Card>

        <GridTitle>Customer</GridTitle>
        <Card variant='main' sx={{py: 1.5, px: 2, marginBottom: 5}}>
          <Grid container rowSpacing={1.5} columnSpacing={1}>

              <Title>Name</Title>
              <Value>
                <Button variant='inline'>
                  {customer.name}
                </Button>
              
              </Value>

              <Grid item xs={12}><Divider /></Grid>

              <Title>Email</Title>
              <Value><Button variant='inline'>
                  {customer.email}
                </Button></Value>

              <Grid item xs={12}><Divider /></Grid>

              <Title>Address</Title>
              <Value>{customer.location}</Value>

              <Grid item xs={12}><Divider /></Grid>

              <Title>ID</Title>
              <Value>{customer.id}</Value>
            
          </Grid>
        </Card>
      
        <GridTitle>Items</GridTitle>

        {row.items.map((item, index) => (

        <Card variant='main' sx={{py: 1.5, px: 2}}>
          <Grid container rowSpacing={1.5} columnSpacing={1}>

              <Title>Name</Title>
              <Value >{customer.name}</Value>

              <Grid item xs={12}><Divider /></Grid>

              <Title>Email</Title>
              <Value>{customer.email}</Value>

              <Grid item xs={12}><Divider /></Grid>

              <Title>Address</Title>
              <Value>{customer.location}</Value>

              <Grid item xs={12}><Divider /></Grid>

              <Title>ID</Title>
              <Value>{customer.id}</Value>
            
          </Grid>
        </Card>
        ))}

      
    </Box>
</>
  )
}
/*
<Typography variant='h4'>{customer.name}</Typography>
<Typography variant='h4'>{customer.name}</Typography>
<Typography variant='h4'>{customer.location}</Typography>
<Typography variant='h4'>{customer.email}</Typography>

<Typography variant='h4'>{customer.email}</Typography>
<Typography variant='h4'>{customer.email}</Typography>*/