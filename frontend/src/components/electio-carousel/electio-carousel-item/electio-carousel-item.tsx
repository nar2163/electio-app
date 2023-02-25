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
import { Button, Link } from '@mui/material'

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
    <div>
      <div>
        <div style={{ width: `100%`, textAlign: 'center' }}>
          <div style={{ display: `inline-block`, margin: `0 auto` }}>
            <div
              style={{
                position: 'relative',
                height: '2.5rem',
                zIndex: '15',
                float: 'left',
                paddingRight: '1rem',
              }}
            >
              {swipeTypeTitleText}
            </div>
            {swipeTypeTitleIcon}
          </div>
          <div style={{ borderBottom: `1px solid #D4E4FA` }}></div>
          <div
            style={{ display: `inline-block`, margin: `0 auto`, width: `80%` }}
          >
            <div
              style={{
                display: `inline-block`,
                margin: `0 auto`,
                width: `80%`,
              }}
            >
              <div
                style={{
                  fontSize: '18px',
                  fontFamily: 'Georgia',
                  textAlign: 'justify',
                  lineHeight: '1.75rem',
                  letterSpacing: '-1px',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '80%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {swipeTypeCopy}
              </div>
            </div>
            <div>{handleRenderButton()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
