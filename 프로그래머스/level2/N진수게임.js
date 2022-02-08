function solution(n, t, m, p) {
  let answer = "";
  let candidate = "";

  for (let i = 0; i < t * m; i++) {
    candidate += i.toString(n).toUpperCase();
  }

  for (let j = p - 1; j < t * m; j += m) {
    answer += candidate[j];
  }
  return answer;
}
