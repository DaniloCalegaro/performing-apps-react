import { FormEvent, useState } from 'react'
import { SearchResult } from './components/SeachResults'

export default function App() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  async function handleSearch(event: FormEvent) {
    event.preventDefault()

    if (!search.trim()) {
      return
    }

    const response = await fetch(`http://localhost:3333/users?q=${search}`)
    const data = await response.json()

    setResults(data)
  }

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>

        <SearchResult results={results} />
      </form>
    </div>
  )
}
