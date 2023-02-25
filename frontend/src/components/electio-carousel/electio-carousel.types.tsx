import React from 'react'
import SVG from 'react-inlinesvg'
import {
  RouteNames,
  SwipeRouteNames,
  SwipeRoutePaths,
} from '../../type-defs/route-types'
import SwipeDealersChoice from '../../assets/svgs/SwipeDealersChoice.svg'
import SwipeRemoteDuo from '../../assets/svgs/SwipeRemoteDuo.svg'
import SwipeCuratedList from '../../assets/svgs/SwipeCuratedList.svg'
import SwipeShareScreenDuo from '../../assets/svgs/SwipeShareScreenDuo.svg'
import SwipeSoloSpeedRound from '../../assets/svgs/SwipeSoloSpeedRound.svg'
import SwipeLoveItOrLoseIt from '../../assets/svgs/SwipeLoveItOrLoseIt.svg'
import {
  AssuredWorkload,
  Attractions,
  ConnectWithoutContact,
  SafetyDivider,
  SixtyFps,
  ThumbsUpDown,
} from '@mui/icons-material'

export enum SwipeType {
  DealersChoice = 'dealers-choice',
  RemoteDuo = 'remote-duo',
  ShareScreenDuo = 'share-screen-duo',
  CuratedList = 'curated-list',
  SoloSpeedRound = 'solo-speed-round',
  LoveItOrLoseIt = 'love-it-lose-it',
}

export interface SwipeItem {
  label: string
  routeName?: RouteNames
  name?: SwipeType
  icon?: React.ReactElement
}

export const getNavigationSwipeRoutePaths = (): Record<SwipeType, string> => {
  return {
    [SwipeType.DealersChoice]: `${
      SwipeRoutePaths[SwipeRouteNames.DealersChoice]
    }`,
    [SwipeType.RemoteDuo]: `${SwipeRoutePaths[SwipeRouteNames.RemoteDuo]}`,
    [SwipeType.ShareScreenDuo]: `${
      SwipeRoutePaths[SwipeRouteNames.ShareScreenDuo]
    }`,
    [SwipeType.CuratedList]: `${SwipeRoutePaths[SwipeRouteNames.CuratedList]}`,
    [SwipeType.SoloSpeedRound]: `${
      SwipeRoutePaths[SwipeRouteNames.CuratedList]
    }`,
    [SwipeType.LoveItOrLoseIt]: `${
      SwipeRoutePaths[SwipeRouteNames.LoveItOrLoseIt]
    }`,
  }
}

export const getTooltipSwipeTitles = (): Record<SwipeType, string> => {
  return {
    [SwipeType.DealersChoice]: `Dealer's Choice`,
    [SwipeType.RemoteDuo]: `Remote Swipe Duo`,
    [SwipeType.ShareScreenDuo]: `Screen Share Duo`,
    [SwipeType.CuratedList]: `Curated Lists`,
    [SwipeType.SoloSpeedRound]: `Solo Speed Round`,
    [SwipeType.LoveItOrLoseIt]: `Love It Or Lose It`,
  }
}

export const getCarouselInfoDetails = (): Record<SwipeType, string> => {
  return {
    [SwipeType.DealersChoice]: `We choose the deck, we set the rules. But then again, doesn't that take all the pressure off? Give it a whirl and you may just surprise yourself with what you find! The more you swipe from this deck, the more you build your other decks! We keep track of your likes so that we're sure to show them to you again!`,
    [SwipeType.RemoteDuo]: `Not in the same place? No problem! Go ahead and choose a Deck and swipe through it just like you normally would. Afterwards, we'll give you a code to send to your friend so they can swipe through next just like they were sitting right next to you!`,
    [SwipeType.ShareScreenDuo]: `Take turns swiping through a deck of your choice. First, one person swipes through a deck. When they're done, they pass the screen along and let the other person swipe through the same deck. We compare your swipes and select the best possible option! If you're both registered users, we'll save this result for future reference!`,
    [SwipeType.CuratedList]: `We collected some of the greatest lists of all time for you to swipe through: yours! Well, if you've built some already that is. If not, don't worry! We have plenty of special lists like the top 10 scifi movies of the 1980's, or B Horror Movies for all your campy delight. Take a look!`,
    [SwipeType.SoloSpeedRound]: `All alone? Not to worry. You'll get 10 seconds to zip through a list as fast as you can. No time to think, no time to stress!`,
    [SwipeType.LoveItOrLoseIt]: `Once you've let us know a little bit more about your preference, swipe through a deck we've assembled of items you've swiped both ways on. This time though, if you swipe left, they're gone for good. How about a little spring cleaning?`,
  }
}

