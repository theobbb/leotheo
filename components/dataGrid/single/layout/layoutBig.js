import { Box, Drawer, Toolbar, useTheme } from '@mui/material'

export default function LayoutBig(props) {
    const { children, drawerWidth } = props;
    const theme = useTheme();

  return (
    <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
            width: drawerWidth,
            zIndex: (theme) => theme.zIndex.drawer,
            background: theme.palette.primary.main,
          },

      /*
        height: '100vh',
        borderLeft: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,*/
    }}
    variant="persistent"
    anchor="right"
    open={open}
    >
    
     
      <Toolbar />
      {children}
    
        
    </Drawer>
  )
}
