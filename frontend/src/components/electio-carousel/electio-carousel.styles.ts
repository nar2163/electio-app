import { styled } from '@mui/system'

export const CarouselFlexContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'nowrap',
  columnGap: '2px',
  height: '25rem',
  alignItems: 'center',
  wordSpacing: '.25rem',
})

export const CarouselInnerContainer = styled('div')({ width: '40rem' })

export const CarouselArrowContainer = styled('div')({
  flex: '0 0 2.5rem',
  margin: '1.5rem',
})

export const CarouselButton = styled('button')({
  background: 'transparent',
  border: 'none',
})

export const CarouselInfoPanel = styled('div')({
  width: '80%',
  display: `inline-block`,
  margin: `0 auto`,
  padding: `3px`,
})

export const InfoPanelContainer = styled('div')({
  width: '100%',
  textAlign: 'center',
})
