'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { cn } from '@/lib/utils'
import { useGetTshirts } from 'app/store/hooks/useGetTshirts'
import Image from 'next/image'
import Link from 'next/link'

export default function Store() {
  const { data, error, isPending } = useGetTshirts()

  if (isPending) {
    return 'Loading...'
  }

  if (error) {
    return 'An error has occurred: ' + error.message
  }

  return (
    <main className="grid grid-cols-3 gap-4 ">
      {data
        ? data.map((row, index) => {
            return (
              <Card
                key={row.id}
                className={cn('w-[380px] p-3 border-2 rounded')}
              >
                <CardHeader>
                  <CardTitle>{index}</CardTitle>
                </CardHeader>

                <CardContent>
                  <Image src={row.img} alt="tshirt" width={100} height={100} />
                  <>{row.price}</>
                </CardContent>

                <ToggleGroup type="single" variant="outline" disabled>
                  {row.sizes.map((size, index) => (
                    <ToggleGroupItem key={index} value={size}>
                      {size}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>

                <Link href={`/store/${row.id}`}>Visualizar produto</Link>
              </Card>
            )
          })
        : null}
    </main>
  )
}
