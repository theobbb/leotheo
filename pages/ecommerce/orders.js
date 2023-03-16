import { Box, Button, Divider, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import Layout from "@layouts/main";
import { tempData } from "../../utils/tempData";
import StatusPastille, { statusText } from "../../components/StatusPastille";
import React, { useContext, useMemo, useState } from "react";
import PageGridLayout from "@components/dataGrid/gridPageLayout";
import SingleOrder from "@components/dataGrid/single/order";
import { DataContext } from "@utils/dataContext";
import { DataGrid, GridRow } from "@mui/x-data-grid";
import GridPage from "@components/dataGrid/gridPage";


function Items({items}) {

    let _items = [];
    for (let i = 0; i < items.length; i++) {
        let formattedItem = null;
        if (i < 2) {
            formattedItem = (
                <Box>
                    <span>{items[i].quantity}g&nbsp;</span>
                    
                    <Button variant='inline' onMouseDown={(event) => {event.stopPropagation()}}>
                        {items[i].item.name}
                    </Button>
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

export default function Orders() {

    const data = useContext(DataContext);

    const columns = [
        { field: 'date', headerName: 'date', flex: 1, minWidth: 80, renderCell: (params) => params.row.dateRenderer, },
        { field: 'total', headerName: 'Total', flex: 1, minWidth: 80 },
        { field: 'items', headerName: 'Items', flex: 3.3, minWidth: 160, renderCell: (params) => params.row.itemsRenderer, },
        { field: 'customer', headerName: 'Customer', flex: 2, minWidth: 120, hide: 'lg' },
        { 
            field: 'status', 
            headerName: 'Status', 
            flex: 1,
            minWidth: 100, 
            headerClassName: 'right-align',
            align: 'right',
            hide: 'xl',
            renderCell: (params) => params.row.statusRenderer,
            valueGetter: (params) => params.row.statusRenderer.props.value,
            sortComparator: (v1, v2, params1, params2) => {
                return v1 - v2;
                },
        },
    ];

    const rows = data.ecommerce.orders.map((order, index) => ({
        dateRenderer: order.shortDate,
        date: order.date,
        id: order.id,
        items: order.items,
        itemsRenderer: <Items items={order.items} />,
        status: order.statusText,
        statusRenderer: <StatusPastille value={order.status} />,
        customer: data.ecommerce.customers.find(customer => customer.id === order.customerID).name,
        total: order.total,
        prev: order.prev,
        next: order.next,
        singleTitle: order.id,
    }));

    const theme = useTheme();

    


    return data && (
        <Layout>
            <Divider />
            <Toolbar sx={{ background: theme.palette.primary.main, width: '100%'}}>
                <Typography variant="h4">Orders</Typography>
            </Toolbar>

            <Divider />

            <GridPage rows={rows} columns={columns} Single={SingleOrder} />

        </Layout>
    )
}
Orders.auth = true;

