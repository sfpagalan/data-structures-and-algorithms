class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.items.pop();
    } else {
      throw new Error('Stack is empty');
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    } else {
      throw new Error('Stack is empty');
    }
  }
}

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    // To enqueue, push items onto stack1
    this.stack1.push(value);
  }

  dequeue() {
    // If both stacks are empty, the queue is empty
    if (this.stack1.isEmpty() && this.stack2.isEmpty()) {
      throw new Error('Queue is empty');
    }

    // If stack2 is empty, transfer elements from stack1
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }

    // Pop from stack2 to dequeue
    return this.stack2.pop();
  }
}

module.exports = {
  Stack,
  PseudoQueue,
};
