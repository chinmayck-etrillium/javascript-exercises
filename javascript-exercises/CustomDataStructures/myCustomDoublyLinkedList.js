class DoublyLinkedList {
  constructor(value) {
    this.head = {
      data: value,
      prev: null,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      data: value,
      next: null,
      prev: null,
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      data: value,
      prev: null,
      next: null,
    };
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printNext() {
    let currentNode = this.head;
    const values = [];
    let i = 0;
    while (currentNode != null) {
      values[i] = currentNode.data;
      currentNode = currentNode.next;
      i++;
    }
    console.log(values);
    return this
  }

  printPrev() {
    let currentNode = this.tail;
    const values = [];
    let i = 0;
    while (currentNode != null) {
      values[i] = currentNode.data;
      currentNode = currentNode.prev;
      i++;
    }
    console.log(values);
    return this
  }

  insert(value, index) {
    if (index == 1) {
      this.prepend(value);
      this.length++;
      this.printNext();
      return this;
    }
    if (index == this.length+1) {
      this.append(value);
      this.length++;
      this.printNext();
      return this;
    }

    const newNode = {
      data: value,
      prev: null,
      next: null,
    };
    let leaderNode = this.traverseNext(index - 1);
    let pointerNode = leaderNode.next;
    newNode.next = pointerNode;
    leaderNode.next = newNode;
    newNode.prev = leaderNode;
    pointerNode.prev = newNode;
    this.length++;
    console.log(this.printNext());
    return this;
  }
  traverseNext(index) {
    let i = 1;
    let currentNode = this.head;
    while (i < index) {
      currentNode = currentNode.next; 
      i++;
    }
    return currentNode;
  }
  traversePrev(index) {
    let i = 0;
    let currentNode = this.tail;
    while (i <= index) {
        currentNode = currentNode.prev;
      i++;
    }
    return currentNode;
  }
}

const doublylinkedlist = new DoublyLinkedList(2);
doublylinkedlist.append(4);
doublylinkedlist.append(6);
doublylinkedlist.prepend(1);
doublylinkedlist.insert(3,4)
doublylinkedlist.insert(5,5)
doublylinkedlist.printNext()
