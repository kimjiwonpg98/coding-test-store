function solution(n, left, right) {
  const arr = [];

  while (left <= right) {
    arr.push(Math.max(parseInt(left / n), left % n) + 1);
    left++;
  }

  console.log(arr);
}

solution(3, 2, 5);
