class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

function fizzBuzzTree(root) {
  function fizzBuzzTransform(node) {
    if (node === null) {
      return null;
    }

    if (node.value % 3 === 0 && node.value % 5 === 0) {
      node.value = "FizzBuzz";
    }
    else if (node.value % 3 === 0) {
      node.value = "Fizz";
    }
    else if (node.value % 5 === 0) {
      node.value = "Buzz";
    } else {
      node.value = node.value.toString();
    }

    node.children = node.children.map(fizzBuzzTransform);

    return node;
  }

  return fizzBuzzTransform(root);
}

module.exports = {
  TreeNode,
  fizzBuzzTree,
};
