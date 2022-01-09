function solution(people, limit) {
  let boat = 0;
  let [big, small] = [0, people.length - 1];

  people.sort((a, b) => b - a);

  while (big < small) {
    let sum = people[big] + people[small];

    if (limit < sum) {
      big++;
      boat++;
      continue;
    }
    big++;
    small--;
    boat++;
  }
  if (big === small) boat++;
  return boat;
}
