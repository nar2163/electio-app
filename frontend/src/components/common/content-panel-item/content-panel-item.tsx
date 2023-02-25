import * as React from 'react';

import { useWindowSize } from '../../hooks/window-size-hook';
import { MuiTheme } from '../../../styles/mui-theme';
import { useStyles } from './content-panel.styles';
import { ContainerCard } from '../container-card';

export enum ActionButtonType {
  Continue = 'Continue',
  Close = 'Close',
}
export interface ContentPanelItemProps {
  children: React.ReactNode;
  actionButton?: ActionButtonType;
  onClick?: (panelData: string) => void;
  noInnerBorder?: boolean;
}

export const ContentPanelItem: React.FC<ContentPanelItemProps> = ({
  children,
  actionButton,
  onClick,
  noInnerBorder,
}: ContentPanelItemProps) => {
  const [windowWidth] = useWindowSize();
  const isSmallScreen = windowWidth < MuiTheme.breakpoints.values.sm;
  const classes = useStyles();

  return noInnerBorder ? (<ContainerCard noInnerBorders={true}>
    <div className={classes.container}>
        <div className={classes.content}>{children}</div>
      </div>
  </ContainerCard>) : (
    <ContainerCard>
      <div className={classes.container}>
        <div className={classes.content}>{children}</div>
      </div>
    </ContainerCard>
  );
};
