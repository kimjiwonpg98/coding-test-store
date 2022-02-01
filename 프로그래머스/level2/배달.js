function solution(N, road, K) {
  const roads = Array.from({ length: N + 1 }, () => []);
  const route = Array.from({ length: N + 1 }, () => Infinity);
  const rocate = [];

  road.map((x) => {
    roads[x[0]].push({
      to: x[1],
      cost: x[2],
    });
    roads[x[1]].push({
      to: x[0],
      cost: x[2],
    });
  });

  route[1] = 0;
  rocate.push({ to: 1, cost: 0 });

  while (rocate.length !== 0) {
    rocate.sort((a, b) => a.cost - b.cost);

    const { to, cost } = rocate.pop();
    roads[to].forEach((nextNode) => {
      if (route[nextNode.to] > route[to] + nextNode.cost) {
        route[nextNode.to] = route[to] + nextNode.cost;
        rocate.push(nextNode);
      }
    });
  }

  return route.filter((x) => x <= K).length;
}
