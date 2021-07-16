import React from 'react';
import { makeStyles, 
        AppBar,
        Toolbar, 
        IconButton, 
        Button, 
        ListItemIcon, 
        List, 
        Typography, 
        Divider, 
        ListItem, 
        ListItemText, 
        Drawer, 
        Box, 
        ListSubheader, 
        Grid,
        Hidden,
        Switch
    } from '@material-ui/core';

import {useTheme} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import AppsIcon from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';

import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';

import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';

import AddCircle from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme)=>({
    root:{
        height: '100vh',
        backgroundColor: theme.palette.background.dark,
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
        height: 25, 
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none'
    },
    menuIcon: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6)
    },
    icons: {
        paddingRight: theme.spacing(5)
    },
    grow: {
        flexGrow: 1,
    },
    listItemText: {
        fontSize: 14,
    },
    listItem: {
        paddingTop: 4,
        paddingBottom: 4,
    },
    subheader: {
        textTransform: 'uppercase',
    }
  }));

const videos = [
    {
        id: 1,
        title: 
            'TÍTULO DO VÍDEO | Subtítulo #01',
        channel: 'Autor do vídeo',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/capa.png',
    },
    {
        id: 2,
        title: 
            'TÍTULO DO VÍDEO | Subtítulo #02',
        channel: 'Autor do vídeo',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/capa.png',
    },
    {
        id: 3,
        title: 
            'TÍTULO DO VÍDEO | Subtítulo #03',
        channel: 'Autor do vídeo',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/capa.png',
    },
    {
        id: 4,
        title: 
            'TÍTULO DO VÍDEO | Subtítulo #04',
        channel: 'Autor do vídeo',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/capa.png',
    },
    {
        id: 5,
        title: 
            'TÍTULO DO VÍDEO | Subtítulo #05',
        channel: 'Autor do vídeo',
        date: 'há 2 horas',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/capa.png',
    },
    {
        id: 6,
        title: 
            'TÍTULO DO VÍDEO | Subtítulo #06',
        channel: 'Autor do vídeo',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/capa.png',
    },
    {
        id: 7,
        title: 
            'TÍTULO DO VÍDEO | Subtítulo #07',
        channel: 'Autor do vídeo',
        date: 'há 1 dia',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/capa.png',
    },
    {
        id: 8,
        title: 
            'TÍTULO DO VÍDEO | Subtítulo #08',
        channel: 'Autor do vídeo',
        date: 'há 2 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/capa.png',
    }
]

