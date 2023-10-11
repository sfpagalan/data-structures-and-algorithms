const { BreadthFirst, TreeNode } = require('../code-challenges/BreadthFirst');

describe('Breadth-First Traversal', () => {
  test('Should return an array of values in the order they were encountered', () => {
    // sample binary tree
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);

    const result = BreadthFirst(root);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test('Should return an array of "One Piece" character names in the order they were encountered', () => {
    // "One Piece" character tree
    const luffy = new TreeNode('Monkey D. Luffy');
    const zoro = new TreeNode('Roronoa Zoro');
    const nami = new TreeNode('Nami');
    const usopp = new TreeNode('Usopp');
    const sanji = new TreeNode('Sanji');
    const chopper = new TreeNode('Tony Tony Chopper');
    const robin = new TreeNode('Nico Robin');
    const franky = new TreeNode('Franky');
    const brook = new TreeNode('Brook');
    const jinbe = new TreeNode('Jinbe');

    luffy.left = zoro;
    luffy.right = nami;
    zoro.left = usopp;
    zoro.right = sanji;
    nami.left = chopper;
    nami.right = robin;
    sanji.left = franky;
    sanji.right = brook;
    robin.left = jinbe;

    const result = BreadthFirst(luffy);
    expect(result).toEqual([
      'Monkey D. Luffy',
      'Roronoa Zoro',
      'Nami',
      'Usopp',
      'Sanji',
      'Tony Tony Chopper',
      'Nico Robin',
      'Franky',
      'Brook',
      'Jinbe',
    ]);
  });
});
