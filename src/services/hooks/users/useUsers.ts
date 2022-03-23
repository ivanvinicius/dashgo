import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query'

import { api } from '../../../services/api'

interface IUserData {
  id: string
  name: string
  email: string
  created_at: string
  formattedCreatedAt: string
}

interface IGetUsersResponse {
  totalCount: number
  users: IUserData[]
}

const staleTime = 1000 * 60 * 60 // 10min

export async function getUsers(page: number): Promise<IGetUsersResponse> {
  const { data, headers } = await api.get('users', {
    params: {
      page
    }
  })

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map((user: IUserData) => ({
    ...user,
    formattedCreatedAt: new Date(user.created_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }))

  return { totalCount, users }
}

/** It is important to remember passing ['users', { page }] parameter,
 if it doest not, when the user change the page a new query will not be fetched,
 because 'users' parameter is the same as the storaged one */
export function useUsers(page: number, options?: UseQueryOptions) {
  return useQuery(['users', { page }], () => getUsers(page), {
    staleTime,
    ...options
  }) as UseQueryResult<IGetUsersResponse, unknown>
}
