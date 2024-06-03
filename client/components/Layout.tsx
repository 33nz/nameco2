import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'

function Layout() {
  return (
    <>
      <header>
        <Link to="/">
          <h1>Nameco</h1>
        </Link>
        <nav>
          <Link to="/search">Domain Search</Link>
          <Link to="/discover">Discover</Link>
          <Link to="/wallet">Wallet</Link>
        </nav>
      </header>
    </>
  )
}

export default Layout
