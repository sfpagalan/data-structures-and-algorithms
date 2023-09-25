class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
  }

  insert(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
  }

  includes(value) {
      let current = this.head;
      while (current) {
          if (current.value === value) {
              return true;
          }
          current = current.next;
      }
      return false;
  }

  toString() {
      let result = "";
      let current = this.head;
      while (current) {
          result += `{ ${current.value} } -> `;
          current = current.next;
      }
      result += "NULL";
      return result;
  }
}

// Testing
const linkedList = new LinkedList();

// values
linkedList.insert("Zoro");
linkedList.insert("Kakashi");
linkedList.insert("Gojo");
linkedList.insert("Luffy");

console.log(linkedList.toString());
// Output: { Luffy } -> { Gojo } -> { Kakashi } -> { Zoro } -> NULL

console.log(linkedList.includes('Gojo'));  // Output: true
// Gojo is part of the Anime Fun Club and will always be

console.log(linkedList.includes('Naruto'));  // Output: false
// Naruto is not part of the Anime Fun Club listed above
