'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DoubleSlider } from '@/components/ui/double-slider'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { tShirtSizes } from 'src/pages/store/constants/sizes'
import { TShirt } from 'src/types/Store/TShirt'

type TShirtFilterProps = {
  defaultList: TShirt[]
  updateList: (list: TShirt[]) => void
  resetList: () => void
}

export const TShirtFilter = (props: TShirtFilterProps) => {
  const { defaultList, updateList, resetList } = props

  const [nameFilter, setNameFilter] = useState('')
  const [sizeFilter, setSizeFilter] = useState<string[]>([])
  const [minPriceFilter, setMinPriceFilter] = useState(0)
  const [maxPriceFilter, setMaxPriceFilter] = useState(100)

  useEffect(() => {
    if (defaultList.length > 0) {
      const aux = defaultList.filter((item) => {
        const nameMatch = item.name
          .toLowerCase()
          .includes(nameFilter.toLowerCase())

        const sizesMatch =
          sizeFilter.length > 0
            ? item.sizes.some((r) => sizeFilter.includes(r))
            : true

        const priceMatch =
          minPriceFilter < maxPriceFilter
            ? item.price > minPriceFilter && item.price < maxPriceFilter
            : true

        return nameMatch && sizesMatch && priceMatch
      })

      updateList(aux)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultList, nameFilter, sizeFilter, minPriceFilter, maxPriceFilter])

  return (
    <Card className={cn('mb-4 p-3 border-2 rounded ')}>
      <CardHeader>
        <CardTitle>Filtro</CardTitle>
      </CardHeader>

      <CardContent className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            type="text"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="name">Tamanho</Label>
          <ToggleGroup
            id="name"
            type="multiple"
            variant="outline"
            onValueChange={(e) => setSizeFilter(e)}
          >
            {tShirtSizes.map((size, index) => (
              <ToggleGroupItem key={index} value={size}>
                {size}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="minPrice">Preço R$</Label>

          <div className="flex">
            <span>{minPriceFilter}</span>

            <DoubleSlider
              defaultValue={[minPriceFilter, maxPriceFilter]}
              className={cn('w-[60%] ml-2 mr-2', '')}
              onValueChange={(e) => {
                setMinPriceFilter(e[0])
                setMaxPriceFilter(e[1])
              }}
              {...props}
            />
            <span>{maxPriceFilter}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
