import { makeStyles, createStyles } from '@mui/styles';
import { electioH2 } from '../../../styles/electio-typography';

export const useStyles = makeStyles(() =>
  createStyles({
    itemContentContainer: () => ({
      display: `inline-block`,
      margin: `0 auto`,
      width: `80%`,
    }),
    itemContentInfoCopy: () => ({
      fontSize: '18px',
      fontFamily: 'Georgia',
      textAlign: 'justify',
      lineHeight: '1.75rem',
      letterSpacing: '-1px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '80%',
      transform: 'translate(-50%, -50%)',
    }),
    itemContentInfoCopyContainer: () => ({
      position: 'relative',
      height: '15rem',
    }),
    itemContentTitleText: () => ({
      ...electioH2,
      position: 'relative',
      height: '2.5rem',
      zIndex: '15',
      float: 'left',
      paddingRight: '1rem',
    }),
    divider: () => ({
      borderBottom: `1px solid #D4E4FA`,
    }),
    semiCircleDivContainer: () => ({
      height: '17.188rem',
      width: '90%',
      display: 'inline-block',
      position: 'absolute',
      marginRight: '-1rem',
      marginTop: '3rem',
      flex: '1',
    }),
    semiCircleBackgroundDiv: () => ({
      width: '85%',
      height: '50%',
      opacity: '60%',
      backgroundColor: '#FFE5D4',
      borderRadius: '0rem 0rem 15rem 35rem',
      marginLeft: '-10rem',
      marginTop: '-4rem',
    }),
    carouselButton: () => ({
      background: 'transparent',
      border: 'none',
    }),
    contentPanelContainer: () => ({
      width: `100%`,
      textAlign: 'center',
    }),
    centerContentContainer: () => ({
      display: `inline-block`,
      margin: `0 auto`,
    }),
  })
);
