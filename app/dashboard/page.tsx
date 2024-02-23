'use client'

import { useGetDogs } from 'app/dashboard/hooks/useGetDogs'
import Image from 'next/image'
import React from 'react'

export default function DashboardPage() {
  const { data, error, isPending } = useGetDogs({ totalDogs: 4 })

  if (isPending) {
    return 'Loading...'
  }

  if (error) {
    return 'An error has occurred: ' + error.message
  }

  return (
    <main>
      {data
        ? data.message.map((row) => {
            return (
              <React.Fragment key={row}>
                <Image key={row} src={row} alt="row" width={100} height={100} />
              </React.Fragment>
            )
          })
        : null}
    </main>
  )
}
