export class ListNode<T> {
  data: T
  prev: ListNode<T> | null = null
  next: ListNode<T> | null = null

  constructor(data: T) {
    this.data = data
  }
}
