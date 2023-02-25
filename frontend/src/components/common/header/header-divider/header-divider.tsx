import { styled, Toolbar, useTheme } from '@mui/material';
import { useWindowSize } from 'components/hooks/window-size-hook';
import * as React from 'react';

export const HeaderDivider: React.FC = () => {
  const theme = useTheme();
  const [windowWidth] = useWindowSize();
  const isSmallScreen = windowWidth < theme.breakpoints.values.sm;
  const header = document.getElementById('header');
  const ToolbarDivider = styled(Toolbar)({
    minHeight: header
      ? `${header.offsetHeight + (isSmallScreen ? 10 : 0)}px !important`
      : isSmallScreen
      ? '80px'
      : '70px',
  });

  return <ToolbarDivider />;
};
