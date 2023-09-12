import * as React from 'react';
import { useTheme, Theme, CSSObject } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import NextLink from 'next/link';
import { signOut, useSession } from 'next-auth/react';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import { useMediaQuery } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import EqualizerIcon from '@mui/icons-material/Equalizer';

import scss from './SideMenu.module.scss'

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

function SideMenu() {
    const menuRouteList = ['data', 'profile', 'settings', ''];
    const menuListTranslations = ['Data', 'Profile', 'Settings', 'Sign Out'];
    const menuListIcons = [
        <EqualizerIcon key={0} />,
        <Person2Icon key={1} />,
        <SettingsIcon key={2} />,
        <ExitToAppIcon key={3} />
    ];


    const { data: session } = useSession();

    const mobileCheck = useMediaQuery('(min-width:600px)');

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);


    const handleDrawerToggle = () => {
        setOpen(prev => !prev);
    };

    const handleListItemClick = (action: string) => {
        if (session && action == '')
            signOut();
    }

    return (
        <Drawer variant="permanent" open={open} sx={{

            ['& .MuiDrawer-paper']: {
                top: mobileCheck ? 64 : 57,
                width: drawerWidth,
                flexShrink: 0,
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
                ...(open && {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                }),
                ...(!open && {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': closedMixin(theme),
                }),
            },

        }}>
            <div className={scss.DrawerHeader}>
                <IconButton onClick={handleDrawerToggle}>
                    {theme.direction === 'rtl' ?
                        <ChevronRightIcon />
                        :
                        <ChevronLeftIcon />
                    }
                </IconButton>
            </div>

            <Divider />
            <List>
                {menuListTranslations.map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                        <NextLink
                            title={menuListTranslations[index]}
                            className={scss.link}
                            href={`/dashboard/${menuRouteList[index]}`}
                        >

                            <ListItemButton
                                onClick={() => handleListItemClick(menuRouteList[index])}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {menuListIcons[index]}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{
                                    opacity: open ? 1 : 0,
                                    color: theme.palette.text.primary
                                }} />
                            </ListItemButton>
                        </NextLink>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

export default SideMenu;
