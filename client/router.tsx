/* eslint-disable react/jsx-key */
import { createRoutesFromElements, Route } from 'react-router-dom'

import App from './components/App'
import Search from './components/Search'
import Discover from './components/Discover'
import Wallet from './components/Wallet'
import Handshake from './components/Handshake'
import Flare from './components/Flare'
import Pricing from './components/Pricing'
import HomeBanner from './components/HomeBanner'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<HomeBanner />} />
    <Route path="search" element={<Search />} />
    <Route path="discover" element={<Discover />} />
    <Route path="discover/handshake" element={<Handshake />} />
    <Route path="discover/flare" element={<Flare />} />
    <Route path="wallet" element={<Wallet />} />
    <Route path="pricing" element={<Pricing />} />
  </Route>
)
