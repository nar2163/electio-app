import { Paper } from '@mui/material';
import * as React from 'react';
import { useStyles } from './container-card-static.styles';

export interface ContainerCardStaticProps {
  children: React.ReactNode;
  style?: {
    backgroundColor: string;
    borderColor: string;
  };
  halfWidth?: boolean;
}

export const ContainerCardStatic: React.FC<ContainerCardStaticProps> = ({
  children,
  style,
  halfWidth,
}) => {
  const classes = useStyles({ style });

  return (
    <Paper elevation={4}>
      {halfWidth ? (
        <div className={classes.halfWidthDisplay}>{children}</div>
      ) : (
        <div className={classes.root}>{children}</div>
      )}
    </Paper>
  );
};
