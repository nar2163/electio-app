import * as React from 'react';
import { useStyles } from './container-card.styles';

export interface ContainerCardProps {
  children: React.ReactNode;
  hoverable?: boolean;
  noInnerBorders?: boolean;
  style?: {
    backgroundColor: string;
    borderColor: string;
    marginTop?: string;
  };
}

export const ContainerCard: React.FC<ContainerCardProps> = ({
  children,
  hoverable,
  noInnerBorders,
  style,
}) => {
  const classes = useStyles({ hover: hoverable, style });

  return noInnerBorders ? (
    <div className={classes.noInnerBorders}>{children}</div>
  ) : (
    <div className={classes.root}>{children}</div>
  );
};
