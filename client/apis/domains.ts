import request from 'superagent'

const rootUrl = '/api/v1'

export function getTlds(): Promise<string[]> {
  return request.get(rootUrl + '/tlds').then((res) => {
    return res.body.tlds
  })
}
