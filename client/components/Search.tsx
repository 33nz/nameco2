import { useState } from 'react'
import request from 'superagent'

function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [associations, setAssociations] = useState([])

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    try {
      const response = await request
        .get('http://localhost:3000/api/v1/associations')
        .query({ entry: searchTerm })
        .set(
          'X-RapidAPI-Key',
          '3ca90152f0msha86109f176538a4p169f93jsn2e857e825d33'
        )
        .set('X-RapidAPI-Host', 'twinword-word-associations-v1.p.rapidapi.com')
      console.log('Response:', response)
      const data = response.body
      if (data) {
        setAssociations(data.associations_array)
      } else {
        console.log('No data has been returned')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1>Domain Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Keyword search"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {associations.map((associaton, index) => (
          <div key={index}>{associaton}</div>
        ))}
      </div>
    </>
  )
}
export default Search
