import React from 'react';
import CottageIcon from '@mui/icons-material/Cottage';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import { RouteNames, RoutePaths } from 'type-defs/route-types';
import SwipeIcon from '@mui/icons-material/Swipe';
import SwipeOutlinedIcon from '@mui/icons-material/SwipeOutlined';
import BuildIcon from '@mui/icons-material/Build';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import ElderlyIcon from '@mui/icons-material/Elderly';
import ElderlyOutlinedIcon from '@mui/icons-material/ElderlyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import LogoutOutlineIcon from '@mui/icons-material/LogoutOutlined';
import { AccountCircle, Settings } from '@mui/icons-material';

export enum HeaderBtnName {
  Home = 'home',
  Logo = 'logo',
  Swipe = 'swipe',
  Build = 'build',
  AboutUs = 'about-us',
  Settings = 'settings',
  Profile = 'my-profile',
  SignOut = 'sign-out',
}

export interface MenuItem {
  label: string;
  routeName?: RouteNames;
  name?: HeaderBtnName;
  icon?: React.ReactElement;
  iconSelected?: React.ReactElement;
  divider?: boolean;
  shortcut?: boolean;
}

export const getNavigationRoutePaths = (): Record<HeaderBtnName, string> => {
  return {
    [HeaderBtnName.Logo]: `${RoutePaths[RouteNames.Home]}`,
    [HeaderBtnName.Home]: `${RoutePaths[RouteNames.Home]}`,
    [HeaderBtnName.Profile]: `${RoutePaths[RouteNames.Profile]}`,
    [HeaderBtnName.Swipe]: `${RoutePaths[RouteNames.Swipe]}`,
    [HeaderBtnName.Build]: `${RoutePaths[RouteNames.Build]}`,
    [HeaderBtnName.AboutUs]: `${RoutePaths[RouteNames.AboutUs]}`,
    [HeaderBtnName.Settings]: `${RoutePaths[RouteNames.Settings]}`,
    [HeaderBtnName.SignOut]: `${RoutePaths[RouteNames.SignOut]}`,
  };
};

export const headerShortcutItems: MenuItem[] = [
  {
    name: HeaderBtnName.Home,
    routeName: RouteNames.Home,
    label: 'Home',
    icon: <CottageOutlinedIcon />,
    iconSelected: <CottageIcon />,
    shortcut: true,
  },
  {
    name: HeaderBtnName.Swipe,
    routeName: RouteNames.Swipe,
    label: 'Swipe',
    icon: <SwipeOutlinedIcon />,
    iconSelected: <SwipeIcon />,
    shortcut: true,
  },
  {
    name: HeaderBtnName.Build,
    routeName: RouteNames.Build,
    label: 'Build',
    icon: <BuildOutlinedIcon />,
    iconSelected: <BuildIcon />,
    shortcut: true,
  },
  {
    name: HeaderBtnName.AboutUs,
    routeName: RouteNames.AboutUs,
    label: 'About Us',
    icon: <ElderlyOutlinedIcon />,
    iconSelected: <ElderlyIcon />,
    shortcut: true,
  },
];

export const headerMenuItems: MenuItem[] = [
  ...headerShortcutItems,
  {
    name: HeaderBtnName.Profile,
    label: 'Profile',
    icon: <AccountCircleOutlinedIcon />,
    iconSelected: <AccountCircle />,
  },
  {
    name: HeaderBtnName.Settings,
    label: 'Settings',
    icon: <SettingsOutlinedIcon />,
    iconSelected: <Settings />,
  },
  {
    name: HeaderBtnName.SignOut,
    label: 'Sign Out',
    icon: <LogoutOutlineIcon />,
    iconSelected: <LogoutIcon />,
  },
];

export const headerTabs: MenuItem[] = [...headerShortcutItems];

export const tabIndexForRouteNames = (pageName: boolean | RouteNames): boolean | number => {
  if (!pageName) {
    return false;
  } else {
    return headerShortcutItems.findIndex((item) => {
      return item.routeName && item.routeName === pageName;
    });
  }
};

export const isShortcutPage = (pageName: RouteNames): boolean => {
  return headerShortcutItems.some((item) => {
    return item.routeName && item.routeName === pageName;
  });
};

export interface MenuItem {
  label: string;
  routeName?: RouteNames;
  name?: HeaderBtnName;
  icon?: React.ReactElement;
  iconSelected?: React.ReactElement;
  divider?: boolean;
  shortcut?: boolean;
  newFlag?: boolean;
}
