import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export const FreteButton = () => {
  return (
    <div className="flex items-center space-x-2 mt-5">
      <Input
        type="text"
        pattern="\d*"
        maxLength={8}
        placeholder="00000000"
        className={cn('w-[100px]')}
      />
      <Button type="submit">Calcule o frete</Button>
    </div>
  )
}
