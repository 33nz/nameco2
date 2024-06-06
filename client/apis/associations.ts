import request from 'superagent'
import { AssociatedSearch } from '../../models/associated-search.ts'

export async function getWords(entry: string) {
  const res = await request.get('/api/v1/search').query({ entry })
  console.log(res)
  return res.body as AssociatedSearch
}
