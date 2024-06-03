export interface Tld {
  id: number
  name: string
}

export interface Sld {
  id: number
  name: string
}

export interface Fqdn {
  id: number
  sld: string
  tld: string
  mintDate: Date
  renewalDate: Date
}

// FQDN (Fully Qualified Domain Name) = SLD +TLD
