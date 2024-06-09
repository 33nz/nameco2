import { useState } from 'react'

function Discover() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="partner-container">
        <h2 className="partner-h2">Nameco domains are built on:</h2>
        <div className="image-container">
          <div className="image-wrapper">
            <a href="https://handshake.org/" target="_blank" rel="noreferrer">
              <img src="/handshake.png" alt="handshake logo" />
            </a>
          </div>
          <div className="image-wrapper">
            <a href="https://flare.network/" target="_blank" rel="noreferrer">
              <img src="/flare.png" alt="flare logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="question">
        <h2>How much do you know about Web3?</h2>
        <h4>I am {count} of 10 in confident in Web3. </h4>

        <button
          onClick={() => {
            setCount(count + 1)
          }}
        >
          +1
        </button>

        <button
          onClick={() => {
            setCount(count - 1)
          }}
        >
          -1
        </button>

        <button
          onClick={() => {
            setCount(count * 0)
          }}
        >
          Reset
        </button>
      </div>
    </>
  )
}

export default Discover
