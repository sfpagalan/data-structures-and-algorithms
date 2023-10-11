class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTreeMax {
  constructor(root) {
    this.root = new TreeNode(root);
  }

  findMaximum() {
    return this._findMaximumRecursive(this.root);
  }

  _findMaximumRecursive(currentNode) {
    if (currentNode === null) {
      return Number.NEGATIVE_INFINITY;
    }

    const leftMax = this._findMaximumRecursive(currentNode.left);
    const rightMax = this._findMaximumRecursive(currentNode.right);

    return Math.max(currentNode.value, leftMax, rightMax);
  }
}

module.exports = {
  BinaryTreeMax,
  TreeNode,
}
