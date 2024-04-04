import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { cn } from '@/lib/utils'
import { tShirtSizes } from 'src/pages/store/constants/sizes'
import { TShirt } from 'src/types/Store/TShirt'

type TShirtFilterProps = {
  // defaultList: TShirt[]
  updateList: (list: TShirt[]) => void
  resetList: () => void
}

export const TShirtFilter = (props: TShirtFilterProps) => {
  const { updateList, resetList } = props

  return (
    <Card className={cn('mb-4 p-3 border-2 rounded')}>
      <CardHeader>
        <CardTitle>Filtro</CardTitle>
      </CardHeader>

      <CardContent></CardContent>

      <ToggleGroup type="multiple" variant="outline">
        {tShirtSizes.map((size, index) => (
          <ToggleGroupItem key={index} value={size}>
            {size}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </Card>
  )
}
