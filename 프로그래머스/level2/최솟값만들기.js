function solution(A, B) {
  let answer = 0;
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);

  for (let i in A) answer += A[i] * B[i];

  return answer;
}
