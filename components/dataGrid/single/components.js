import { Box, Card, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
/*
const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));
const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));
const matchDownXL = useMediaQuery(theme.breakpoints.down('xl'));*/

//const rowSpacing = matchDownXL? 0.5:0.6;
//const dividerSpacing = matchDownXL? 0.5:0.6;

export function Title(props) {
    return (
      <Grid item xs={12} sm={12} md={12} xl={5}>
        <Typography variant='bold'>{props.children}</Typography>
      </Grid>
    )
  }
  export function Value(props) {
    return (
        <Grid item xs={12} sm={12} md={12} xl={7} >
        <Typography variant='p'>{props.children}</Typography>
        </Grid>
    )
}
export function GridTitle(props) {
    return <Typography sx={{marginBottom: 1}} variant='h6'>{props.children}</Typography>
}

export function RowDivider () {
    const matchDownXL = useMediaQuery(theme => theme.breakpoints.down('xl'));
    const spacing = matchDownXL? 0.3 : 0.5;
    return <Grid item xs={12} sx={{my: spacing}}><Divider /></Grid>
}

export function SingleCard ({children}) {
    const matchDownXL = useMediaQuery(theme => theme.breakpoints.down('xl'));
    const spacing = matchDownXL? 0.3 : 0.5;
    return (
        <Card variant='main' sx={{py: spacing, px: 2, marginBottom: 5}}>
            <Grid container rowSpacing={spacing} columnSpacing={1} sx={{position: 'relative', marginTop: 0}}>
                {children}
                <Grid item xs={12}></Grid>
            </Grid>
        </Card>
    )
}

export function CardDivider () {
    return <Box sx={{marginBottom: 6}} />
}
export function SemiCardDivider () {
    return <Box sx={{marginBottom: 3}} />
}