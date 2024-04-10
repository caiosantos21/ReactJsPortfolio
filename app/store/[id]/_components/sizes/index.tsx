import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { TShirt } from 'src/types/Store/TShirt'

type TShirtSizesProps = Pick<TShirt, 'sizes'>

export const TShirtSizes = (props: TShirtSizesProps) => {
  const { sizes } = props

  if (!sizes || (sizes && sizes.length === 0)) {
    return
  }

  return (
    <div>
      TAMANHO:
      <ToggleGroup type="single" variant="outline">
        {sizes.map((size, index) => (
          <ToggleGroupItem key={index} value={size}>
            {size}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}
