import { makeStyles, createStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: () => ({
      textDecoration: 'none',
    }),
    container: () => ({
      padding: '1.5rem',
      display: 'flex',
      overflow: 'hidden',
      contain: 'content',
    }),
    content: () => ({
      width: '100%',
    }),
    primaryContent: () => ({
      display: 'flex',
      justifyContent: 'space-between',
    }),
    secondaryContent: () => ({
      display: 'contents',
      alignItems: 'center',
      width: '100%',
    }),
    primaryContentDetails: () => ({
      display: 'flex',
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: `auto`,
      flexDirection: `column`,
      width: 0,
      paddingRight: '5px',
    }),
  })
);
