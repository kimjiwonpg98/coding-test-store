function solution(cacheSize, cities) {
  const cache = [];
  let time = 0;

  if (!cacheSize) return cities.length * 5;

  for (let city of cities) {
    let upperCity = city.toUpperCase();
    if (cache.includes(upperCity)) {
      time += 1;
      cache.splice(cache.indexOf(upperCity), 1);
      cache.push(upperCity);
      continue;
    }

    if (cache.length === cacheSize) {
      cache.shift();
      cache.push(upperCity);
      time += 5;
      continue;
    }

    cache.push(upperCity);
    time += 5;
  }
  return time;
}
