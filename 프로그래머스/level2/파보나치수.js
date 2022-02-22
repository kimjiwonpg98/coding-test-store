function solution(n) {
  let num = 0;
  const answer = [0, 1];

  while (n >= num) {
    let leng = answer.length;
    answer.push((answer[leng - 1] + answer[leng - 2]) % 1234567);
    num++;
  }

  return answer[n];
}
