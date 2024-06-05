import { Router } from 'express'
import request from 'superagent'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const result = await request
      .get('https://twinword-word-associations-v1.p.rapidapi.com/associations/')
      .query({ entry: 'sound' })
      .set(
        'X-RapidAPI-Key',
        '3ca90152f0msha86109f176538a4p169f93jsn2e857e825d33'
      )
      .set('X-RapidAPI-Host', 'twinword-word-associations-v1.p.rapidapi.com')
    res.json(result.body)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch words' })
  }
})

export default router