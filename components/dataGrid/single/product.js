import ChartCard from '@components/Cards/chart';
import ProductImage from '@components/productImage';
import StatusPastille from '@components/StatusPastille';
import { Box, Button, Card, Divider, Grid, Stack, styled, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import { DataContext } from '@utils/dataContext';
import { seriesChart0 } from '@utils/tempData';


import React, { useContext } from 'react'

export default function SingleProduct(props) {

  const { rows, selectedRow, setSelectedRow } = props;

  if (!selectedRow) return null;

  const data = useContext(DataContext);

  const product = data.ecommerce.products.find(product => product.id === selectedRow.id);

  const productSales = data.analytics.products[product.id];

  const recentOrders = data.ecommerce.orders.filter(order => {
    return order.items.find(item => item.productID == product.id);
  } )
  recentOrders.forEach(order => {
    order.customer = data.ecommerce.customers.find(customer => customer.id == order.customerID)
  });

  const theme = useTheme();

  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchDownXL = useMediaQuery(theme.breakpoints.down('xl'));

  const rowSpacing = matchDownXL? 0.5:0.6;
  const dividerSpacing = matchDownXL? 0.5:0.6;

  function Title(props) {
    return (
      <Grid item xs={12} sm={12} md={12} xl={5}>
        <Typography variant='bold'>{props.children}</Typography>
      </Grid>
    )
  }
  function Value({children, ...other}) {
    return (
      <Grid item xs={12} sm={12} md={12} xl={7} {...other}>
        <Typography variant='p'>{children}</Typography>
      </Grid>
    )
  }
  function GridTitle(props) {
    return <Typography sx={{marginBottom: 1}} variant='h6'>{props.children}</Typography>
  }

  function RowDivider () {
    return <Grid item xs={12} sx={{my: dividerSpacing}}><Divider /></Grid>
  }

  const SingleCard = ({children}) => (
    <Card variant='main' sx={{py: dividerSpacing, px: 2, }}>
      <Grid container rowSpacing={rowSpacing} columnSpacing={1} sx={{position: 'relative', marginTop: 0}}>
          {children}
          <Grid item xs={12}></Grid>
      </Grid>
    </Card>
  )

  function CardDivider () {
    return <Box sx={{marginBottom: 6}} />
  }
  function SemiCardDivider () {
    return <Box sx={{marginBottom: 3}} />
  }
  
  return data && product && (

    

    <Box sx={{px:3, py: 3}} >

      <GridTitle>Details</GridTitle>
      <SingleCard>

        <Title>NAME</Title>
        <Value >{product.name}</Value>

        <RowDivider />
        <Title>CATEGORY</Title>
        <Value>{product.category.name}</Value>
        

        <RowDivider />
        <Title>SKU</Title>
        <Value>{product.sku}</Value>

      </SingleCard>

      <SemiCardDivider />
        
      <SingleCard>
        
        <Title>PRICE</Title>
        <Value >{product.price}</Value>

        <RowDivider />
        <Title>STOCK</Title>
        <Value>{product.stock}</Value>
        

        <RowDivider />
        <Title>SOLD</Title>
        <Value>{product.sold}</Value>

      </SingleCard>

      <CardDivider />
        
      
      <ChartCard color={product.color} series={[{data: productSales, name: `${product.name} sales`}]} text="Sales" />
      
      <CardDivider />
      
      <GridTitle>Recent Orders</GridTitle>

        
        {recentOrders.map((order, index) => (
          <Box key={order.id}>
          
          <SingleCard>

            <Title>ORDER ID</Title>
            <Value>
              <Button variant='inline'>
                <Typography variant='p'>{order.id}</Typography>
              </Button>
            </Value>

            <RowDivider />

            <Title>CUSTOMER</Title>
            <Value>
              <Button variant='inline'>
                <Typography variant='p'>{order.customer.name}</Typography>
              </Button>
            </Value>

            <RowDivider />

            <Title>AMOUNT</Title>
            <Value align='right'>{order.total}</Value>

            <RowDivider />

            <Title>DATE</Title>
            <Value align='right'>{order.date}</Value>

              
          </SingleCard>
          
            {index != recentOrders.length - 1 && 
              <SemiCardDivider />
            }
            </Box>
        ))}
        
      
    </Box>

  )
}