function Home({darkMode, setDarkMode}){
    const classes = useStyles();
    const theme = useTheme();

    return(
        <div className={classes.root}>
            <AppBar color='inherit' className={classes.appBar}>
                <Toolbar>
                    <IconButton
                    edge='start'
                    className={classes.menuIcon}
                    aria-label='menu'
                    >
                    <MenuIcon/>
                    </IconButton>
                    <img src={theme.palette.type === 'dark' ? '/images/preto.png' : '/images/preto.png' } alt="logo" className={classes.logo}/>
                    <Typography variant='body2'>
                       Estuda Dev
                    </Typography>

                    <div className={classes.grow}/>
                    <Switch 
                    value={darkMode} 
                    onChange={() => setDarkMode(!darkMode)}  
                    className={classes.icons}
                    />
                    <IconButton
                    className={classes.icons}
                    >
                    <VideoCall/>
                    </IconButton>

                    <IconButton
                    className={classes.icons}
                    >
                    <AppsIcon/>
                    </IconButton>

                    <IconButton
                    className={classes.icons}
                    >
                    <MoreVert/>
                    </IconButton>

                    <Button startIcon={<AccountCircle/>} variant='outlined' color='secondary'>Criar conta</Button>
                </Toolbar>
            </AppBar>
            <Box display='flex'>

            <Hidden mdDown>
                <Drawer className={classes.drawer} variant="permanent" classes={{
                paper: classes.drawerPaper,
            }}
            >
            <Toolbar/>
            <div className={classes.drawerContainer}>
                <List>
                    <ListItem button classes={{root: classes.listItem}} >
                       <ListItemIcon>{<HomeIcon />} </ListItemIcon>
                        <ListItemText classes={{
                            primary: classes.listItemText
                        }}primary = {'Início'}
                        />
                    </ListItem>

                </List>
               
                <List>
                    
                    <ListItem button classes={{root: classes.listItem}} >
                       <ListItemIcon>{<VideoLibrary/>} </ListItemIcon>
                        <ListItemText classes={{
                            primary: classes.listItemText
                        }}primary = {'Biblioteca'}
                        />
                    </ListItem>

                    <ListItem button classes={{root: classes.listItem}} >
                       <ListItemIcon>{<History/>} </ListItemIcon>
                        <ListItemText classes={{
                            primary: classes.listItemText
                        }}primary = {'Histórico'}
                        />

                    </ListItem>
                </List>
                <Divider/>
                    <Box p={7}>
                        <Typography variant='body2'>
                       Crie sua conta para ter acesso a todas as aulas
                        </Typography>
                        <Box mt={2}>
                            <Button
                            variant='outlined'
                            color='secondary'
                            startIcon={<AccountCircle/>}
                            >
                            Criar conta
                            </Button>
                        </Box>
                    </Box>
                <Divider/>
                <List
                component='nav'
                aria-labelledby='nested-list-subheader'
                subheader={
                    <ListSubheader
                    component='div'
                    id='nested-list-subheader'
                    className={classes.subheader}
                    >
                    Conteúdos
                    </ListSubheader>
                }
                >
                <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>
                    <AddCircle/>
                </ListItemIcon>
                <ListItemText classes={{
                            primary: classes.listItemText
                        }}primary = {'React'}
                        />
                </ListItem>

                <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>
                    <AddCircle/>
                </ListItemIcon>
                <ListItemText classes={{
                            primary: classes.listItemText
                        }}primary = {'Typescript'}
                        />
                </ListItem>

                <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>
                    <AddCircle/>
                </ListItemIcon>
                <ListItemText classes={{
                            primary: classes.listItemText
                        }}primary = {'Material UI'}
                        />
                </ListItem>

                <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>
                    <AddCircle/>
                </ListItemIcon>
                <ListItemText classes={{
                            primary: classes.listItemText
                        }}primary = {'CSS'}
                        />
                </ListItem>

                <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>
                    <AddCircle/>
                </ListItemIcon>
                <ListItemText classes={{
                            primary: classes.listItemText
                        }}primary = {'HTML'}
                        />
                </ListItem>

                <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>
                        <AddCircle/>
                    </ListItemIcon>
                    <ListItemText classes={{
                            primary: classes.listItemText
                        }}primary = {'C#'}
                        />
                </ListItem>

                <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>
                        <AddCircle/>
                    </ListItemIcon>
                    <ListItemText classes={{
                            primary: classes.listItemText
                        }}primary = {'Java'}
                        />
                </ListItem>

                <ListItem button classes={{root: classes.listItem}}>
                    <ListItemIcon>
                        <AddCircle/>
                    </ListItemIcon>
                    <ListItemText classes={{
                            primary: classes.listItemText
                        }}primary = {'Classes'}
                        />
                </ListItem>
                
                <Divider/>
                </List>
            </div>
            </Drawer>
            </Hidden>

            <Box p={8}>
                <Toolbar/>
                <Typography
                variant='h5'
                color='textPrimary'
                style={{ fortWeight: 800 }}
                >
                   Vídeos disponíveis
                </Typography>

                <Grid container spacing={4}>
                    {
                        videos.map((item, index) =>(
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <Box>
                                    <img
                                    styles={{ width: '100%' }}
                                    alt={item.title}
                                    src={item.thumb}
                                    />
                                    <Box>
                                    <Typography
                                    styles={{ fontWeight: 600 }}
                                    gutterBottom
                                    variant='body1'
                                    color='textPrimary'
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                    display='block'
                                    variant='body2'
                                    color='textSecondary'
                                    >
                                        {item.channel}
                                    </Typography>
                                    
                                    </Box>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
        </div>
    );
}

export default Home;