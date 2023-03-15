import { Box, Button, Divider, Stack, Toolbar, Typography, useTheme } from "@mui/material";
import Layout from "@layouts/main";
import PropTypes from 'prop-types';
import {   DataGrid,
    GridToolbarContainer,
    GridToolbarExportContainer,
    GridCsvExportMenuItem,
    useGridApiContext,
    gridFilteredSortedRowIdsSelector,
    gridVisibleColumnFieldsSelector, } from '@mui/x-data-grid';
import { tempData } from "@utils/tempData";
import StatusPastille, { statusText } from "@components/StatusPastille";
import MenuItem from '@mui/material/MenuItem';
import PageGridLayout from "@components/dataGrid/gridPageLayout";
import { useState } from "react";
import SingleProduct from "@components/dataGrid/single/product";
import ProductImage from "@components/productImage";
import GridPage from "@components/dataGrid/gridPage";




const columns = [
    { 
        field: 'name', 
        headerName: 'NAME', 
        flex: 2, 
        minWidth: 200, 
        renderCell: (params) => params.row.name,
    },
    { 
        field: 'category', 
        headerName: 'CATEGORY', 
        flex: 1, 
        hide: 'lg',
        minWidth: 100, },
    { 
        field: 'stock', 
        headerName: 'STOCK', 
        flex: 1, 
        minWidth: 100, 
        headerClassName: 'right-align',
        align: 'right', 
    },
    { 
        field: 'price', 
        headerName: 'PRICE', 
        flex: 1, 
        minWidth: 100, 
        headerClassName: 'right-align',
        align: 'right', 
    },
    { 
        field: 'sold', 
        headerName: 'TOTAL SOLD', 
        flex: 1, 
        minWidth: 100, 
        headerClassName: 'right-align',
        align: 'right', 
    },
    { 
        field: 'sku', 
        headerName: 'SKU', 
        flex: 1, 
        minWidth: 100, 
        headerClassName: 'right-align',
        align: 'right', 
    },
    
];

function Name({name, color}) {
    
    return (
        
        <Stack direction='row' alignItems='center' spacing={2}>
            <ProductImage color={color} size={34} />
            <span>{name}</span>
        </Stack>
    )
}

const rows = tempData.ecommerce.products.map((product, index) => ({
    id: product.id,
    name: Name({name: product.name, color: product.color}),
    category: tempData.ecommerce.productCategories.find(cat => cat.id == product.categoryID).name,
    stock: product.stock,
    price: product.price,
    sold: product.sold,
    sku: product.sku,
    singleTitle: product.name,
    }));

export default function Products() {

    const [selectedRow, setSelectedRow] = useState(null);
    if (!selectedRow) setSelectedRow(rows[0]);

    const layoutProps = { rows, columns, selectedRow, setSelectedRow, Single: SingleProduct };

    const theme = useTheme();

    return (
        <Layout>
            <Divider />
            <Toolbar sx={{ background: theme.palette.primary.main, width: '100%'}}>
                <Typography variant="h4">Products</Typography>
            </Toolbar>

            <Divider />

            <GridPage rows={rows} columns={columns} Single={SingleProduct} />
        </Layout>
    )
}
Products.auth = true;



