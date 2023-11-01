class HashMap {
  constructor(size = 1024) {
    this.map = new Array(size);
  }

  hash(key) {
    return key.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % this.map.length;
  }

  add(key, value) {
    const hash = this.hash(key);
    if (!this.map[hash]) {
      this.map[hash] = [];
    }
    this.map[hash].push([key, value]);
  }

  repeatedWord(str) {
    const words = str.toLowerCase().match(/\w+/g);
    const seen = new Set();

    for (const word of words) {
      if (seen.has(word)) {
        return word;
      }
      seen.add(word);
    }
    return null;
  }
}

module.exports = HashMap;
