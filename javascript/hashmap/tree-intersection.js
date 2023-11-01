const HashMap = require('./hashmap.js');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

}

function treeIntersection(tree1, tree2) {
  const map = new HashMap();
  const result = [];

  function traversePopulate(node) {
    if (!node) return;
    map.add(node.value, true);
    traversePopulate(node.left);
    traversePopulate(node.right);
  }

  function traverseCheck(node) {
    if (!node) return;
    if (map.repeatedWord(String(node.value))) {
      result.push(node.value);
    }
    traverseCheck(node.left);
    traverseCheck(node.right);
  }

  traversePopulate(tree1.root);
  traverseCheck(tree2.root);

  return result;
}

module.exports = { Node, BinaryTree, treeIntersection };
