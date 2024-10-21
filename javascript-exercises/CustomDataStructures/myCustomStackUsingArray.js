//Stack using arrays

class Stack {
  constructor() {
    this.value = [];
  }

  push(value) {
    this.value.push(value);
    return this;
  }

  peek() {
    if (this.value.length) {
      return this.value[this.value.length - 1];
    }
    return null;
  }

  pop() {
    if (this.value.length >= 0) {
      this.value.pop();
    }

    return this;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
console.log(stack.peek());
