const GraphDepthFirst = require('./GraphDepthFirst.js');

describe('Graph Depth First Search', () => {
  let graph;

  beforeEach(() => {
    graph = new GraphDepthFirst();
    for (let node of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']) {
      graph.addVertex(node);
    }
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'G');
    graph.addEdge('D', 'E');
    graph.addEdge('D', 'H');
    graph.addEdge('D', 'F');
    graph.addEdge('E', 'H');
  });

  test('returns correct pre-order depth-first traversal', () => {
    expect(graph.depthFirst('A')).toEqual(['A', 'B', 'C', 'G', 'D', 'E', 'H', 'F']);
  });

  test('handles graphs with a single node', () => {
    let soloGraph = new Graph();
    soloGraph.addVertex('A');
    expect(soloGraph.depthFirst('A')).toEqual(['A']);
  });

  test('handles cycles without infinite loops', () => {
    graph.addEdge('C', 'A');
    expect(graph.depthFirst('A')).toEqual(['A', 'B', 'C', 'G', 'D', 'E', 'H', 'F']);
  });

  test('handles disconnected graphs', () => {
    graph.addVertex('I');
    expect(graph.depthFirst('A')).not.toContain('I');
  });
});

