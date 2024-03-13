'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { LinkedList } from 'src/study/linkedList'

export default function LinkedListPage() {
  const [renderList, setRenderList] = useState<number[]>([])
  const [linkedList, setLinkedList] = useState<LinkedList<number>>()

  const { register, handleSubmit } = useForm()

  const createDefaultList = () => {
    const auxList = new LinkedList<number>()
    auxList.insertInBegin(10)
    auxList.insertAtEnd(20)
    auxList.insertAtEnd(30)

    setLinkedList(auxList)
    setRenderList(auxList.traverse())
  }

  useEffect(() => {
    if (!linkedList) {
      createDefaultList()
    } else {
      setRenderList(linkedList.traverse())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [linkedList])

  const onSubmit = handleSubmit((data) => {
    console.log(data, data.insertAtEnd)

    const aux = linkedList
    aux?.insertAtEnd(Number(data.insertAtEnd))

    setLinkedList(aux)
    setRenderList(aux.traverse())
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
