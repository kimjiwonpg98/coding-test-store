function combination(arr, selectNumber) {
  const results = [];

  if (selectNumber === 1) {
    return arr.map((value) => [value]);
  }

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = combination(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);

    results.push(...attached);
  });

  return results;
}

function solution(orders, course) {
  const answer = [];

  for (let i = 0; i < course.length; i++) {
    const result = {};
    let max = 0;

    orders.forEach((el) => {
      combination(el.split(""), course[i]).forEach((e) => {
        const str = e.sort().join("");

        if (!isNaN(result[str])) {
          result[str] += 1;
          max = max < result[str] ? result[str] : max;
        } else {
          result[str] = 1;
        }
      });
    });

    if (max >= 2) {
      for (const [key, value] of Object.entries(result)) {
        if (value === max) {
          answer.push(key);
        }
      }
    }
  }
  return answer.sort();
}
