import * as React from 'react'
import Carousel from 'react-spring-3d-carousel'
import { config } from 'react-spring'
import { v4 as uuid } from 'uuid'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'
import SafetyDividerRoundedIcon from '@mui/icons-material/SafetyDividerRounded'
import SixtyFpsSelectRoundedIcon from '@mui/icons-material/SixtyFpsSelectRounded'
import ThumbsUpDownRoundedIcon from '@mui/icons-material/ThumbsUpDownRounded'
import AssuredWorkloadRoundedIcon from '@mui/icons-material/AssuredWorkloadRounded'
import AttractionsRoundedIcon from '@mui/icons-material/AttractionsRounded'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import {
  getSwipeHighlightIcon,
  getNavigationSwipeRoutePaths,
  SwipeType,
  getTooltipSwipeTitles,
} from './electio-carousel.types'
import {
  Link,
  Button,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  styled,
} from '@mui/material'
import {
  CarouselArrowContainer,
  CarouselFlexContainer,
  CarouselInfoPanel,
  CarouselInnerContainer,
  InfoPanelContainer,
} from './electio-carousel.styles'
import { ElectioCarouselItem } from './electio-carousel-item'

export interface ElectioCarouselProps {
  isHomePage: boolean
  showNavigation?: boolean
}

export const ElectioCarousel: React.FC<ElectioCarouselProps> = ({
  isHomePage,
  showNavigation,
}: ElectioCarouselProps) => {
  const [goToSlide, setGoToSlide] = React.useState(0)
  const slideDimensions = isHomePage ? `150px` : `300px`

  const ElectioTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 200,
    },
  })

  React.useEffect(() => {
    //don't need to do anything but make sure goToSlide
    //changes and gets passed to Carousel for it to swipe
  }, [goToSlide])

  const renderFocusOnSwipe = (swipeType: SwipeType) => {
    return (
      <ElectioTooltip
        title={`${getTooltipSwipeTitles()[swipeType]}`}
        placement={'bottom'}
      >
        <Link href={getNavigationSwipeRoutePaths()[swipeType]}>
          {getSwipeHighlightIcon(isHomePage)[swipeType]}
        </Link>
      </ElectioTooltip>
    )
  }

  const renderSlide = (index: number) => {
    const slides = [
      {
        key: uuid(),
        content:
          index === 0 ? (
            renderFocusOnSwipe(SwipeType.RemoteDuo)
          ) : (
            <ConnectWithoutContactIcon
              sx={{
                color: '#4267B2',
                height: `${slideDimensions}`,
                width: `${slideDimensions}`,
                opacity: '60%',
              }}
            />
          ),
      },
      {
        key: uuid(),
        content:
          index === 1 ? (
            renderFocusOnSwipe(SwipeType.ShareScreenDuo)
          ) : (
            <SafetyDividerRoundedIcon
              sx={{
                color: '#4267B2',
                height: `${slideDimensions}`,
                width: `${slideDimensions}`,
                //opacity: '60%',
              }}
            />
          ),
      },
      {
        key: uuid(),
        content:
          index === 2 ? (
            renderFocusOnSwipe(SwipeType.SoloSpeedRound)
          ) : (
            <SixtyFpsSelectRoundedIcon
              sx={{
                color: '#4267B2',
                height: `${slideDimensions}`,
                width: `${slideDimensions}`,
                //opacity: '60%',
              }}
            />
          ),
      },
      {
        key: uuid(),
        content:
          index === 3 ? (
            renderFocusOnSwipe(SwipeType.LoveItOrLoseIt)
          ) : (
            <ThumbsUpDownRoundedIcon
              sx={{
                color: '#4267B2',
                height: `${slideDimensions}`,
                width: `${slideDimensions}`,
                opacity: '90%',
              }}
            />
          ),
      },
      {
        key: uuid(),
        content:
          index === 4 ? (
            renderFocusOnSwipe(SwipeType.CuratedList)
          ) : (
            <AssuredWorkloadRoundedIcon
              sx={{
                color: '#4267B2',
                height: `${slideDimensions}`,
                width: `${slideDimensions}`,
                opacity: '90%',
              }}
            />
          ),
      },
      {
        key: uuid(),
        content:
          index === 5 ? (
            renderFocusOnSwipe(SwipeType.DealersChoice)
          ) : (
            <AttractionsRoundedIcon
              sx={{
                color: '#4267B2',
                height: `${slideDimensions}`,
                width: `${slideDimensions}`,
                opacity: '90%',
              }}
            />
          ),
      },
    ].map((slide, index) => {
      return { ...slide, onClick: () => setGoToSlide(index) }
    })
    return slides
  }

  const handleClick = (isRightArrow: boolean) => {
    let newGoToSlide

    if (isRightArrow) {
      newGoToSlide = goToSlide < 5 ? goToSlide + 1 : 0
    } else {
      newGoToSlide = goToSlide > 1 ? goToSlide - 1 : 5
    }

    setGoToSlide(newGoToSlide)
  }

  return (
    <>
      <CarouselFlexContainer>
        <div style={{ marginRight: '5rem' }}>
          <Button
            variant="outlined"
            sx={{ background: 'transparent', border: 'none' }}
            onClick={() => handleClick(false)}
          >
            <ArrowBackIosNewRoundedIcon />
          </Button>
        </div>
        <CarouselInnerContainer>
          <Carousel
            slides={renderSlide(goToSlide)}
            goToSlide={goToSlide}
            offsetRadius={2}
            showNavigation={showNavigation ? true : false}
            animationConfig={config.gentle}
          />
        </CarouselInnerContainer>
        <div style={{ marginLeft: '5rem' }}>
          <Button
            variant="outlined"
            sx={{ background: 'transparent', border: 'none' }}
            onClick={() => handleClick(true)}
          >
            <ArrowForwardIosRoundedIcon />
          </Button>
        </div>
      </CarouselFlexContainer>
      {/**<InfoPanelContainer>
        <CarouselInfoPanel>
          <ElectioCarouselItem slideContentIndex={goToSlide} />
  </CarouselInfoPanel>
      </InfoPanelContainer>*/}
    </>
  )
}
