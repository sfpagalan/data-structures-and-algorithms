const { Stack, PseudoQueue } = require('../code-challenges/PseudoQueue');

const { expect } = require('chai');

describe('PseudoQueue', () => {
  it('should enqueue and dequeue elements in FIFO order', () => {
    const queue = new PseudoQueue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).to.equal(1);
    expect(queue.dequeue()).to.equal(2);

    queue.enqueue(4);

    expect(queue.dequeue()).to.equal(3);
    expect(queue.dequeue()).to.equal(4);
  });

  it('should handle edge case when dequeue is called on an empty queue', () => {
    const queue = new PseudoQueue();

    expect(() => queue.dequeue()).to.throw('Queue is empty');
  });

  it('should handle edge case when dequeue is called after enqueuing', () => {
    const queue = new PseudoQueue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).to.equal(1);
    expect(queue.dequeue()).to.equal(2);
    expect(() => queue.dequeue()).to.throw('Queue is empty');
  });

  it('should handle multiple enqueues and dequeues', () => {
    const queue = new PseudoQueue();

    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).to.equal(1);

    queue.enqueue(3);

    expect(queue.dequeue()).to.equal(2);
    expect(queue.dequeue()).to.equal(3);
  });
});
