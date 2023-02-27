import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import AddIcon from '@mui/icons-material/Add'
import {
  Button,
  Card,
  CardActions,
  FormControl,
  Modal,
  Typography,
} from '@mui/material'
import { BuildType } from '../../../type-defs/build-types'

export interface BuildFormProps {
  buildFormType: BuildType
}

export interface Card {
  title: string
  body?: string
}
export interface Deck {
  deckTitle?: string
  cards?: Card[]
}

export const BuildForm: React.FC<BuildFormProps> = ({
  buildFormType,
}: BuildFormProps) => {
  const [buildType, setBuildType] = React.useState<BuildType>(buildFormType)
  const [cardTitle, setCardTitle] = React.useState('')
  const [cardInfo, setCardInfo] = React.useState('')
  const [deckTitle, setDeckTitle] = React.useState<string>('')
  const [deckTitleLoading, setDeckTitleLoading] = React.useState(true)
  const [deck, setDeck] = React.useState<Deck>({ deckTitle: '', cards: [] })

  const handleSubmitCard = () => {
    const newCard: Card = {
      title: cardTitle,
      body: cardInfo,
    }

    if (deck.cards) {
      deck.cards.push(newCard)
    } else {
      deck.cards = [newCard]
    }
    setDeck(deck)
    console.log(setDeck)
  }

  const handleSubmitDeckTitle = () => {
    deck.deckTitle = deckTitle
    setDeckTitleLoading(false)
  }

  return (
    <>
      <h3>basic instructions...</h3>
      <Card sx={{ display: 'flex', flexDirection: 'column' }}>
        {deckTitleLoading ? (
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <TextField
                required
                id="outlined-required"
                label="Deck Title"
                onChange={(event) => setDeckTitle(event.target.value)}
              />
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                onClick={handleSubmitDeckTitle}
              >
                Name Deck
              </Button>
            </div>
          </Box>
        ) : (
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <TextField
                required
                id="outlined-required"
                label="Card Title"
                autoComplete="off"
                onChange={(event) => setCardTitle(event.target.value)}
              />
              <TextField
                required
                id="outlined-required"
                label="Card Info"
                onChange={(event) => setCardInfo(event.target.value)}
              />
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                onClick={handleSubmitCard}
              >
                Add card
              </Button>
            </div>
          </Box>
        )}
      </Card>
      <Box
        sx={{
          marginTop: '2rem',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CardActions>
          <Button variant="outlined">submit</Button>
          <Button variant="outlined">need help?</Button>
        </CardActions>
      </Box>
    </>
  )
}
