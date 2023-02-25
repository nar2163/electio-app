//template for login page taken from https://github.com/mui/material-ui/blob/v5.11.9/docs/data/material/getting-started/templates/sign-in-side/SignInSide.js

import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Box, createTheme, ThemeProvider } from '@mui/material'

import ElectioLogoWithText from '../../assets/ElectioLogo-WithText.png'
import ManOnPhone from '../../assets/ManOnPhone.svg'
import { ElectioCard } from '../electio-card/electio-card'

const theme = createTheme()

const LANDING_PAGE_COPY = [
  'Excited to spend the night watching a movie with friends and family, or maybe with just yourself, only to spend an hour endlessly browsing Netflix with no relief in sight?',
  "We totally feel you, and that's why we built Electio! The average person wastes 30 minutes a day browsing NetflexSo let us take care of the boring stuff! We'll keep track of your preferences to provide the best swiping experience, everytime.",
]

const LANDING_PAGE_FOOTER_COPY =
  'Electio works just like Tindr: swipe Right for yes, swipe Left for no. Use one of our decision making decks to swipe through either different sets of movies and Electio will do the rest.'

function LandingPage() {
  const navigate = useNavigate()

  const handleSwipeTypeClick = (event: React.BaseSyntheticEvent) => {
    event.preventDefault()
    navigate('/mainPage')
  }

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
            backgroundColor: '#ced8eb',
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
              style={{ height: '15rem', marginBottom: '2rem' }}
              alt={'man-on-phone'}
            />
            <Box sx={{ width: '90%' }}>
              <Typography variant="h4">So, what exactly is Electio?</Typography>
              <br></br>
              <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
                {LANDING_PAGE_COPY.map((paragraph: string) => {
                  return (
                    <Typography variant="body2" gutterBottom>
                      {paragraph}
                    </Typography>
                  )
                })}
              </div>
            </Box>
            <Box
              sx={{
                backgroundColor: '#ced8eb',
                borderRadius: '1rem',
                padding: '1rem',
              }}
            >
              <Typography variant="h5" sx={{ marginBottom: '1rem' }}>
                TLDR:
              </Typography>
              <Typography variant="body1" textAlign="left">
                {LANDING_PAGE_FOOTER_COPY}
              </Typography>
            </Box>
            <Button variant="outlined" sx={{ marginTop: '2rem' }} onClick={handleSwipeTypeClick}>
              Swipe Type Info
            </Button>
            <div style={{ marginTop: '2rem' }}>
              <Button variant="outlined" style={{ marginRight: '.5rem' }}>
                solo swipe
              </Button>
              <Button variant="outlined">group swipe</Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default LandingPage
