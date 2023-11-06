class GraphError extends Error {
  constructor(message) {
      super(message);
      this.name = "GraphError";
  }
}

class Graph {
  constructor() {
      this.adjacencyList = {};
  }

  addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
          this.adjacencyList[vertex] = [];
          return vertex;
      } else {
          throw new GraphError(`Vertex "${vertex}" already exists.`);
      }
  }

  addEdge(vertex1, vertex2, weight = 0) {
      if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
          throw new GraphError("Both vertices must exist in the graph.");
      }
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  getVertices() {
      return Object.keys(this.adjacencyList);
  }

  getNeighbors(vertex) {
      if (this.adjacencyList[vertex]) {
          return this.adjacencyList[vertex];
      } else {
          throw new GraphError(`No neighbors found for vertex "${vertex}"`);
      }
  }

  size() {
      return Object.keys(this.adjacencyList).length;
  }
}

try {
  const graph = new Graph();
  const vertexA = graph.addVertex('A');
  console.log(vertexA); // 'A'

  graph.addVertex('B');
  graph.addEdge('A', 'B', 5);

  const vertices = graph.getVertices();
  console.log(vertices); // ['A', 'B']

  const neighborsA = graph.getNeighbors('A');
  console.log(neighborsA); // [{ node: 'B', weight: 5 }]

  const size = graph.size();
  console.log(size); // 2
} catch (error) {
  if (error instanceof GraphError) {
      console.error(error.message);
  } else {
      console.error("An unexpected error occurred");
  }
}

module.exports = Graph;
