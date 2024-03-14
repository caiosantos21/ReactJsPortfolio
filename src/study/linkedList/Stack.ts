import { ListNode } from './ListNode'

interface ILinkedList<T> {
  push(data: T): ListNode<T>
  deleteNode(node: ListNode<T>): void
  traverse(): T[]
  size(): number
  search(comparator: (data: T) => boolean): ListNode<T> | null
}

//Singly-linked list

export class StackLinkedList<T> implements ILinkedList<T> {
  private head: ListNode<T> | null = null

  public push(data: T): ListNode<T> {
    const node = new ListNode(data)

    if (!this.head) {
      this.head = node
    } else {
      const getLast = (node: ListNode<T>): ListNode<T> => {
        return node.next ? getLast(node.next) : node
      }

      const lastNode = getLast(this.head)
      node.prev = lastNode
      lastNode.next = node
    }

    return node
  }

  public pop() {
    if (!this.head) {
      return
    }

    const getSecondLast = (node: ListNode<T>): ListNode<T> => {
      return node.next?.next ? getSecondLast(node.next) : node
    }

    const secondLastNode = getSecondLast(this.head)
    secondLastNode.next = null
  }

  public deleteNode(node: ListNode<T>): void {
    if (!node.prev) {
      this.head = node.next
    } else {
      const prevNode = node.prev
      prevNode.next = node.next
    }
  }

  public search(comparator: (data: T) => boolean): ListNode<T> | null {
    const checkNext = (node: ListNode<T>): ListNode<T> | null => {
      if (comparator(node.data)) {
        return node
      }
      return node.next ? checkNext(node.next) : null
    }

    return this.head ? checkNext(this.head) : null
  }

  public traverse(): T[] {
    const array: T[] = []
    if (!this.head) {
      return array
    }

    const addToArray = (node: ListNode<T>): T[] => {
      array.push(node.data)
      return node.next ? addToArray(node.next) : array
    }

    return addToArray(this.head)
  }

  public size(): number {
    return this.traverse().length
  }
}
