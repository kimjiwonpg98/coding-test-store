function solution(sizes) {
  const big = [];
  const small = [];
  sizes.forEach((x) => {
    big.push(Math.max(...x));
    small.push(Math.min(...x));
  });

  return Math.max(...big) * Math.max(...small);
}

function solution(sizes) {
  let w = 0;
  let h = 0;
  sizes.forEach((s) => {
    const [a, b] = s.sort((a, b) => a - b);
    if (a > h) h = a;
    if (b > w) w = b;
  });

  return w * h;
}
