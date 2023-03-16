import ChartCard from '@components/Cards/chart';
import ProductImage from '@components/productImage';
import StatusPastille from '@components/StatusPastille';
import { Box, Button, Card, Divider, Grid, Stack, styled, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import { DataContext } from '@utils/dataContext';
import { seriesChart0 } from '@utils/tempData';

import { Title, Value, GridTitle, RowDivider, SingleCard, CardDivider, SemiCardDivider } from './components';

import React, { useContext } from 'react'
import SingleLayout from './layout';

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

  
  return data && product && (

    

    <SingleLayout>

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
        
      
    </SingleLayout>

  )
}