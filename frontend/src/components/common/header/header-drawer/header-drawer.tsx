import * as React from 'react';
import { Backdrop, Divider, Drawer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { HeaderMenuItem } from '../header-menu-item';
import { HeaderBtnName, headerMenuItems } from '../header.types';
import { UserContext } from 'contexts/user-context';
import { useStyles } from './header-drawer.styles';

export interface HeaderDrawerProps {
  isPanelOpen: boolean;
  handleNavigate: (button: HeaderBtnName) => void;
  handleToggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export const HeaderDrawer: React.FC<HeaderDrawerProps> = ({
  isPanelOpen,
  handleNavigate,
  handleToggleDrawer,
}: HeaderDrawerProps) => {
  const currentUser = React.useContext(UserContext);
  const classes = useStyles();
  const shouldShowShortcuts = window.screen.width <= 768 && window.screen.height <= 859;

  return (
    <>
      <Drawer open={isPanelOpen} onClose={handleToggleDrawer(false)}>
        <div className={classes.root}>
          <div className={classes.header}>
            <img className={classes.headerImg} src={`${currentUser.photoURL}`} alt="user-avatar" />
            <div className={classes.headerText}>{`${currentUser.displayName}`}</div>
            <CloseIcon className={classes.headerIcon} onClick={handleToggleDrawer(false)} />
          </div>
          {headerMenuItems.map((item, i) => {
            return !item.divider ? (
              (!item.shortcut || (item.shortcut && shouldShowShortcuts)) && (
                <div
                  key={i}
                  data-testid={`drawer-list-item-${item.label.toLowerCase().replace(' ', '-')}`}
                >
                  <HeaderMenuItem menuItem={item} onClick={handleNavigate} />
                </div>
              )
            ) : (
              <div key={i} className={classes.menuDivider}>
                <Divider />
              </div>
            );
          })}
        </div>
      </Drawer>
      <Backdrop open={isPanelOpen} />
    </>
  );
};
