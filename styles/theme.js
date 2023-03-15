import { createTheme } from "@mui/material";

const palette = {
    
    primary: {
        main: "#FDF9F0",
        light: "rgba(255, 255, 255, 0.30)",
        //light: "#FFFDF8",
        dark: "rgba(0, 0, 0, 0.60)",
        hover: 'rgba(0, 0, 0, 0.04)',
        selected: 'rgba(0, 0, 0, 0.1)', 
    },
    button: {
        main: 'rgba(0, 0, 0, 0.1)',
        hover: 'rgba(0, 0, 0, 0.2)',
        invertMain: 'rgba(0, 0, 0, 0.2)',
        invertHover: 'rgba(0, 0, 0, 0.26)',
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
        'Roboto Mono',
        //'Ubuntu Mono',
        //'PT Mono',
        'monospace'
    ].join(','),

    p: {
      fontSize: '0.9rem',
    },

    bold: {
      fontSize: '0.9rem',
      fontWeight: 500,
      opacity: 0.92,
    },

    button: {
      fontWeight: 500,
      fontSize: '0.9rem',
    }
}

const components = {

  MuiIconButton: {
    variants: [
      {
        props: { variant: 'invert' },
        style: {
          padding: '6px',
          background: palette.button.invertMain,
          color: palette.primary.dark,
          '&:hover': {
            backgroundColor: palette.button.invertHover,
          },
          '& .MuiSvgIcon-root': {
            color: palette.primary.main,
          }
        },
      }
    ]
  },

  MuiCard: {
    variants: [
      {
        props: { variant: 'main' },
        style: {
          boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          padding: '6px',
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

    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.Mui-checked .MuiSvgIcon-root': {   
            color: palette.primary.dark,
          },
          '&.grid-row-selected': {
            background: palette.primary.hover
          }
        },
      },
      variants: [
        {
          props: { variant: 'card' },
          style: {
            textTransform: 'none',
            
            position: 'relative',
            //background: palette.primary.hover,
            '&:hover .apexcharts-canvas': {
              //transform: 'scale(1.1)'
            },
          },

        },
      ]
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

    MuiDataGrid : {

      
        styleOverrides: {

            root: {
              background: palette.primary.light,
            },
            columnHeaders: {
                background: palette.primary.hover,
                
            },
            columnHeader: {
                '&.right-align .MuiDataGrid-columnHeaderDraggableContainer': {
                    
                    direction: 'rtl',
                }
            },
            row: {
              //background: palette.primary.light,
                '&.Mui-selected': {
                    background: palette.primary.selected,
                },
                '&:hover:not(.Mui-selected)': {
                    background: palette.primary.hover,
                },
                '&:hover.Mui-selected': {
                    background: palette.primary.selected,
                },
                
                
            },
            footerContainer: {
              //opacity: 0.86,
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