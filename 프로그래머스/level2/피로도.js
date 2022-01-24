function solution(k, dungeons) {
  const visited = new Array(dungeons.length).fill(0);
  let total = 0;

  const raide = (k, count) => {
    total = Math.max(count, total);

    for (let i = 0; i < dungeons.length; i++) {
      if (k > dungeons[i][0] - 1 && !visited[i]) {
        visited[i] = 1;

        raide(k - dungeons[i][1], count + 1);
        visited[i] = 0;
      }
    }
  };
  raide(k, 0);
  return total;
}
