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

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(`{${current.value}} -> `);
      current = current.next;
    }
    console.log("null");
  }
}

function zipLists(list1, list2) {
  let dummy = new Node(null);
  let current = dummy;

  while (list1 || list2) {
    if (list1 && list1.head) {
      current.next = list1.head;
      list1.head = list1.head.next;
      current = current.next;
    }

    if (list2 && list2.head) {
      current.next = list2.head;
      list2.head = list2.head.next;
      current = current.next;
    }
  }

  let newList = new LinkedList();
  newList.head = dummy.next;

  return newList;
}

module
  .exports = {
  LinkedList,
  Node,
  zipLists,
};
