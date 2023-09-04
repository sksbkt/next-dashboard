import React, { createContext, useContext } from "react";


import { Box, IconButton, createTheme, useMediaQuery, useTheme, Typography, } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


type ThemeToggleButtonProps = {
    ColorModeContext: React.Context<{ toggleColorMode: () => void }>;
}

const ThemeToggleButton = (props: ThemeToggleButtonProps) => {

    const mobileCheck = useMediaQuery('(min-width:500px)');

    const { ColorModeContext = createContext({ toggleColorMode: () => { } }) } = props;
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);



    return <>
        {
            mobileCheck && (
                <Typography >{theme.palette.mode}</Typography>
            )
        }
        {theme.palette.mode} mode
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

    </>;
};

export default ThemeToggleButton;
