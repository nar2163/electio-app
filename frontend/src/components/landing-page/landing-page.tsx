//template for login page taken from https://github.com/mui/material-ui/blob/v5.11.9/docs/data/material/getting-started/templates/sign-in-side/SignInSide.js

import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import {
  Box,
  Card,
  CardContent,
  createTheme,
  Modal,
  ThemeProvider,
} from '@mui/material'

import ElectioLogoWithText from '../../assets/ElectioLogo-WithText.png'
import ManOnPhone from '../../assets/ManOnPhone.svg'
import { ElectioCarousel } from '../electio-carousel'
import {
  BuildRouteNames,
  BuildRoutePaths,
  RouteNames,
} from '../../type-defs/route-types'

const theme = createTheme()

const LANDING_PAGE_COPY = [
  'Excited to spend the night watching a movie only to spend an hour endlessly browsing Netflix with no relief in sight?',
  "We totally feel you, and that's why we built Electio! So let us take care of the boring stuff! We'll keep track of your preferences to provide the best swiping experience, everytime.",
]

const LANDING_PAGE_TLDR =
  'Electio works just like Tindr: swipe Right for yes, swipe Left for no. Use one of our decision making decks to swipe through either different sets of movies and Electio will do the rest.'

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
}

function LandingPage() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const navigate = useNavigate()

  const handleSwipeTypeClick = (event: React.BaseSyntheticEvent) => {
    event.preventDefault()
    handleOpen()
  }

  const carouselModal = (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <ElectioCarousel isHomePage={false} />
      </Box>
    </Modal>
  )

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${ElectioLogoWithText})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'white',
            backgroundSize: '30%',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src={ManOnPhone}
              style={{ height: '15rem' }}
              alt={'man-on-phone'}
            />
            <div style={{ marginTop: '.75rem', marginBottom: '1.5rem' }}>
              <Button
                variant="outlined"
                style={{ marginRight: '.5rem' }}
                onClick={() =>
                  navigate(`/${BuildRoutePaths[BuildRouteNames.Solo]}`)
                }
              >
                solo swipe
              </Button>
              <Button
                variant="outlined"
                onClick={() =>
                  navigate(`/${BuildRoutePaths[BuildRouteNames.Group]}`)
                }
              >
                group swipe
              </Button>
            </div>
            <Box sx={{ width: '90%' }}>
              <Typography variant="h4">So, what exactly is Electio?</Typography>
              <br></br>
              <div
                style={{
                  textAlign: 'left',
                  marginBottom: '2rem',
                  padding: '.5 rem',
                }}
              >
                {LANDING_PAGE_COPY.map((paragraph: string) => {
                  return (
                    <Typography variant="body1" gutterBottom>
                      {paragraph}
                    </Typography>
                  )
                })}
              </div>
            </Box>
            <Typography variant="h5" component="div">
              TLDR:
            </Typography>
            <Typography variant="body2">{LANDING_PAGE_TLDR}</Typography>
            <Button
              variant="outlined"
              sx={{ marginTop: '1rem' }}
              onClick={handleOpen}
            >
              more info...
            </Button>
            {carouselModal}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default LandingPage
