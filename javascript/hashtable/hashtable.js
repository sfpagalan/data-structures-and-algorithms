class Hashtable {
  constructor(size = 53) {
      this.table = new Array(size);
  }

  hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
          hash += key.charCodeAt(i);
      }
      return hash % this.table.length;
  }

  set(key, value) {
      const index = this.hash(key);
      if (!this.table[index]) {
          this.table[index] = [[key, value]];
      } else {
          for (const pair of this.table[index]) {
              if (pair[0] === key) {
                  pair[1] = value;
                  return;
              }
          }
          this.table[index].push([key, value]);
      }
  }

  get(key) {
      const index = this.hash(key);
      const bucket = this.table[index];
      if (bucket) {
          for (const [k, v] of bucket) {
              if (k === key) {
                  return v;
              }
          }
      }
      return null;
  }

  has(key) {
      return this.get(key) !== null;
  }

  keys() {
      const keysArr = [];
      for (const bucket of this.table) {
          if (bucket) {
              for (const [key] of bucket) {
                  keysArr.push(key);
              }
          }
      }
      return keysArr;
  }
}

module.exports = Hashtable;
