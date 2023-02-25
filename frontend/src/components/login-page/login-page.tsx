//template for login page taken from https://github.com/mui/material-ui/blob/v5.11.9/docs/data/material/getting-started/templates/sign-in-side/SignInSide.js

import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import ElectioLogoWithText from '../../assets/ElectioLogo-WithText.png'
import { useNavigate } from 'react-router-dom'

const theme = createTheme()

function LoginPage() {
  const navigate = useNavigate()

  const handleSubmit = (event: React.BaseSyntheticEvent) => {
    event.preventDefault()
    const data = new FormData(event.target)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
    //check login against data in server
    //test

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
            backgroundColor: '#aebbd3',
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
            <Typography component="h1" variant="h5">
              Electio Login
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              onSubmit={handleSubmit}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Typography
                component="h2"
                variant="h6"
                style={{ marginTop: '1rem' }}
              >
                Not a member? No worries...
              </Typography>
              <Typography component="h1" style={{ marginTop: '1rem' }}>
                Just fill out the form, sign in <br></br> and we'll take care of
                the rest.
              </Typography>
              <p style={{ fontSize: '10rem' }}></p>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                value={'sign_in'}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default LoginPage
