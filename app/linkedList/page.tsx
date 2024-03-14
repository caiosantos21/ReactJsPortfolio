'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LinkedList } from 'src/study/linkedList/LinkedList'
import { ListNode } from 'src/study/linkedList/ListNode'

const createList = () => {
  let node1 = new ListNode(10)
  let node2 = new ListNode(20)
  let node3 = new ListNode(30)
  node1.next = node2
  node2.next = node3
  node2.prev = node1
  node3.prev = node2

  return node1
}

export default function LinkedListPage() {
  const [list, setList] = useState<LinkedList<number>>(
    new LinkedList(createList())
  )
  const [renderList, setRenderList] = useState(list.traverse())

  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit((data) => {
    const a = list
    a.insertAtEnd(Number(data.insertAtEnd))

    setList(a)

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
