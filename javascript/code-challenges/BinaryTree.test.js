const { Node, BinaryTree, BinarySearchTree } = require('../code-challenges/BinaryTree');

describe('BinaryTree', () => {
    let emptyTree;
    let singleNodeTree;
    let bst;

    beforeEach(() => {
        emptyTree = new BinaryTree();
        singleNodeTree = new BinaryTree(new Node(10));
        bst = new BinarySearchTree();
        bst.add(10);
        bst.add(5);
        bst.add(15);
    });

    test('Can successfully instantiate an empty tree', () => {
        expect(emptyTree.root).toBeNull();
    });

    test('Can successfully instantiate a tree with a single root node', () => {
        expect(singleNodeTree.root).not.toBeNull();
        expect(singleNodeTree.root.value).toBe(10);
    });

    test('Can successfully return a collection from a pre-order traversal', () => {
        expect(bst.preOrder()).toEqual([10, 5, 15]);
    });

    test('Can successfully return a collection from an in-order traversal', () => {
        expect(bst.inOrder()).toEqual([5, 10, 15]);
    });

    test('Can successfully return a collection from a post-order traversal', () => {
        expect(bst.postOrder()).toEqual([5, 15, 10]);
    });
});

describe('BinarySearchTree', () => {
    let bst;

    beforeEach(() => {
        bst = new BinarySearchTree();
        bst.add(10);
        bst.add(5);
        bst.add(15);
    });

    test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
        expect(bst.root.left.value).toBe(5);
        expect(bst.root.right.value).toBe(15);
    });

    test('Returns true for the contains method with an existing node value', () => {
        expect(bst.contains(10)).toBe(true);
    });

    test('Returns false for the contains method with a non-existing node value', () => {
        expect(bst.contains(20)).toBe(false);
    });
});
