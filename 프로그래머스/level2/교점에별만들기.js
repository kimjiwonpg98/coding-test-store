function solution(line) {
  let result = [];

  function combination(line, idx) {
    let candidate = [];
    for (let i = idx + 1; i < line.length; i++) {
      const pointX =
        (line[idx][1] * line[i][2] - line[idx][2] * line[i][1]) /
        (line[idx][0] * line[i][1] - line[idx][1] * line[i][0]);
      const pointY =
        (line[idx][2] * line[i][0] - line[idx][0] * line[i][2]) /
        (line[idx][0] * line[i][1] - line[idx][1] * line[i][0]);
      if (Number.isInteger(pointX) && Number.isInteger(pointY))
        candidate.push([pointX, pointY]);
    }
    return candidate;
  }

  for (let i = 0; i < line.length; i++) {
    result.push(...combination(line, i));
  }

  let [maxX, maxY, minX, minY] = result.reduce(
    ([maxX, maxY, minX, minY], [x, y]) => [
      Math.max(maxX, x),
      Math.max(maxY, y),
      Math.min(minX, x),
      Math.min(minY, y),
    ],
    [
      Number.MIN_SAFE_INTEGER,
      Number.MIN_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER,
    ]
  );

  const graph = Array.from(Array(maxY - minY + 1), () =>
    Array(maxX - minX + 1).fill(".")
  );

  result.forEach(([x, y]) => {
    graph[maxY - y][x - minX] = "*";
  });

  return graph.map((x) => x.join(""));
}
