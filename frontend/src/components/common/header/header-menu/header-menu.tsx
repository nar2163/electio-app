import * as React from 'react';
import { Divider, Menu } from '@mui/material';
import { HeaderBtnName, headerMenuItems } from '../header.types';
import { useStyles } from './header-menu.styles';
import { HeaderMenuItem } from '../header-menu-item';

export interface HeaderMenuProps {
  anchorEl: HTMLElement | null;
  handleNavigate: (button: HeaderBtnName) => void;
  handleClose: (event: React.MouseEvent<HTMLElement>) => void;
}

export const HeaderMenu: React.FC<HeaderMenuProps> = ({
  anchorEl,
  handleNavigate,
  handleClose,
}: HeaderMenuProps) => {
  const classes = useStyles();

  return (
    <Menu
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      anchorEl={anchorEl}
      keepMounted
      open={!!anchorEl}
      onClose={handleClose}
    >
      {headerMenuItems.map((item, i) => {
        if (!item.shortcut) {
          return !item.divider ? (
            <div key={i}>
              <HeaderMenuItem menuItem={item} onClick={handleNavigate} />
            </div>
          ) : (
            <div key={i} className={classes.menuDivider}>
              <Divider />
            </div>
          );
        }
      })}
    </Menu>
  );
};
