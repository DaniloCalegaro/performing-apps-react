import { memo } from 'react'

interface UserProps {
  user: {
    id: number
    name: string
    country: string
  }
}

function UserComponent({ user }: UserProps) {
  return (
    <div key={user.id}>
      {user.name} - <strong>{user.country}</strong>
    </div>
  )
}

export const User = memo(UserComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.user, nextProps.user)
})

/**
  MEMO()
 * 1. Pure Functional Component
 * 2. Renders muitas vezes
 * 3. Re-renders com as mesma props
 * 4. Tamanho médio a grande 
 */
