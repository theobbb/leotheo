import { Box, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { DataGrid } from '@mui/x-data-grid';

export default function RecentOrders () {
    return (
        <Box sx={{height:'100%', width: '100%'}}>
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            />
        </Box>
    )
}


const columns = [
{ field: 'id', headerName: 'ID', width: 130 },
{ field: 'firstName', headerName: 'First name', width: 130 },
{ field: 'lastName', headerName: 'Last name', width: 130 },
{
field: 'age',
headerName: 'Age',
type: 'number',
width: 90,
},
{
field: 'fullName',
headerName: 'Full name',
description: 'This column has a value getter and is not sortable.',
sortable: false,
width: 160,
valueGetter: (params) =>
`${params.row.firstName || ''} ${params.row.lastName || ''}`,
},
];
const rows = [
{ id: 13256495, lastName: 'Snow', firstName: 'Jon', age: 35 },
{ id: 84554564, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
{ id: 53256498, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
{ id: 13246498, lastName: 'Stark', firstName: 'Arya', age: 16 },
{ id: 68652366, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
{ id: 84564564, lastName: 'Melisandre', firstName: null, age: 150 },
{ id: 14564364, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
{ id: 98452336, lastName: 'Frances', firstName: 'Rossini', age: 36 },
{ id: 13356498, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];