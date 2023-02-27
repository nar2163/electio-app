import { Box, Button, TextField } from '@mui/material'
import * as React from 'react'
import { useParams } from 'react-router-dom'
import { BuildType } from '../../type-defs/build-types'
import { ElectioCard } from '../electio-card/electio-card'
import { BuildCardForm } from './build-card-form/build-card-form'
import { BuildDeckForm, Deck } from './build-deck-form/build-deck-form'

export const BuildPage: React.FC = () => {
  const { buildType } = useParams()
  const [deckBuildType, setDeckBuildType] = React.useState<BuildType>(
    buildType === BuildType.Group ? BuildType.Group : BuildType.Solo,
  )
  const [deckData, setDeckData] = React.useState<Deck>()

  React.useEffect(() => {
    if (!deckData) {
      fetchDeckData()
    }
  }, [])

  const fetchDeckData = async () => {
    try {
      const data = await fetch('/createNewDeck')
      const deckDataJson = await data.json()
      console.log(deckDataJson)
      setDeckData(deckDataJson)
    } catch {
      console.error('error creating new deck')
    }
  }

  return deckData ? (
    <BuildCardForm buildFormType={deckBuildType} deck={deckData} />
  ) : (
    <BuildDeckForm />
  )
}
