'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useApiRequest } from 'src/hooks/useApiRequest'
import { TShirtFilter } from 'src/pages/store/components/filter'
import { TShirt } from 'src/types/Store/TShirt'

export default function Store() {
  const { data, error, isPending } = useApiRequest<TShirt[]>({
    endpoint: `https://660e3c116ddfa2943b3626aa.mockapi.io/tshirtStore/tshirts`
  })
  const [tShirts, setTShirts] = useState<TShirt[]>([])

  const updateList = (list: TShirt[]) => setTShirts(list)
  const resetList = () => setTShirts(data || [])

  const router = useRouter()

  useEffect(() => {
    if (data) {
      setTShirts(data)
    }
  }, [data])

  if (isPending) {
    return 'Loading...'
  }

  if (error) {
    return 'An error has occurred: ' + error.message
  }

  return (
    <main>
      <TShirtFilter updateList={updateList} resetList={resetList} />

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 hover:cursor-pointer">
        {tShirts.length > 0
          ? tShirts.map((row) => {
              return (
                <Card
                  key={row.id}
                  className={cn('w-[300px] p-3 border-2 rounded')}
                  onClick={() => router.push(`/store/${row.id}`)}
                >
                  <CardHeader>
                    <CardTitle>{row.name}</CardTitle>

                    <CardDescription>{row.brand}</CardDescription>
                  </CardHeader>

                  <CardContent className="grid grid-cols-2 gap-5">
                    <div className="relative aspect-[500/500]">
                      <Image
                        src={row.img}
                        alt="tshirt"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>

                    <div className="grid">
                      <span className="text-lg">R$ {row.price} no PIX</span>

                      <span className="text-base">
                        3x de {(row.price / 3).toFixed(2)} no cartão
                      </span>
                    </div>
                  </CardContent>
                </Card>
              )
            })
          : null}
      </div>
    </main>
  )
}
