function combination(numbers, selectNum) {
  const results = [];
  if (selectNum === 1) return numbers.map((el) => [el]);

  numbers.forEach((fixed, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    const combinations = combination(rest, selectNum - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
}

function findPrime(num) {
  if (num < 2) return false;
  for (var i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(numbers) {
  const result = [];
  let answer = 0;
  let num = numbers.split("").map((x) => Number(x));

  for (let i = 1; i <= num.length; i++) {
    result.push(...combination(num, i));
  }

  let set = [...new Set(result.flatMap((el) => Number(el.join(""))))];

  for (let el of set) {
    if (findPrime(el)) answer++;
  }

  return answer;
}
