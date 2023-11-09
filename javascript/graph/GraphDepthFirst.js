class GraphDepthFirst {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(start, end) {
    if (this.adjacencyList.has(start) && this.adjacencyList.has(end)) {
      this.adjacencyList.get(start).push(end);
      this.adjacencyList.get(end).push(start);
    }
  }

  depthFirst(startingNode) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList.get(vertex).forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(startingNode);

    return result;
  }
}

module.exports = GraphDepthFirst;
