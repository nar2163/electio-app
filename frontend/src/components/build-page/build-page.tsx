import { Box, TextField } from '@mui/material'
import * as React from 'react'
import { useParams } from 'react-router-dom'
import { BuildType } from '../../type-defs/build-types'
import { ElectioCard } from '../electio-card/electio-card'
import BuildForm from './build-form/build-form'

export const BuildPage: React.FC = () => {
  const { buildType } = useParams()
  const [deckBuild, setDeckBuild] = React.useState<string>(buildType ?? 'solo')

  return (
    <div>
      <ElectioCard cardTitle={'Title'}>
        <BuildForm />
      </ElectioCard>
    </div>
  )
}
