import * as React from 'react';

import { ContainerCardStatic } from '../../common/container-card-static/container-card-static';
import { ContentPanelItem } from '../../common/content-panel-item';
import { useStyles } from './electio-carousel-item.styles';
import {
  getCarouselInfoDetails,
  getNavigationSwipeRoutePaths,
  getSwipeTypeTitleIcons,
  getTooltipSwipeTitles,
  SwipeType,
} from '../electio-carousel.types';
import { Button, Link } from '@mui/material';

export interface ElectioCarouselItemProps {
  slideContentIndex: number;
}

export const indexSwipeTypeRef = [
  SwipeType.RemoteDuo,
  SwipeType.ShareScreenDuo,
  SwipeType.SoloSpeedRound,
  SwipeType.LoveItOrLoseIt,
  SwipeType.CuratedList,
  SwipeType.DealersChoice,
];

export const ElectioCarouselItem: React.FC<ElectioCarouselItemProps> = ({
  slideContentIndex,
}: ElectioCarouselItemProps) => {
  const classes = useStyles();
  const swipeTypeTitle = indexSwipeTypeRef[slideContentIndex];
  const swipeTypeCopy = getCarouselInfoDetails()[swipeTypeTitle];
  const swipeTypeTitleText = getTooltipSwipeTitles()[swipeTypeTitle];
  const swipeTypeTitleIcon = getSwipeTypeTitleIcons()[swipeTypeTitle];
  const currentRoute = getNavigationSwipeRoutePaths()[swipeTypeTitle];

  const handleRenderButton = () => {
    return (
      <Button variant="outlined" href={currentRoute} className={classes.carouselButton}>
        Swipe Now
      </Button>
    );
  };

  return (
    <ContainerCardStatic>
      <ContentPanelItem>
        <div className={classes.contentPanelContainer}>
          <div className={classes.centerContentContainer}>
            <div className={classes.itemContentTitleText}>{swipeTypeTitleText}</div>
            {swipeTypeTitleIcon}
          </div>
          <div className={classes.divider}></div>
          <div className={classes.itemContentContainer}>
            <div className={classes.itemContentInfoCopyContainer}>
            <div className={classes.itemContentInfoCopy}>{swipeTypeCopy}</div>
            </div>
            <div>{handleRenderButton()}</div>
          </div>
        </div>
      </ContentPanelItem>
    </ContainerCardStatic>
  );
};
