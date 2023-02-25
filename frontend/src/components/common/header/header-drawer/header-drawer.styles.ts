import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: () => ({
      width: '300px',
    }),
    header: () => ({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.75rem',
      marginBottom: '1.25rem',
      backgroundColor: 'light gray',
      color: 'gray',
      '& + a': {
        textDecoration: 'none',
      },
    }),
    headerImg: () => ({
      width: '3rem',
      height: '3rem',
      objectFit: 'cover',
      ObjectPosition: 'top',
      borderRadius: '50%',
    }),
    headerText: () => ({ marginRight: 'auto', marginLeft: '0.875rem' }),
    headerIcon: () => ({ cursor: 'pointer' }),
    menuDivider: () => ({ padding: '1rem 0' }),
  })
);
