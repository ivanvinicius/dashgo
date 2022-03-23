import { useQuery } from 'react-query'

import { api } from '../../services/api'

interface IUserData {
  id: string
  name: string
  email: string
  createdAt: string
}

interface IGetUsersProps {
  page: number
}

interface IGetUsersResponse {
  totalCount: number
  users: IUserData[]
}
const TIME_IN_SECONDS = 1000 * 5

export async function getUsers({
  page
}: IGetUsersProps): Promise<IGetUsersResponse> {
  const { data, headers } = await api.get('users', {
    params: {
      page
    }
  })

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map((user: IUserData) => ({
    ...user,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }))

  return { totalCount, users }
}

export function useUsers({ page }: IGetUsersProps) {
  /** It is important to remember passing ['users', { page }] parameter,
   if it doest not, when the user change the page a new query will not be fetched,
   because 'users' parameter is the same as the storaged one */
  return useQuery(['users', { page }], () => getUsers({ page }), {
    staleTime: TIME_IN_SECONDS
  })
}
