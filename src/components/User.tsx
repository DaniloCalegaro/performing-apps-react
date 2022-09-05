interface UserProps {
  user: {
    id: number
    name: string
    country: string
  }
}

export function User({ user }: UserProps) {
  return (
    <div key={user.id}>
      {user.name} - <strong>{user.country}</strong>
    </div>
  )
}
