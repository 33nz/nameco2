/* eslint-disable react/jsx-key */
import { createRoutesFromElements, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Search from './components/Search'
import Discover from './components/Discover'
import Wallet from './components/Wallet'
import Handshake from './components/Handshake'
import Flare from './components/Flare'

export default createRoutesFromElements(
  <Route>
    <Route path="/" element={<Layout />} />
    <Route path="search" element={<Search />} />
    <Route path="discover" element={<Discover />} />
    <Route path="discover/handshake" element={<Handshake />} />
    <Route path="discover/flare" element={<Flare />} />
    <Route path="wallet" element={<Wallet />} />
  </Route>
)
