import { useState } from 'react'
import request from 'superagent'
import { useQuery } from '@tanstack/react-query'
import { getWords } from '../apis/associations'
import { useNavigate } from 'react-router-dom'

function Search() {
  const [searchTerm, setSearchTerm] = useState('Vegetable')
  const [associations, setAssociations] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userType, setUserType] = useState('')

  const navigate = useNavigate()

  const {
    data: search,
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['search'],
    queryFn: () => getWords(searchTerm),
    //enabled: false, :this stops the query from running when rendering
  })
  if (isError) {
    return <p>Error...</p>
  }

  if (isPending) {
    return <p>Loading...</p>
  }

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    refetch()
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    switch (name) {
      case 'firstName':
        setFirstName(value)
        break
      case 'lastName':
        setLastName(value)
        break
      case 'userType':
        setUserType(value)
    }
  }

  return (
    <>
      <div className="titleDiv">
        <h1>Domain Search</h1>
      </div>
      <div className="formDiv">
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          ></input>
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          ></input>
          <label htmlFor="userType">User Type: </label>
          <select
            id="userType"
            name="userType"
            value={userType}
            onChange={handleChange}
          >
            <option value="Individual">Individual</option>
            <option value="Commercial">Commercial</option>
            <option value="Non-profit">Non-profit</option>
          </select>
          <label htmlFor="search">Keyword identification: </label>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Keyword search"
          />
          <div className="buttonDiv">
            <button type="submit">Find my domain!</button>
          </div>
        </form>
      </div>
      <div className="resultsWrapper">
        <div className="resultsContainer">
          <div className="resultsDiv">
            <h2>Results</h2>
            <div>
              {search.associations_array.map((result, index) => (
                <div key={index}>{result}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Search
