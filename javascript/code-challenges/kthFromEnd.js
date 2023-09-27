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

  kthFromEnd(k) {
      if (k < 0) {
          throw new Error("k must be a non-negative integer");
      }

      let slowPtr = this.head;
      let fastPtr = this.head;

      for (let i = 0; i < k; i++) {
          if (fastPtr === null) {
              throw new Error("k is greater than the length of the linked list");
          }
          fastPtr = fastPtr.next;
      }

      while (fastPtr !== null) {
          slowPtr = slowPtr.next;
          fastPtr = fastPtr.next;
      }

      if (slowPtr === null) {
          throw new Error("k is greater than the length of the linked list");
      }

      return slowPtr.value;
  }
}

module.exports = {
  Node,
  LinkedList
};
