const { BinaryTreeMax, TreeNode } = require('../code-challenges/BinaryTreeMax');

describe('BinaryTree - findMaximum', () => {
  it('should find the maximum value in a tree with positive values', () => {
    const tree = new BinaryTreeMax(10);
    tree.root.left = new TreeNode(5);
    tree.root.right = new TreeNode(15);
    tree.root.left.left = new TreeNode(2);
    tree.root.left.right = new TreeNode(8);
    tree.root.right.left = new TreeNode(12);
    tree.root.right.right = new TreeNode(20);

    const maximumValue = tree.findMaximum();
    expect(maximumValue).toBe(20);
  });

  it('should find the maximum value in a tree with negative values', () => {
    const tree = new BinaryTreeMax(-5);
    tree.root.left = new TreeNode(-10);
    tree.root.right = new TreeNode(-2);
    tree.root.left.left = new TreeNode(-15);
    tree.root.left.right = new TreeNode(-8);
    tree.root.right.left = new TreeNode(-3);
    tree.root.right.right = new TreeNode(-1);

    const maximumValue = tree.findMaximum();
    expect(maximumValue).toBe(-1);
  });

  it('should find the maximum bounty in the Straw Hat Pirates crew', () => {
    const tree = new BinaryTreeMax(1_500_000_000); // Monkey D. Luffy's bounty
    tree.root.left = new TreeNode(320_000_000); // Roronoa Zoro's bounty
    tree.root.right = new TreeNode(1_000_000); // Tony Tony Chopper's initial bounty

    const maximumBounty = tree.findMaximum();
    expect(maximumBounty).toBe(1_500_000_000); // Luffy's bounty is the highest
  });
});
