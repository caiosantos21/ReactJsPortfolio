import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export const BuyButton = () => {
  const [totalShirts, setTotalShirts] = useState(1)

  return (
    <div className="flex items-center space-x-2 mt-5">
      <Input
        type="number"
        min={1}
        className={cn('w-[70px]')}
        value={totalShirts}
        onChange={(e) => setTotalShirts(Number(e.target.value))}
      />
      <Button type="submit">COMPRAR</Button>
    </div>
  )
}
