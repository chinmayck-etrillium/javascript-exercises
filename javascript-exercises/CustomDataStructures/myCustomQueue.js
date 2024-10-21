class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    enqueue(value) {
      const newNode = new Node(value);
      if (this.length < 1) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
    lookup() {
      return this.head;
    }
    dequeue() {
      if (this.length>0) {
          this.head = this.head.next;
          this.length--;
      }
      return this;
    }
  }
  
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.dequeue();
  queue.dequeue();
  console.log(queue.lookup());
  queue.enqueue(30);
  queue.enqueue(40);
  console.log(queue.lookup());
  
  