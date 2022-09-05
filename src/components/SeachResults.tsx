import { User } from './User'

interface SearchResultProps {
  results: Array<{
    id: number
    name: string
    country: string
  }>
}

export function SearchResult({ results }: SearchResultProps) {
  return (
    <div>
      {results.map(user => {
        return <User key={user.id} user={user} />
      })}
    </div>
  )
}
