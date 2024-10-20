class HashMap {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  
  get(key) {
    const address = this._hash(key);
    const arrayAtAddress = this.data[address];
    console.log(this.data)
    

    if (arrayAtAddress.length) {
        for (let i = 0; i < arrayAtAddress.length; i++) {
            if (key == arrayAtAddress[i][0]) {
          return arrayAtAddress[i][1];
        }
      }
    } else {
      return undefined;
    }
  }
}

const hash1 = new HashMap(2);
hash1.set("Name", "Anil")
hash1.set("Age", 28)
console.log(hash1.get("Age"))
