import { useQuery } from 'react-query'

import { api } from '../../services/api'

interface IUserData {
  id: string
  name: string
  email: string
  createdAt: string
}

export function useUsers() {
  return useQuery(
    'users',
    async () => {
      const response = await api.get('users')

      return response.data.users.map((user: IUserData) => ({
        ...user,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })
      }))
    },
    {
      staleTime: 1000 * 10 // 10 seconds
    }
  )
}
