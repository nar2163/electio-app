import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { BuildType } from '../../../type-defs/build-types'

export interface BuildFormProps {
  buildFormType: BuildType
}

export const BuildForm: React.FC<BuildFormProps> = ({
  buildFormType,
}: BuildFormProps) => {
  const [buildType, setBuildType] = React.useState<BuildType>(buildFormType)

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />
      </div>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="meh" control={<Radio />} label="meh" />
        <FormControlLabel value="no" control={<Radio />} label="no f-in way" />
        <FormControlLabel value="yes" control={<Radio />} label="hell ya" />
      </RadioGroup>
    </Box>
  )
}
