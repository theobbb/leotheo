import { createTheme } from "@mui/material";

const palette = {
    
    primary: {
        main: "#FDF9F0",
        light: "#FFFDF8",
        dark: "rgba(0, 0, 0, 0.60)",
        hover: 'rgba(0, 0, 0, 0.04)',
        selected: 'rgba(0, 0, 0, 0.1)', 
    },
    button: {
        main: 'rgba(0, 0, 0, 0.1)',
        hover: 'rgba(0, 0, 0, 0.2)',
    },

    text: {
        main: '#1C1C1C',
    },
    background: {
        default: "#FDF9F0",
    },     
}

const typography = {

    fontFamily: [
        'PT Mono',
        'monospace'
    ].join(','),

    button: {
        fontSize: 15,
    }
}

const components = {

  MuiCard: {
    variants: [
      {
        props: { variant: 'main' },
        style: {
          boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          padding: '6px',
          minHeight: '100px',
          background: palette.primary.light,
          
        },
      },
    ],
  },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: palette.primary.selected,
            '&:hover': {
              backgroundColor: palette.primary.selected,
            },
          },

        },
      },   
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: '400',
          padding: '4px 12px',
          borderRadius: '4px',
          backgroundColor: palette.button.main,
          '&:hover': {
            backgroundColor: palette.button.hover,
          },
        },
        textPrimary: {
          color: palette.text.main,
        },
      },
      variants: [
        {
          props: { variant: 'inline' },
          style: {
            textTransform: 'none',
            padding: '0 6px',
            borderRadius: '12px',
            background: palette.primary.hover,
          },
        },
        {
          props: { variant: 'grid-row' },
          style: {
            background: 'none',
            textTransform: 'none',
            padding: '0 6px',
            borderRadius: '0px',
            padding: 0,
            margin: 0,
            '&:hover': {
              backgroundColor: palette.primary.hover,
            },
          },
        },
    ],
    },

    MuiButtonBase: {
        styleOverrides: {
            root: {
              '&.Mui-checked .MuiSvgIcon-root': {   
                color: palette.primary.dark,
              },
            },
        },
    },
    MuiDataGrid : {
        styleOverrides: {
            columnHeaders: {
                background: palette.primary.hover,
                
            },
            columnHeader: {
                '&.right-align .MuiDataGrid-columnHeaderDraggableContainer': {
                    
                    direction: 'rtl',
                }
            },
            row: {
                '&.Mui-selected': {
                    background: palette.primary.selected,
                },
                '&:hover:not(.Mui-selected)': {
                    background: 'none',
                },
                '&:hover.Mui-selected': {
                    background: palette.primary.selected,
                },
                
                
            },
            withBorderColor: {
                outlineColor: `${palette.primary.selected} !important`,
            }
        }
    }
    
    
}

const themeProperties = {
    typography,
    palette,
    components,
  }

export const theme = createTheme(themeProperties);