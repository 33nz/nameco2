import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'

function App() {
  return (
    <>
      <header>
        <Link className="logo-link" to="/">
          <div className="container">
            <img src="/logo.png" alt="Nameco logo" className="logo" />
            <h1 className="logo-text">NameCo</h1>
          </div>
        </Link>

        <nav>
          <Link className="link" to="/search">
            Domain Search
          </Link>
          <Link className="link" to="/discover">
            Discover
          </Link>
          <Link className="link" to="/pricing">
            Pricing
          </Link>
          <Link className="link" to="/wallet">
            Wallet
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default App
