function businessTrip(graph, cities) {
  let totalCost = 0;
  for (let i = 0; i < cities.length - 1; i++) {
      if (graph[cities[i]] && graph[cities[i]][cities[i + 1]] !== undefined) {
          totalCost += graph[cities[i]][cities[i + 1]];
      } else {
          return null;
      }
  }
  return totalCost;
}

module.exports = businessTrip;
