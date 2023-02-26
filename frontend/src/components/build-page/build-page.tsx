import * as React from 'react'
import { useParams } from 'react-router-dom'
import { BuildType } from '../../type-defs/build-types'

export const BuildPage: React.FC = () => {
  const { buildType } = useParams()
  const [deckBuild, setDeckBuild] = React.useState<string>(
    buildType ?? 'solo',
  )

  console.log(buildType);
  return <div>{deckBuild}</div>
}
