const express = require('express')
const app = express()

app.get('/version', (_req, res) => {
  res.send('1')
})

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
