import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    menuItem: () => ({
      diplay: 'flex',
      alignItems: 'center',
      minWidth: '12.5rem',
      padding: '0.25rem 0',
      justifyContent: 'space-between',
      width: '100%',
    }),
    menuItemContent: () => ({
      display: 'flex',
      alignItems: 'center',
    }),
    menuIcon: () => ({
      display: 'flex',
      alignItems: 'center',
      width: '2.5rem',
      '& > svg': {
        width: '24px',
        height: '24px',
        '& path': {
          fill: 'gray',
        },
      },
    }),
  })
);
