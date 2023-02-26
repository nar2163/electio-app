import * as React from 'react'

import { ContainerCardStatic } from '../../common/container-card-static/container-card-static'
import { ContentPanelItem } from '../../common/content-panel-item'
import {
  getCarouselInfoDetails,
  getNavigationSwipeRoutePaths,
  getSwipeTypeTitleIcons,
  getTooltipSwipeTitles,
  SwipeType,
} from '../electio-carousel.types'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Link,
  Typography,
} from '@mui/material'

export interface ElectioCarouselItemProps {
  slideContentIndex: number
}

export const indexSwipeTypeRef = [
  SwipeType.RemoteDuo,
  SwipeType.ShareScreenDuo,
  SwipeType.SoloSpeedRound,
  SwipeType.LoveItOrLoseIt,
  SwipeType.CuratedList,
  SwipeType.DealersChoice,
]

export const ElectioCarouselItem: React.FC<ElectioCarouselItemProps> = ({
  slideContentIndex,
}: ElectioCarouselItemProps) => {
  const swipeTypeTitle = indexSwipeTypeRef[slideContentIndex]
  const swipeTypeCopy = getCarouselInfoDetails()[swipeTypeTitle]
  const swipeTypeTitleText = getTooltipSwipeTitles()[swipeTypeTitle]
  const swipeTypeTitleIcon = getSwipeTypeTitleIcons()[swipeTypeTitle]
  const currentRoute = getNavigationSwipeRoutePaths()[swipeTypeTitle]

  const handleRenderButton = () => {
    return (
      <Button
        variant="outlined"
        href={currentRoute}
        sx={{ background: 'transparent', border: 'none' }}
      >
        Swipe Now
      </Button>
    )
  }

  return (
    <div
      data-testId="electio-carousel-item"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card sx={{ width: '50%' }}>
        <CardHeader
          avatar={swipeTypeTitleIcon}
          sx={{ height: '3rem', textAlign: 'left' }}
          title={<Typography variant="h5">{swipeTypeTitleText}</Typography>}
        />
        <Divider />
        <CardContent>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: 'left' }}
          >
            {swipeTypeCopy}
          </Typography>
        </CardContent>
        {/**<CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
  </CardActions>**/}
      </Card>
    </div>
  )
}
