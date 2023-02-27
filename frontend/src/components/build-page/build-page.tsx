import { Box, Button, TextField } from '@mui/material'
import * as React from 'react'
import { useParams } from 'react-router-dom'
import { BuildType } from '../../type-defs/build-types'
import { ElectioCard } from '../electio-card/electio-card'
import { BuildForm } from './build-form/build-form'

export const BuildPage: React.FC = () => {
  const { buildType } = useParams()
  const [deckBuildType, setDeckBuildType] = React.useState<BuildType>(
    buildType === BuildType.Group ? BuildType.Group : BuildType.Solo,
  )

  return (
    <div>
      <BuildForm buildFormType={deckBuildType} />
    </div>
  )
}
