import { MenuItem } from '@mui/material';
import * as React from 'react';
import { HeaderBtnName, MenuItem as MenuItemType } from '../header.types';
import { useStyles } from './header- menu-item.styles';

export interface HeaderMenuItemProps {
  menuItem: MenuItemType;
  onClick: (button: HeaderBtnName) => void;
}

export const HeaderMenuItem: React.FC<HeaderMenuItemProps> = ({
  menuItem,
  onClick,
}: HeaderMenuItemProps) => {
  const classes = useStyles();

  const handleClick = (e: React.MouseEvent) => {
    if (menuItem.name) {
      onClick(menuItem.name);
    }
  };

  return (
    <MenuItem onClick={handleClick}>
      <div className={classes.menuItem}>
        <div className={classes.menuItemContent}>
          <div className={classes.menuIcon}>{menuItem.icon}</div>
          {menuItem.label}
        </div>
      </div>
    </MenuItem>
  );
};
