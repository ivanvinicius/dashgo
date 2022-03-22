import { useQuery } from 'react-query'

import { api } from '../../services/api'

interface IUserData {
  id: string
  name: string
  email: string
  createdAt: string
}

const TIME_IN_SECONDS = 1000 * 5

export async function getUsers(): Promise<IUserData[]> {
  const response = await api.get('users')

  return response.data.users.map((user: IUserData) => ({
    ...user,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }))
}

export function useUsers() {
  return useQuery('users', getUsers, {
    staleTime: TIME_IN_SECONDS
  })
}
