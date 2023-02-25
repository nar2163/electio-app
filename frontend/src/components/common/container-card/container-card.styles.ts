import { makeStyles } from '@mui/styles';
import { MuiTheme } from '../../../styles/mui-theme';

import * as electioColors from '../../../styles/colors';

export interface ContainerCardStyleProps {
  hover?: boolean;
  style?: {
    backgroundColor: string;
    borderColor: string;
    marginTop?: string;
  };
}

export const useStyles = makeStyles({
  root: (props: ContainerCardStyleProps) => ({
    backgroundColor: props.style ? props.style.backgroundColor : 'white',
    border: `1px solid ${props.style ? props.style.borderColor : `${electioColors.blue10}`}`,
    borderRadius: '4px',
    cursor: props.hover ? 'pointer' : undefined,
    marginTop: props.style?.marginTop && props.style?.marginTop,

    
    [MuiTheme.breakpoints.down('xs')]: {
      borderRadius: 0,
      border: 0,
      borderTop: `1px solid ${props.style ? props.style.borderColor : `${electioColors.blue10}`}`,
      borderBottom: `1px solid ${
        props.style ? props.style.borderColor : `${electioColors.blue10}`
      }`,
    },

    '&:hover': props.hover
      ? {
          boxShadow: `0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%), 0 5px 12px 4px rgb(0 0 0 / 9%)`,
          transition: 'box-shadow .3s,border-color .3s,-webkit-box-shadow .3s',
        }
      : undefined,
  }),
  noInnerBorders: (props: ContainerCardStyleProps) => ({
    backgroundColor: props.style ? props.style.backgroundColor : 'white',
    borderRadius: '4px',
    cursor: props.hover ? 'pointer' : undefined,
    
    [MuiTheme.breakpoints.down('xs')]: {
      borderRadius: 0,
      border: 0,
      borderTop: `1px solid ${props.style ? props.style.borderColor : `${electioColors.blue10}`}`,
      borderBottom: `1px solid ${
        props.style ? props.style.borderColor : `${electioColors.blue10}`
      }`,
    },

    '&:hover': props.hover
      ? {
          boxShadow: `0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%), 0 5px 12px 4px rgb(0 0 0 / 9%)`,
          transition: 'box-shadow .3s,border-color .3s,-webkit-box-shadow .3s',
        }
      : undefined,
  }),
});
