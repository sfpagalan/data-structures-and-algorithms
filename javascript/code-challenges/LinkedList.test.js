const { expect } = require('chai');
const LinkedList = require('../code-challenges/LinkedList');

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('should successfully instantiate an empty linked list', () => {
    expect(linkedList.head).to.be.null;
  });

  it('should properly insert into the linked list', () => {
    linkedList.insert('Test');
    expect(linkedList.head.value).to.equal('Test');
  });

  it('should properly insert multiple nodes into the linked list', () => {
    linkedList.insert('Node 1');
    linkedList.insert('Node 2');
    expect(linkedList.head.value).to.equal('Node 2');
    expect(linkedList.head.next.value).to.equal('Node 1');
  });

  it('should return true when finding a value within the linked list that exists', () => {
    linkedList.insert('Value 1');
    linkedList.insert('Value 2');
    expect(linkedList.includes('Value 1')).to.be.true;
  });

  it('should return false when searching for a value in the linked list that does not exist', () => {
    linkedList.insert('Item 1');
    linkedList.insert('Item 2');
    expect(linkedList.includes('Item 3')).to.be.false;
  });

  it('should properly return a collection of all the values that exist in the linked list', () => {
    linkedList.insert('A');
    linkedList.insert('B');
    linkedList.insert('C');
    expect(linkedList.toString()).to.equal('{ C } -> { B } -> { A } -> NULL');
  });
});
