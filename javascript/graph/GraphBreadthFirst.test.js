const GraphBreadthFirst = require('./GraphBreadthFirst.js');

describe('GraphBreadthFirst One Piece Test Cases', () => {

  let graph;

  beforeEach(() => {
    graph = new GraphBreadthFirst();
  });

  test('Test Case 1: Small Subset of Islands', () => {
    graph.addNode('Foosha Village');
    graph.addNode('Orange Town');
    graph.addNode('Syrup Village');
    graph.addEdge('Foosha Village', 'Orange Town');
    graph.addEdge('Foosha Village', 'Syrup Village');
    expect(graph.breadthFirst('Foosha Village')).toEqual(['Foosha Village', 'Orange Town', 'Syrup Village']);
  });

  test('Test Case 2: Islands with Multiple Routes', () => {
    graph.addNode('Water 7');
    graph.addNode('Enies Lobby');
    graph.addNode('Thriller Bark');
    graph.addNode('Sabaody Archipelago');
    graph.addEdge('Water 7', 'Enies Lobby');
    graph.addEdge('Water 7', 'Thriller Bark');
    graph.addEdge('Enies Lobby', 'Sabaody Archipelago');
    expect(graph.breadthFirst('Water 7')).toEqual(['Water 7', 'Enies Lobby', 'Thriller Bark', 'Sabaody Archipelago']);
  });

  test('Test Case 3: Isolated Island', () => {
    graph.addNode('Skypiea');
    expect(graph.breadthFirst('Skypiea')).toEqual(['Skypiea']);
  });

});
