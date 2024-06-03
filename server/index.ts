import express from 'express'

const server = express()

const PORT = process.env.PORT || 3003

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port', PORT)
})
