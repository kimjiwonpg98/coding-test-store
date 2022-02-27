function solution(n, costs) {
  const visited = Array.from(Array(n)).fill(0);
  const bridge = Array.from(Array(costs.length)).fill(0);

  costs = costs.sort((a, b) => a[2] - b[2]);
  let cnt = 1;
  visited[costs[0][0]] = 1;
  visited[costs[0][1]] = 1;
  let answer = costs[0][2];

  while (cnt < n - 1) {
    for (let i in costs) {
      const [start, end, cost] = costs[i];
      if (bridge[i]) continue;

      if (
        (!visited[start] && visited[end]) ||
        (visited[start] && !visited[end])
      ) {
        cnt++;
        visited[start] = 1;
        visited[end] = 1;
        bridge[i] = 1;
        answer += cost;
        break;
      }
    }
  }
  return answer;
}
