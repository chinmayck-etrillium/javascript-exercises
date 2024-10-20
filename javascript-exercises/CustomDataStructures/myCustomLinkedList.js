class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    this.tail.next = {
      value: value,
      next: null,
    };
    this.tail = this.tail.next;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value,
      next: null,
    };

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  print() {
    let currentNode = this.head;
    const nodeValues = [];
    while (currentNode !== null) {
      nodeValues.push(currentNode.value);
      currentNode = currentNode.next;
      console.log(currentNode)
    }
    return nodeValues;
  }

  insert(value, index) {
    let newNode = {
      value,
      next: null,
    };
    const leaderNode = this.traverseToIndex(index - 1);
    const pointerNode = leaderNode.next;
    leaderNode.next = newNode;
    newNode.next = pointerNode;
    this.length++;
    return this.head;
  }

  traverseToIndex(index) {
    let count = 0;
    let currentNode = this.head;
    while (count != index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  delete(index){
    const prevNode = this.traverseToIndex(index - 2);
    const nodeToDelete = prevNode.next;
    const afterNode = nodeToDelete.next
    prevNode.next=afterNode;
    this.length--
    return this.print(this.head)
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.append(70);
myLinkedList.prepend(40);
console.log(myLinkedList.insert(90, 1));
console.log(myLinkedList.print());
console.log(myLinkedList.delete(2))
