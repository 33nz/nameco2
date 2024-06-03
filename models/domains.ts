export interface Tld {
  id: number
  name: string
}

export interface Sld {
  id: number
  name: string
}

export interface Domain {
  id: number
  sld: string
  tld: string
  mintDate: Date
  renewalDate: Date
}
