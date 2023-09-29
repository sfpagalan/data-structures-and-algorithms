'use strict';

const { expect } = require("chai");
const { Stack, Queue } = require("../code-challenges/stacksQueue");

describe("Stack Tests", () => {
  it("Can successfully push onto a stack", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).to.equal(1);
  });

  it("Can successfully push multiple values onto a stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).to.equal(3);
  });

  it("Can successfully pop off the stack", () => {
    const stack = new Stack();
    stack.push(1);
    const popped = stack.pop();
    expect(popped).to.equal(1);
  });

  it("Can successfully empty a stack after multiple pops", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).to.equal(true);
  });

  it("Can successfully peek the next item on the stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).to.equal(2);
  });

  it("Can successfully instantiate an empty stack", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).to.equal(true);
  });

  it("Calling pop on empty stack raises exception", () => {
    const stack = new Stack();
    expect(() => stack.pop()).to.throw("Stack is empty");
  });

  it("Calling peek on empty stack raises exception", () => {
    const stack = new Stack();
    expect(() => stack.peek()).to.throw("Stack is empty");
  });
});

describe("Queue Tests", () => {
  it("Can successfully enqueue into a queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.peek()).to.equal(1);
  });

  it("Can successfully enqueue multiple values into a queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).to.equal(1);
  });

  it("Can successfully dequeue out of a queue the expected value", () => {
    const queue = new Queue();
    queue.enqueue(1);
    const dequeued = queue.dequeue();
    expect(dequeued).to.equal(1);
  });

  it("Can successfully peek into a queue, seeing the expected value", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).to.equal(1);
  });

  it("Can successfully empty a queue after multiple dequeues", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).to.equal(true);
  });

  it("Can successfully instantiate an empty queue", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).to.equal(true);
  });

  it("Calling dequeue on empty queue raises exception", () => {
    const queue = new Queue();
    expect(() => queue.dequeue()).to.throw("Queue is empty");
  });

  it("Calling peek on empty queue raises exception", () => {
    const queue = new Queue();
    expect(() => queue.peek()).to.throw("Queue is empty");
  });
});
