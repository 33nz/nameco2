export interface AssociatedSearch {
  entry: string
  request: string
  response: Response
  associations: string
  associations_array: string[]
  associations_scored: { [key: string]: number }
  version: string
  author: string
  email: string
  result_code: string
  result_msg: string
}

export interface Response {
  music: number
}
