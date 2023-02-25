import { AppBar, createTheme, Tabs, Theme } from '@mui/material';
import { makeStyles, createStyles, withStyles } from '@mui/styles';
import { electioBody2, electioH6 } from 'styles/electio-typography';
import layout, * as electioLayout from 'styles/layout';

import * as electioTypography from '../../../styles/electio-typography';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: () => ({
      height: '55pxpx,',
      width: '55pxpx',
      cursor: 'pointer',
      position: 'static',
    }),
    logoText: () => ({
      paddingLeft: '3px',
    }),
    centered: () => ({
      position: 'relative',
      display: 'block',
      margine: 'auto',
    }),
    root: () => ({
      width: '100%',
      height: '70px',
      color: '#0E171F',
      padding: '0 1rem',
      display: 'flex',
      zIndex: '20',
      justifyContent: 'space-between',
      flexDirection: 'row',
      overflow: 'visible',
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 1px 0px #dce3e8',
    }),
    styledNavbar: () => ({
      root: {
        width: '100%',
        height: '70px',
        color: 'black',
        padding: '0 1rem',
        display: 'flex',
        zIndex: '20',
        justifyContent: 'space-between',
        flexDirection: 'row',
        overflow: 'visible',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 1px 0px #dce3e8',
        '&.MuiButton-root': {
          border: '2px black solid',
        },
        '&.MuiButton-text': {
          color: 'grey',
        },
      },
    }),
    navbar: () => ({
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'space-betwee',
      flexDirection: 'row',
      overflow: 'visible',
    }),
    navbarLeft: () => ({
      display: 'flex',
      alignItems: 'center',
      width: 'auto',
      paddingLeft: '1rem',
    }),
    navbarLeftDrawerButton: () => ({
      cursor: 'pointer',
      padding: '0 1rem',
    }),
    navbarMiddle: () => ({
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      margin: '0 1.5rem',
      justifyContent: 'center',
      [theme.breakpoints.down('sm')]: {
        marginRight: '0.5rem',
      },
    }),
    navbarRight: () => ({
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      paddingLeft: '1rem',
      color: 'grey',
      '& > a': {
        color: 'grey',
      },
      '&div:last-of-type': {
        paddingRight: '0',
      },
      '& .MuiTab-root': {
        ...electioBody2,
        fontFamily: electioLayout[`regular-font-family`],
        fontWeight: 'normal',
        color: 'grey',
        minWidth: '0 !important',
        padding: `0 2px`,
      },
      '& .Mui-selected': {
        ...electioH6,
      },
    }),
    electioBottomAppBar: () => ({
      width: '100%',
      bottom: 0,
      top: 'auto',
      height: electioLayout['electio-header-height'],
      backgroundColor: 'white',
      color: 'grey',
      padding: '0 16px',
      zIndex: 20,
    }),
    navbarBottom: () => ({
      ...electioBody2,
      height: '100%',
      alignItems: 'center',
      display: 'flex',
      padding: '0 0.5rem',
      minWidth: '3.75rem',
      justifyContent: 'center',
      '&:hover': {
        color: 'darkgray',
      },
    }),
    menuButtonIcons: () => ({
      display: 'flex',
      alignItems: 'center',
    }),
    leftAppBar: () => ({
      float: 'left',
    }),
    rightAppBar: () => ({
      float: 'right',
    }),
    menuButton: () => ({
      marginRight: theme.spacing(2),
    }),
    navbarImg: () => ({
      width: '3rem',
      height: '3rem',
      objectFit: 'cover',
      objectPosition: 'top',
      borderRadius: '50%',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
    }),
  })
);

export const ElectioAppBar = withStyles(() => ({
  root: {
    width: '100%',
    height: layout['electio-header-height'],
    backGroundColor: 'white',
    boxShadow: `0px 1px 0px #dce3e8`,
    color: `black`,
    padding: `0 16px`,
    zIndex: 20,
  },
}))(AppBar);

export const StyledTabs = withStyles(() => ({
  root: {
    height: '100%',
  },
  flexContainer: {
    height: '100%',
  },
}))(Tabs);

export const buttonTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: '2px black solid',
          color: 'grey',
        },
      },
    },
  },
});
