export enum RouteNames {
  Home = 'home',
  AboutUs = 'about-us',
  Swipe = 'swipe',
  Build = 'build',
  Settings = 'settings',
  Profile = 'my-profile',
  Logo = 'logo',
  LogIn = 'log-in',
  SignUp = 'sign-up',
  SignOut = 'sign-out',
  WelcomeAnimation = 'welcome-animation',
}

export enum SwipeRouteNames {
  DealersChoice = 'dealers-choice',
  RemoteDuo = 'remote-duo',
  CuratedList = 'curated-list',
  ShareScreenDuo = 'share-screen-duo',
  SoloSpeedRound = 'solo-speed-round',
  LoveItOrLoseIt = 'love-it-or-lose-it',
}

export const SwipeRoutePaths: Record<SwipeRouteNames, string> = {
  [SwipeRouteNames.DealersChoice]: `/swipe/${SwipeRouteNames.DealersChoice}`,
  [SwipeRouteNames.RemoteDuo]: `/swipe/${SwipeRouteNames.RemoteDuo}`,
  [SwipeRouteNames.CuratedList]: `/swipe/${SwipeRouteNames.CuratedList}`,
  [SwipeRouteNames.ShareScreenDuo]: `/swipe/${SwipeRouteNames.ShareScreenDuo}`,
  [SwipeRouteNames.SoloSpeedRound]: `/swipe/${SwipeRouteNames.SoloSpeedRound}`,
  [SwipeRouteNames.LoveItOrLoseIt]: `/swipe/${SwipeRouteNames.LoveItOrLoseIt}`,
}

export enum BuildRouteNames {
  Solo = 'solo',
  Group = 'group',
}

export const BuildRoutePaths: Record<BuildRouteNames, string> = {
  [BuildRouteNames.Solo]: `build/${BuildRouteNames.Solo}`,
  [BuildRouteNames.Group]: `build/${BuildRouteNames.Group}`,
}

export const RoutePaths: Record<RouteNames, string> = {
  [RouteNames.Home]: `/`,
  [RouteNames.Profile]: `/${RouteNames.Profile}`,
  [RouteNames.AboutUs]: `/${RouteNames.AboutUs}`,
  [RouteNames.Swipe]: `/${RouteNames.Swipe}`,
  [RouteNames.Build]: `/${RouteNames.Build}`,
  [RouteNames.Settings]: `/${RouteNames.Settings}`,
  [RouteNames.Logo]: `/${RouteNames.Logo}`,
  [RouteNames.LogIn]: `/${RouteNames.LogIn}`,
  [RouteNames.SignUp]: `/${RouteNames.SignUp}`,
  [RouteNames.SignOut]: `/${RouteNames.SignOut}`,
  [RouteNames.WelcomeAnimation]: `'${RouteNames.WelcomeAnimation}`,
}
