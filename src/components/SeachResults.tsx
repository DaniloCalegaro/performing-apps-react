import { useMemo } from 'react'
import { User } from './User'

interface SearchResultProps {
  results: Array<{
    id: number
    name: string
    country: string
  }>
  addToWishList: (id: number) => void
}

export function SearchResult({ results, addToWishList }: SearchResultProps) {
  const totalSumIds = useMemo(() => {
    return results.reduce((total, user) => {
      return total + user.id
    }, 0)
  }, [results])

  return (
    <div>
      <h2>{totalSumIds}</h2>
      {results.map(user => {
        addToWishList(user.id)
        return <User key={user.id} user={user} />
      })}
    </div>
  )
}

/**
   UseMemo() - Memorizar valor
 * 1. Calculos pesados
 * 2. Igualdade referencial (quando repassa a informação a um componente filho)
 */
