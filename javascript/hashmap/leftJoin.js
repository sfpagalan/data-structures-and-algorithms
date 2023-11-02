function leftJoin(grandLineMap, newWorldMap) {
  let journey = [];

  // Off to the Grand Line!!! Whooo
  for (let [island, crew1] of grandLineMap.entries()) {
      let crew2 = newWorldMap.has(island) ? newWorldMap.get(island) : 'NULL';
      journey.push([island, crew1, crew2]);
  }

  return journey;
}

module.exports = leftJoin;
