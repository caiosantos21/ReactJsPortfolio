import { Label } from '@/components/ui/label'
import Image from 'next/image'

const style = 'grid sm:grid-cols-1 md:grid-cols-2 gap-5 mt-10'

export const ItemDescription = () => {
  return (
    <div className={style}>
      <Image
        src={'https://www.shop77.com.br/img/2023/09/produto/12677/camisa.jpg'}
        alt="tshirt"
        width={350}
        height={350}
      />

      <div className="grid gap-3">
        <Label className="text-xl text-center mb-5">Descrição do Produto</Label>

        <span className="text-justify w-[300px]">
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        </span>
      </div>
    </div>
  )
}