export const getSwipeTypeTitleIcons = (): Record<SwipeType, JSX.Element> => {
  return {
    [SwipeType.DealersChoice]: (
      <Attractions
        sx={{
          color: '#192a4d',
          height: `2rem`,
          width: `2rem`,
          float: `left`,
          paddingTop: `10px`,
        }}
      />
    ),
    [SwipeType.RemoteDuo]: (
      <ConnectWithoutContact
        sx={{
          color: '#192a4d',
          height: `2rem`,
          width: `2rem`,
          float: `left`,
          paddingTop: `10px`,
        }}
      />
    ),
    [SwipeType.ShareScreenDuo]: (
      <SafetyDivider
        sx={{
          color: '#192a4d',
          height: `2rem`,
          width: `2rem`,
          float: `left`,
          paddingTop: `10px`,
        }}
      />
    ),
    [SwipeType.CuratedList]: (
      <AssuredWorkload
        sx={{
          color: '#192a4d',
          height: `2rem`,
          width: `2rem`,
          float: `left`,
          paddingTop: `10px`,
        }}
      />
    ),
    [SwipeType.SoloSpeedRound]: (
      <SixtyFps
        sx={{
          color: '#192a4d',
          height: `2rem`,
          width: `2rem`,
          float: `left`,
          paddingTop: `10px`,
        }}
      />
    ),
    [SwipeType.LoveItOrLoseIt]: (
      <ThumbsUpDown
        sx={{
          color: '#192a4d',
          height: `2rem`,
          width: `2rem`,
          float: `left`,
          paddingTop: `10px`,
        }}
      />
    ),
  }
}

export const getSwipeHighlightIcon = (
  isHomePage: boolean,
): Record<SwipeType, JSX.Element> => {
  const slideDimensions = isHomePage ? `200px` : `300px`

  return {
    [SwipeType.DealersChoice]: (
      <img
        src={SwipeDealersChoice}
        height={slideDimensions}
        width={slideDimensions}
        alt={'dealers-choice-slide'}
      />
    ),
    [SwipeType.RemoteDuo]: (
      <img
        src={SwipeRemoteDuo}
        height={slideDimensions}
        width={slideDimensions}
        alt={'remote-duo-slide'}
      />
    ),
    [SwipeType.ShareScreenDuo]: (
      <img
        src={SwipeShareScreenDuo}
        height={slideDimensions}
        width={slideDimensions}
        alt={'swipe-share-slide'}
      />
    ),
    [SwipeType.CuratedList]: (
      <img
        src={SwipeCuratedList}
        height={slideDimensions}
        width={slideDimensions}
        alt={'swipe-curated-list'}
      />
    ),
    [SwipeType.SoloSpeedRound]: (
      <img
        src={SwipeSoloSpeedRound}
        height={slideDimensions}
        width={slideDimensions}
        alt={'solo-speed-slide'}
      />
    ),
    [SwipeType.LoveItOrLoseIt]: (
      <img
        src={SwipeLoveItOrLoseIt}
        height={slideDimensions}
        width={slideDimensions}
        alt={'love-it-lose-it-slide'}
      />
    ),
  }
}
