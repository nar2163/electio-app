const express = require('express')
const router = express.Router()

router.get('/mainPage', (req, res) => {
  const str = [
    {
      data: 'Test data from mainPage backend',
    },
  ]
  
  console.log(str)

  res.end(JSON.stringify(str))
})

module.exports = router
