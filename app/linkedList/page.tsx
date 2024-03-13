'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { LinkedList } from 'src/study/linkedList/LinkedList'

export default function LinkedListPage() {
  const x = useRef<LinkedList<number>>(new LinkedList<number>())

  const [renderList, setRenderList] = useState<number[]>([])

  useEffect(() => {
    if (renderList.length === 0) {
      console.log(x)
      const a = new LinkedList<number>()
      a.insertAtEnd(10)
      a.insertAtEnd(20)
      a.insertAtEnd(30)

      x.current = a

      console.log('a', a.traverse())

      setRenderList(a.traverse())
    }
  }, [renderList])

  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit((data) => {
    const a = x.current
    a.insertAtEnd(Number(data.insertAtEnd))

    x.current = a

    setRenderList(a.traverse())
  })

  return (
    <main>
      <div className="flex-row">
        Lista:
        {renderList.map((row, index) => {
          return <React.Fragment key={index}> {row} </React.Fragment>
        })}
      </div>

      <form id="form" onSubmit={onSubmit}>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="number"
            placeholder="Number"
            {...register('insertAtEnd')}
          />
          <Button type="submit">Insert at End</Button>
        </div>
      </form>
    </main>
  )
}
