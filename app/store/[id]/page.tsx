'use client'

import { Label } from '@/components/ui/label'
import Image from 'next/image'
import { useApiRequest } from 'src/hooks/useApiRequest'
import { BuyButton } from 'src/pages/storeItem/components/buy'
import { FreteButton } from 'src/pages/storeItem/components/frete'
import { TShirtPrice } from 'src/pages/storeItem/components/price'
import { TShirtSizes } from 'src/pages/storeItem/components/sizes'
import { TShirt } from 'src/types/Store/TShirt'

type StoreItemProps = {
  params: { id: string }
}

const style = 'grid sm:grid-cols-1 md:grid-cols-2 gap-5 mt-10'

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

          <div className={style}>
            <Image src={data.img} alt="tshirt" width={350} height={350} />

            <div>
              <TShirtPrice {...data} />

              <TShirtSizes {...data} />

              <BuyButton />

              <FreteButton />
            </div>
          </div>

          <div className={style}>
            <Image
              src={
                'https://www.shop77.com.br/img/2023/09/produto/12677/camisa.jpg'
              }
              alt="tshirt"
              width={350}
              height={350}
            />

            <div className="grid gap-3">
              <Label className="text-xl text-center mb-5">
                Descrição do Produto
              </Label>

              <span className="text-justify w-[300px]">
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                }
              </span>
            </div>
          </div>
        </>
      ) : null}
    </main>
  )
}
