import { Box, Divider, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Arrows from './arrows'
import CloseIcon from '@mui/icons-material/Close';

export default function SingleHeader(props) {

    const { rows, selectedRow, setSelectedRow } = props;

    const theme = useTheme();
    const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchDownXL = useMediaQuery(theme.breakpoints.down('xl'));

    function handleClose() {
        setSelectedRow(null);
    }


    const Title = () => {
        const maxCharacters = matchDownXL? 10 : 14;
        const text = selectedRow?.singleTitle;
        let newText = text;
        if (text.length > maxCharacters) {
            let letterLen = 0;
            newText = '';
            const words = text.split(' ');
            words.forEach((word, index) => {
                
                if (maxCharacters - letterLen > word.length) {
                    newText += word;
                    if (words.length > index)
                    newText += ' ';

                } else if (maxCharacters - letterLen > 1)  {
                    newText += ' ' + word[0];
                }
                console.log(word, newText.split(' ').length);
                letterLen += word.length;
            })
            
        }
        return (
            <Typography variant='h4' sx={{wordBreak: 'nowrap'}}>{newText}</Typography>
        )
    }
    const Options = () => (
        <Box sx={{display: 'flex'}}>
            <Arrows {...props} />

            {matchDownMD && 
            <IconButton onClick={handleClose}>
                <CloseIcon sx={{fontSize: 24}} />
            </IconButton>
            }
        </Box>
    )


  return matchDownMD ? (
    <Box>
        
        <Toolbar sx={{display: 'flex', alignItems: 'center'}}>
            <Options />

        </Toolbar>
            
            
        <Divider sx={{width: '100%'}} />
        <Toolbar sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <Title />
        </Toolbar>
                
            
        <Divider />
    </Box>
  ) : (
    <Box>
        
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Options />
            
        </Toolbar>
        <Divider sx={{width: '100%'}} />
        <Toolbar sx={{display: 'flex', flexDirection: matchDownMD? 'column':'row', justifyContent: 'space-between'}}>
            <Title />
        </Toolbar>
        <Divider />
    </Box>
  )
}
