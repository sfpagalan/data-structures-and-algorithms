class TreeNode {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

function BreadthFirst(tree) {
  if (!tree) {
      return [];
  }

  const result = [];
  const queue = [tree];

  while (queue.length > 0) {
      const current = queue.shift();
      result.push(current.value);

      if (current.left) {
          queue.push(current.left);
      }
      if (current.right) {
          queue.push(current.right);
      }
  }

  return result;
}

module.exports = {
  TreeNode,
  BreadthFirst,
}
