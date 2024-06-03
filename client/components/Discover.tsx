import { useState } from 'react'

function Discover() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Discover</h1>
      <h2>How much do you know about web3?</h2>
      <h4>I am {count} of 10 in confidence. </h4>

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
    </>
  )
}

export default Discover
