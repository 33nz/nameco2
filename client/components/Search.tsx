import { useState } from 'react'
import request from 'superagent'
import { useQuery } from '@tanstack/react-query'
import { getWords } from '../apis/associations'

function Search() {
  const [searchTerm, setSearchTerm] = useState('Domains')
  const [associations, setAssociations] = useState([])

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
        {search.associations_array.map((result, index) => (
          <div key={index}>{result}</div>
        ))}
      </div>
    </>
  )
}
export default Search
