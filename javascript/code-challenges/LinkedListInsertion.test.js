const LinkedList = require('../code-challenges/LinkedListInsertions');

describe('LinkedListInsertion', () => {
  it('can successfully add a node to the end of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    expect(linkedList.toString()).toBe('1');
  });

  it('can successfully add multiple nodes to the end of a linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(3);
    linkedList.append(2);
    expect(linkedList.toString()).toBe('1 -> 3 -> 2');
  });

  it('can successfully insert a node before a node located in the middle of a linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(3);
    linkedList.append(2);
    linkedList.insertBefore(3, 5);
    expect(linkedList.toString()).toBe('1 -> 5 -> 3 -> 2');
  });

  it('can successfully insert a node before the first node of a linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(3);
    linkedList.append(2);
    linkedList.insertBefore(1, 5);
    expect(linkedList.toString()).toBe('5 -> 1 -> 3 -> 2');
  });

  it('can successfully insert after a node in the middle of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(3);
    linkedList.append(2);
    linkedList.insertAfter(3, 5);
    expect(linkedList.toString()).toBe('1 -> 3 -> 5 -> 2');
  });

  it('can successfully insert a node after the last node of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(3);
    linkedList.append(2);
    linkedList.insertAfter(2, 5);
    expect(linkedList.toString()).toBe('1 -> 3 -> 2 -> 5');
  });
});
