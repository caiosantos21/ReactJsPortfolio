import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useApiRequest = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      axios
        .get('https://api.github.com/repos/tannerlinsley/react-query')
        .then((res) => res.data)
  })
}
