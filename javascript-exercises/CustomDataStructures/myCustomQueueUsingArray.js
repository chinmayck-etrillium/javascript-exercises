class Queue {
    constructor() {
      this.arr = [];
    }
  
    enqueue(value) {
      this.arr.push(value);
      return this;
    }
  
    peek() {
        if(this.arr.length==0){
            return null;
        }
      return this.arr[0];
    }
  
    dequeue() {
      if (this.arr.length <= 1) {
        this.arr.length = null;
        return this;
      }
  
      let i = 0;
      while (i < this.arr.length - 1) {
        this.arr[i] = this.arr[i + 1];      
        i++;
      }
      this.arr.pop()
      return this;
    }
  }
  
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.dequeue()
  queue.dequeue()
  queue.dequeue()
  queue.enqueue(20);
  queue.enqueue(30);
  console.log(queue.peek());
  
  