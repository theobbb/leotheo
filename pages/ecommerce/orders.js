import { Box, Button, Divider, Toolbar, Typography, useTheme } from "@mui/material";
import Layout from "@layouts/main";
import { tempData } from "../../utils/tempData";
import StatusPastille, { statusText } from "../../components/StatusPastille";
import React, { useContext, useState } from "react";
import PageGridLayout from "@components/dataGrid/pageGridLayout";
import SingleOrder from "@components/dataGrid/single/order";
import { DataContext } from "@utils/dataContext";


export default function Orders() {

    const data = useContext(DataContext);

    const getTotal = ({items}) => {
        let total = 0;
        for (let i = 0; i < items.length; i++) {
            const price = data.ecommerce.products.find(product => product.id === items[i].productID).price;
            total += price * items[i].quantity;
        }
        return total.toFixed(2);
    }
    function Items({items}) {
        let _items = [];
        for (let i = 0; i < items.length; i++) {
            let formattedItem = null;
            if (i < 2) {
                formattedItem = (
                    <Box>
                        <span>{items[i].quantity}g&nbsp;</span>
                        
                        <Button variant='inline'>{items[i].item.name}</Button>
                        {i != items.length - 1 && <span>&nbsp;</span>}
                    </Box> 
                );
            
            } else {
                formattedItem = (
                    <Box>
                        <span>...</span>
                    </Box> 
                );
            }
            _items.push(formattedItem);
        }
        return _items;
    }
    
    const dummyDates = [10];
    
    const getDate = (index) => {
        let daysAgo = 0;
        if (index == 0) daysAgo = 0;
        if (index == 1) daysAgo = 0;
        if (index == 2) daysAgo = 1;
        if (index == 3) daysAgo = 3;
        if (index == 4) daysAgo = 6;
        if (index > 4) daysAgo = index * 2;
    
        const now = new Date();
        const orderDate = new Date(now.setDate(now.getDate() - daysAgo));
        orderDate.setHours(Math.floor(Math.random() * 24));
        orderDate.setMinutes(Math.floor(Math.random() * 60));
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = months[orderDate.getMonth()];
        const date = orderDate.getDate();
        
        const formattedDate = `${month} ${date}`;
    
        //for single
        const options = { 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        };
        const singleFormattedDate = orderDate.toLocaleString('en-US', options);
        dummyDates[index] = singleFormattedDate;
        return formattedDate;
    }

    const columns = [
        { field: 'date', headerName: 'date', flex: 1, minWidth: 100, renderCell: (params) => params.row.dateRenderer, },
        { field: 'total', headerName: 'Total', flex: 1, minWidth: 100, },
        { field: 'items', headerName: 'Items', flex: 3.3, minWidth: 180, renderCell: (params) => params.row.itemsRenderer, },
        { field: 'customer', headerName: 'Customer', flex: 2, minWidth: 120, },
        { 
            field: 'status', 
            headerName: 'Status', 
            flex: 1,
            minWidth: 100, 
            headerClassName: 'right-align',
            align: 'right',
            renderCell: (params) => params.row.statusRenderer,
            valueGetter: (params) => params.row.statusRenderer.props.value,
            sortComparator: (v1, v2, params1, params2) => {
                return v1 - v2;
                },
        },
    ];

    const rows = data.ecommerce.orders.map((order, index) => ({
        dateRenderer: getDate(index),
        date: dummyDates[index],
        id: order.id,
        items: order.items,
        itemsRenderer: <Items items={order.items} />,
        status: order.statusText,
        statusRenderer: <StatusPastille value={order.status} />,
        customer: data.ecommerce.customers.find(customer => customer.id === order.customerID).name,
        total: getTotal({items: order.items}),
    }));


    const [selectedRow, setSelectedRow] = useState(null);

    const theme = useTheme();

    if (!selectedRow) setSelectedRow(rows[0]);

    const layoutProps = { rows, columns, selectedRow, setSelectedRow, Single: SingleOrder };
    

    return data && (
        <Layout>
            <Divider />
            <Toolbar sx={{ background: theme.palette.primary.main, width: '100%'}}>
                <Typography variant="h4">Orders</Typography>
            </Toolbar>

            <Divider />
            
            <PageGridLayout {...layoutProps}  /> 
            
        </Layout>
    )
}
Orders.auth = true;
