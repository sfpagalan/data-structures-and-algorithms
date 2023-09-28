const { LinkedList, Node, zipLists } = require('../code-challenges/zipList');

describe('LinkedList', () => {
  describe('append', () => {
    it('should append nodes to the list', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);

      expect(list.head.value).toBe(1);
      expect(list.head.next.value).toBe(2);
      expect(list.head.next.next.value).toBe(3);
    });
  });

  describe('printList', () => {
    it('should print the list in the expected format', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);

      const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

      list.printList();

      expect(consoleSpy).toHaveBeenCalledWith('{1} -> ');
      expect(consoleSpy).toHaveBeenCalledWith('{2} -> ');
      expect(consoleSpy).toHaveBeenCalledWith('{3} -> ');
      expect(consoleSpy).toHaveBeenCalledWith('null');

      consoleSpy.mockRestore();
    });
  });
});

describe('zipLists', () => {
  it('should zip two linked lists correctly', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);

    const list2 = new LinkedList();
    list2.append(2);
    list2.append(4);

    const zippedList = zipLists(list1, list2);

    expect(zippedList.head.value).toBe(1);
    expect(zippedList.head.next.value).toBe(2);
    expect(zippedList.head.next.next.value).toBe(3);
    expect(zippedList.head.next.next.next.value).toBe(4);
  });
});
