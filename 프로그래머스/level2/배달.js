function solution(N, road, K) {
  const visited = new Array(N).fill(0);
  const minVisited = new Array(N).fill(0);
  const roads = Array.from(Array(N), () => Array(N).fill(0));
  const inf = 100000;
  let answer = 1;

  road = road.sort((a, b) => {
    b[2] - a[2];
  });

  for (let i of road) {
    roads[i[0] - 1][i[1] - 1] = i[2];
  }

  for (let count in roads) {
    for (let town in roads[count]) {
      if (count !== town && roads[count][town] === 0) {
        roads[count][town] = inf;
      }
    }
  }

  function getSmallIndex() {
    let min = inf;
    let index = 0;
    for (let j = 0; j < N; j++) {
      if (minVisited[j] < min && !visited[j]) {
        min = minVisited[j];
        index = j;
      }
    }
    return index;
  }

  function cal(start) {
    for (let k = 0; k < N; k++) {
      minVisited[k] = roads[start][k];
    }
    visited[start] = 1;
    for (let m = 0; m < N - 2; m++) {
      let current = getSmallIndex();
      visited[current] = 1;
      for (let n = 0; n < N; n++) {
        if (!visited[n]) {
          if (minVisited[current] + roads[current][n] < minVisited[n]) {
            minVisited[n] = minVisited[current] + roads[current][n];
          }
        }
      }
    }
  }

  cal(0);
  minVisited.forEach((x) => {
    if (x <= K) answer += 1;
  });

  return answer;
}
