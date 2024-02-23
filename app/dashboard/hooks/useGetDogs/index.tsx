import { useQuery } from '@tanstack/react-query'
import { GetDogResult } from 'app/dashboard/types/dog'
import axios from 'axios'

type UseGetDogsProps = {
  totalDogs: number
}

export const useGetDogs = (props: UseGetDogsProps) => {
  const { totalDogs } = props

  const request = useQuery<GetDogResult>({
    queryKey: ['repoData'],
    queryFn: () =>
      axios
        .get(`https://dog.ceo/api/breeds/image/random/${totalDogs}`)
        .then((res) => res.data)
  })

  return { ...request }
}
