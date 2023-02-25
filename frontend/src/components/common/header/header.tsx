import * as React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import AppBar from '@mui/material/AppBar';

import { ElectioAppBar, StyledTabs, useStyles } from './header.styles';
//import Skeleton from '@mui/material/Skeleton';
import {
  getNavigationRoutePaths,
  HeaderBtnName,
  headerTabs,
  isShortcutPage,
  MenuItem,
  tabIndexForRouteNames,
} from './header.types';
import { HeaderMenu } from './header-menu/header-menu';
import { HeaderDrawer } from './header-drawer/header-drawer';
import ElectioIcon from '../../../assets/svgs/ElectioIcon.svg';
import { Box, Tab } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { HeaderDivider } from './header-divider';
import { UserContext } from 'contexts/user-context';
import { RouteNames, RoutePaths } from '../../../type-defs/route-types';
import { BrowserService } from '../../../services/browser-service';
import { getRouteUrl } from '../../../utils/url-util';
import { ElectioUserService } from '../../../services/electio-user-service/electio-user-service';

const pages = ['swipe', 'build', 'about us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Header: React.FC = () => {
  const classes = useStyles();
  const currentUser = React.useContext(UserContext);
  const currLocation = useLocation();
  const navigation = useNavigate();
  const getPageNameFromPath = () => currLocation.pathname.split('/')[1] as RouteNames;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [selectedShortcutMenuItem, setSelectedShortcutMenuItem] = React.useState(
    isShortcutPage(getPageNameFromPath()) ? getPageNameFromPath() : false
  );

  React.useEffect(() => {
    const pageName = getPageNameFromPath();
    if (isShortcutPage(pageName)) {
      setSelectedShortcutMenuItem(pageName);
    }
  }, [currLocation.pathname]);

  const handleBtnClick = (name: HeaderBtnName) => {
    //eventually build analytics
  };

  const handleToggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const handleToggleMenu = (open: boolean) => (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(open ? event.currentTarget : null);
  };

  const handleNavigate = (button: HeaderBtnName) => {
    if (button === HeaderBtnName.SignOut) {
      ElectioUserService.signUserOut();
    } else {
      handleBtnClick(button);
      navigation(getNavigationRoutePaths()[button]);
    }

    setAnchorEl(null);
    setIsDrawerOpen(false);
  };

  const handleTabSelection = (e: React.MouseEvent, item: MenuItem) => {
    e.preventDefault();
    const { name, routeName } = item;
    if (name && routeName) {
      if (e.ctrlKey || e.metaKey) {
        BrowserService.openUrl(getRouteUrl(getNavigationRoutePaths()[name]), true);
      } else {
        setSelectedShortcutMenuItem(routeName);
        handleNavigate(name);
      }
    }
  };

  const renderUserAvatar = () => {
    /**
     * TODO: replace this default picture
     */

    const photoURL = currentUser?.photoURL
      ? currentUser.photoURL
      : `https://pbs.twimg.com/media/BnRqwVgCAAEK9eK.png`;

    console.log(photoURL);

    if (currentUser) {
      /**console.log(photoURL);*/
      return (
        <img data-testid={'user-img'} className={classes.navbarImg} src={photoURL} alt={'avatar'} />
      );
    }
  };

  const getShortcutIcon = (item: MenuItem, isSelectedTab: boolean) => {
    return isSelectedTab ? item.iconSelected : item.icon;
  };

  const renderShortcutIcons = () => {
    const selectedTabIndex = tabIndexForRouteNames(selectedShortcutMenuItem);

    return (
      <StyledTabs value={selectedTabIndex} indicatorColor="primary" textColor="primary">
        {headerTabs.map((item, i) => {
          const isSelectedTab = selectedTabIndex === i;
          return (
            <Tab
              key={i}
              value={i}
              component="a"
              label={item.label}
              href={getRouteUrl(item.name ? getNavigationRoutePaths()[item.name] : '')}
              onClick={(e: React.MouseEvent) => handleTabSelection(e, item)}
              icon={getShortcutIcon(item, isSelectedTab)}
            />
          );
        })}
      </StyledTabs>
    );
  };

  const renderLogo = () => {
    return (
      <Link
        className={classes.centered}
        to={{ pathname: RoutePaths[RouteNames.Home] }}
        onClick={() => handleBtnClick(HeaderBtnName.Logo)}
      >
        <SVG src={ElectioIcon} className={classes.logo} height="55px" width="55px" />
      </Link>
    );
  };

  return (
    <>
      <ElectioAppBar id="header" position="fixed">
        <div className={classes.navbar}>
          <div className={classes.navbarLeft}>
            <Box sx={{ display: { sm: 'none', md: 'block' } }}>{renderLogo()}</Box>
            <Box sx={{ display: { sm: 'block', md: 'none' } }}>
              <div
                data-testid={`drawer-button`}
                className={classes.navbarLeftDrawerButton}
                onClick={handleToggleDrawer(true)}
              >
                {renderUserAvatar()}
              </div>
            </Box>
          </div>
          <div className={classes.navbarMiddle}>{renderShortcutIcons()}</div>
          <Box sx={{ display: { sm: 'none', md: 'flex' } }}>
            <div className={classes.navbarRight}>
              <div
                data-testid={`menu-button`}
                className={classes.menuButton}
                onClick={handleToggleMenu(true)}
              >
                <div className={classes.menuButtonIcons}>
                  {renderUserAvatar()}
                  <ExpandMoreIcon style={{ paddingLeft: '0.5rem' }} />
                </div>
              </div>
              <HeaderMenu
                anchorEl={anchorEl}
                handleNavigate={handleNavigate}
                handleClose={handleToggleMenu(false)}
              />
            </div>
          </Box>
        </div>
      </ElectioAppBar>
      <HeaderDrawer
        isPanelOpen={isDrawerOpen}
        handleNavigate={handleNavigate}
        handleToggleDrawer={handleToggleDrawer}
      />
      <HeaderDivider />
      <Box sx={{ display: { sm: 'block', md: 'none' } }}>
        <AppBar id="bottom-bar" position="fixed" className={classes.electioBottomAppBar}>
          <div data-testid={'navbar-mobile-view'} className={classes.navbarBottom}>
            {renderShortcutIcons()}
          </div>
        </AppBar>
      </Box>
    </>
  );
};
