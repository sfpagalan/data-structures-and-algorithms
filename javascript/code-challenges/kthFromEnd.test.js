const { LinkedList, Node } = require('../code-challenges/kthFromEnd');

describe('LinkedList - kthFromEnd', () => {
    it('should return the kth node value from the end (Happy Path)', () => {
        const ll = new LinkedList();
        ll.head = new Node(1);
        ll.head.next = new Node(3);
        ll.head.next.next = new Node(8);
        ll.head.next.next.next = new Node(2);

        expect(ll.kthFromEnd(0)).toBe(2); // k is 0 from the end
        expect(ll.kthFromEnd(2)).toBe(3); // k is 2 from the end
        expect(ll.kthFromEnd(3)).toBe(1); // k is the same as the length of the list
        expect(ll.kthFromEnd(1)).toBe(8); // k is in the middle of the linked list
        expect(ll.kthFromEnd(4)).toBe(1); // k is equal to the length of the list
    });

    it('should throw an error when k is greater than the length of the linked list', () => {
        const ll = new LinkedList();
        ll.head = new Node(1);
        ll.head.next = new Node(3);

        expect(() => ll.kthFromEnd(2)).toThrowError('k is greater than the length of the linked list');
    });

    it('should throw an error when k is not a positive integer', () => {
        const ll = new LinkedList();
        ll.head = new Node(1);
        ll.head.next = new Node(3);

        expect(() => ll.kthFromEnd(-1)).toThrowError('k must be a non-negative integer');
    });

    it('should return the node value when the linked list has a size of 1', () => {
        const ll = new LinkedList();
        ll.head = new Node(5);

        expect(ll.kthFromEnd(0)).toBe(5); // k is 0 from the end
    });
});
