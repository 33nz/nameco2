import express from 'express'
import * as Path from 'node:path'
import associations from './routes/words.ts'
// import words from './routes/words'

const server = express()

server.use(express.json())

// server.use('/api/v1/words', words)
server.use('/api/v1/associations', associations)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
