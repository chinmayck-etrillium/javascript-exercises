class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    console.log(`Added ${item} on index ${this.length}!`);
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    console.log(`Deleted ${this.data[this.length - 1]} !`);
    delete this.data[this.length - 1];
    return this.lastItem;
  }
}

const myFirstArray = new myArray();
myFirstArray.push(0);
myFirstArray.push(1);
console.log(myFirstArray.get(1));
myFirstArray.pop();
console.log(myFirstArray);
