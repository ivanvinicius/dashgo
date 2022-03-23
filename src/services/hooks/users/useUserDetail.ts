import { queryClient } from '../../../services/reactQueryClient'
import { api } from '../../../services/api'

interface IUserData {
  id: string
  name: string
  email: string
  createdAt: string
}

interface IProps {
  userId: string
}

const TIME_IN_MINUTES = 1000 * 60 * 60 // 10min

export async function getUserDetail({ userId }: IProps): Promise<IUserData> {
  const { data } = await api.get(`users/${userId}`)

  return data
}

export async function useUserDetail({ userId }: IProps): Promise<void> {
  return queryClient.prefetchQuery(
    ['user', { userId }],
    () => getUserDetail({ userId }),
    {
      staleTime: TIME_IN_MINUTES
    }
  )
}
