const { TreeNode, fizzBuzzTree } = require('../code-challenges/FizzBuzzTree');

describe('Fizz Buzz Tree', () => {
  it('should transform tree values correctly', () => {
    const root = new TreeNode(15);
    root.children = [
      new TreeNode(3),
      new TreeNode(5),
      new TreeNode(10),
      new TreeNode(4),
    ];

    const newRoot = fizzBuzzTree(root);

    const expectedRoot = new TreeNode('FizzBuzz');
    expectedRoot.children = [
      new TreeNode('Fizz'),
      new TreeNode('Buzz'),
      new TreeNode('Buzz'),
      new TreeNode('4'),
    ];

    function compareTrees(treeA, treeB) {
      if (!treeA && !treeB) return true;
      if (!treeA || !treeB) return false;
      if (treeA.value !== treeB.value) return false;
      if (treeA.children.length !== treeB.children.length) return false;
      for (let i = 0; i < treeA.children.length; i++) {
        if (!compareTrees(treeA.children[i], treeB.children[i])) return false;
      }
      return true;
    }

    expect(compareTrees(newRoot, expectedRoot)).toBe(true);
  });
});
