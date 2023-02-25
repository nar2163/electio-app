import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    carouselFlexContainer: () => ({
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      columnGap: '2px',
      height: '25rem',
      alignItems: 'center',
      marginTop: '-5.5rem',
      marginBottom: '-3.5rem',
      wordSpacing: '.25rem',
    }),
    carouselInnerContainer: () => ({
      flex: '1 1 70%',
    }),
    carouselArrowContainer: () => ({
      flex: '0 0 2.5rem',
      margin: '1.5rem',
    }),
    carouselButton: () => ({
      background: 'transparent',
      border: 'none',
    }),
    carouselInfoPanel: () => ({
      width: '80%',
      display: `inline-block`,
      margin: `0 auto`,
      padding: `3px`,
    }),
    infoPanelContainer: () => ({
      width: '100%',
      textAlign: 'center',
    }),
  })
);
