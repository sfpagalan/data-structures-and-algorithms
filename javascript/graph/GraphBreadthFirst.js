class GraphBreadthFirst {
  constructor() {
    this.adjacencyList = {};
  }

  addNode(node) {
    if (!this.adjacencyList[node]) {
      this.adjacencyList[node] = [];
    }
  }

  addEdge(node1, node2) {
    if (this.adjacencyList[node1] && this.adjacencyList[node2]) {
      this.adjacencyList[node1].push(node2);
      this.adjacencyList[node2].push(node1);
    }
  }

  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currentVertex;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    console.log(result.join(", "));
    return result;
  }
}

module.exports = GraphBreadthFirst;
