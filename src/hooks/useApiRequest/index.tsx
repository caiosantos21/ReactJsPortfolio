import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

type UseApiRequest = {
  endpoint: string
}

export const useApiRequest = <T,>(props: UseApiRequest) => {
  const { endpoint } = props

  const request = useQuery<T>({
    queryKey: ['repoData'],
    queryFn: () => axios.get(endpoint).then((res) => res.data)
  })

  return { ...request }
}
