const Graph = require('./graph.js');

describe("Graph", () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test("should add a vertex", () => {
    expect(graph.addVertex('A')).toBe('A');
  });

});
