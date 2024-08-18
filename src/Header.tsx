import { Toolbar, IconButton, MenuItem, Box, Divider, Typography, styled, useTheme, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Link } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Home, Menu, LinkedIn, GitHub, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { HREF_GITHUB, HREF_LINKEDIN } from './Constants';
import { useState } from 'react';
import { ArticleList } from './articles/ArticleList';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    }),
    /**
     * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
     * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
     * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
     * proper interaction with the underlying content.
     */
    position: 'relative',
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

const Header = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="default" open={open}>
                <Toolbar >
                    <IconButton edge="start" color="inherit" aria-label="home" href="/" sx={{ mr: 2 }}>
                        <Home />
                    </IconButton>

                    <Typography>Sebastian Lueneburg</Typography>

                    <Typography sx={{ flexGrow: 1 }} />

                    <IconButton color="inherit" aria-label="linkedin" href={HREF_LINKEDIN} target="_blank">
                        <LinkedIn />
                    </IconButton>

                    <IconButton color="inherit" aria-label="github" href={HREF_GITHUB} target="_blank">
                        <GitHub />
                    </IconButton>

                    <IconButton
                        color="inherit"
                        aria-label="nav drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        sx={{ ...(open && { display: 'none' }) }}
                    >
                        <Menu />
                    </IconButton>

                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeft /> : <ChevronRight />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {ArticleList.map((article, i) => (
                        <ListItem            
                            disableGutters            
                            key={i}>
                            <Link href={`../${article.route}`}>{article.title}</Link>                            
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};

export default Header;