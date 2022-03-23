import { useQuery } from 'react-query'

import { api } from '../../../services/api'

interface IUserData {
  id: string
  name: string
  email: string
  created_at: string
  formattedCreatedAt: string
}

interface IProps {
  page: number
}

interface IResponse {
  totalCount: number
  users: IUserData[]
}

const TIME_IN_MINUTES = 1000 * 60 * 60 // 10min

export async function getUsers({ page }: IProps): Promise<IResponse> {
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

export function useUsers({ page }: IProps) {
  /** It is important to remember passing ['users', { page }] parameter,
   if it doest not, when the user change the page a new query will not be fetched,
   because 'users' parameter is the same as the storaged one */
  return useQuery(['users', { page }], () => getUsers({ page }), {
    staleTime: TIME_IN_MINUTES
  })
}
