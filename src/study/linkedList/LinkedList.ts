import { ListNode } from './ListNode'

interface ILinkedList<T> {
  insertInBegin(data: T): ListNode<T>
  insertAtEnd(data: T): ListNode<T>
  deleteNode(node: ListNode<T>): void
  traverse(): T[]
  size(): number
  search(comparator: (data: T) => boolean): ListNode<T> | null
}

//Doubly-linked list

export class LinkedList<T> implements ILinkedList<T> {
  private head: ListNode<T> | null = null

  public insertAtEnd(data: T): ListNode<T> {
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

  public insertInBegin(data: T): ListNode<T> {
    const node = new ListNode(data)

    if (!this.head) {
      this.head = node
    } else {
      this.head.prev = node
      node.next = this.head
      this.head = node
    }

    return node
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
