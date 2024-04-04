import { TShirt } from 'src/types/Store/TShirt'

type TShirtPriceProps = Pick<TShirt, 'price'>

export const TShirtPrice = (props: TShirtPriceProps) => {
  const { price } = props

  return (
    <div className="grid mb-5">
      <span className="text-lg text-green-600">R$ {price} no PIX</span>

      <span className="text-base">
        Ou em até 3x de {(price / 3).toFixed(2)} no cartão sem juros
      </span>
    </div>
  )
}
