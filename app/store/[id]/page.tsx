'use client'

import { Label } from '@/components/ui/label'
import Image from 'next/image'
import { useApiRequest } from 'src/hooks/useApiRequest'
import { BuyButton } from 'src/pages/storeItem/components/buy'
import { FreteButton } from 'src/pages/storeItem/components/frete'
import { TShirtSizes } from 'src/pages/storeItem/components/sizes'
import { TShirt } from 'src/types/Store/TShirt'

type StoreItemProps = {
  params: { id: string }
}

export default function StoreItem(props: StoreItemProps) {
  const { params } = props

  const { data, error, isPending } = useApiRequest<TShirt>({
    endpoint: `https://660e3c116ddfa2943b3626aa.mockapi.io/tshirtStore/tshirts/${params.id}`
  })

  if (isPending) {
    return 'Loading...'
  }

  if (error) {
    return 'An error has occurred: ' + error.message
  }

  return (
    <main>
      {data ? (
        <>
          <div className="grid">
            <Label className="text-3xl text-center mb-5">
              Camisa {data.brand} {data.name}
            </Label>
          </div>

          <div className="grid grid-cols-2 gap-5 mt-10">
            <Image src={data.img} alt="tshirt" width={350} height={350} />

            <div>
              <TShirtSizes sizes={data.sizes} />

              <BuyButton />

              <FreteButton />
            </div>
          </div>
        </>
      ) : null}
    </main>
  )
}
