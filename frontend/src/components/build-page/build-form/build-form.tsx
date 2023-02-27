import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'

export default function BuildForm() {
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
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div>
      <div>
        <TextField
          error
          id="filled-error"
          label="Error"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          error
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="filled"
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
