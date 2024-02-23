'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { useGetDogs } from 'app/dashboard/hooks/useGetDogs'
import Image from 'next/image'

export default function DashboardPage() {
  const { data, error, isPending } = useGetDogs({ totalDogs: 5 })

  if (isPending) {
    return 'Loading...'
  }

  if (error) {
    return 'An error has occurred: ' + error.message
  }

  return (
    <main className="grid grid-cols-3 gap-4 ">
      {data
        ? data.message.map((row) => {
            return (
              <Card key={row} className={cn('w-[380px] p-3 border-2 rounded')}>
                <CardHeader>
                  <CardTitle>Create project</CardTitle>

                  <CardDescription>
                    Deploy your new project in one-click.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <Image
                    key={row}
                    src={row}
                    alt="row"
                    width={100}
                    height={100}
                  />
                </CardContent>
              </Card>
            )
          })
        : null}
    </main>
  )
}
