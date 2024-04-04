import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { TShirt } from 'src/types/Store/TShirt'

export const useGetTshirts = () => {
  const request = useQuery<TShirt[]>({
    queryKey: ['repoData'],
    queryFn: () =>
      axios
        .get(`https://660e3c116ddfa2943b3626aa.mockapi.io/tshirtStore/tshirts`)
        .then((res) => res.data)
  })

  return { ...request }
}
