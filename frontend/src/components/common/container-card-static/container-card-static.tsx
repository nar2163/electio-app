import { Paper } from '@mui/material';
import * as React from 'react';

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

  return (
    <Paper elevation={4}>
      {halfWidth ? (
        <div>{children}</div>
      ) : (
        <div>{children}</div>
      )}
    </Paper>
  );
};
