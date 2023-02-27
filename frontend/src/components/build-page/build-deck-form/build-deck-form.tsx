import * as React from 'react'

import { Box, Button, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { Card } from '../build-card-form/build-card-form'

export interface Deck {
  deckTitle?: string
  cards?: Card[]
}

export const BuildDeckForm: React.FC = () => {
  //api's to get title of deck from user and send to backend to create new deck
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '.5rem',
        }}
      >
        <TextField
          required
          id="outlined-required"
          label="Deck Title"
          onChange={(event) => {
            /**setDeckTitle(event.target.value)*/
          }}
        />
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={() => {
            /**send deckname to server handleSubmitDeckTitle*/
          }}
        >
          Name Deck
        </Button>
      </div>
    </Box>
  )
}
