import { makeStyles } from '@mui/styles';
import { MuiTheme } from '../../../styles/mui-theme';

export interface ContainerCardStyleProps {
  style?: {
    backgroundColor: string;
    borderColor: string;
  };
}

export const useStyles = makeStyles({
  root: (props: ContainerCardStyleProps) => ({
    backgroundColor: props.style ? props.style.backgroundColor : 'white',
    border: `1px solid ${props.style ? props.style.borderColor : 'DCE3E8'}`,
    borderRadius: '4px',
    cursor: 'cursor',

    [MuiTheme.breakpoints.down('xs')]: {
      borderRadius: 0,
      border: 0,
      borderTop: `1px solid ${props.style ? props.style.borderColor : 'DCE3E8'}`,
      borderBottom: `1px solid ${props.style ? props.style.borderColor : 'DCE3E8'}`,
    },
  }),
  halfWidthDisplay: (props: ContainerCardStyleProps) => ({
    width: `50%`,
    backgroundColor: props.style ? props.style.backgroundColor : 'white',
    border: `1px solid ${props.style ? props.style.borderColor : 'DCE3E8'}`,
    borderRadius: '4px',
    cursor: 'cursor',

    [MuiTheme.breakpoints.down('xs')]: {
      borderRadius: 0,
      border: 0,
      borderTop: `1px solid ${props.style ? props.style.borderColor : 'DCE3E8'}`,
      borderBottom: `1px solid ${props.style ? props.style.borderColor : 'DCE3E8'}`,
    },
  }),
});
