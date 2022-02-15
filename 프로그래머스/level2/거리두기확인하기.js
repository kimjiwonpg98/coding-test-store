function solution(places) {
  const answer = [];

  const isRight = (x) => x >= 0 && x < 5;

  places.map((place) => {
    const isPerson = (i, j) => place[i][j] === "P";
    const isEmpty = (i, j) => place[i][j] === "O";
    let sit = false;
    for (let i = 0; i < place.length; i++) {
      for (let j = 0; j < 5; j++) {
        if (place[i][j] === "P") {
          if (isRight(i + 1)) {
            if (isPerson(i + 1, j)) sit = true;
            if (isEmpty(i + 1, j)) {
              if (isRight(j + 1) && isPerson(i + 1, j + 1)) sit = true;
              if (isRight(j - 1) && isPerson(i + 1, j - 1)) sit = true;
              if (isRight(i + 2) && isPerson(i + 2, j)) sit = true;
            }
          }
          if (isRight(i - 1)) {
            if (isPerson(i - 1, j)) sit = true;
            if (isEmpty(i - 1, j)) {
              if (isRight(j + 1) && isPerson(i - 1, j + 1)) sit = true;
              if (isRight(j - 1) && isPerson(i - 1, j - 1)) sit = true;
              if (isRight(i - 2) && isPerson(i - 2, j)) sit = true;
            }
          }
          if (isRight(j + 1)) {
            if (isPerson(i, j + 1)) sit = true;
            if (isEmpty(i, j + 1) && isRight(j + 2) && isPerson(i, j + 2))
              sit = true;
          }
          if (isRight(j - 1)) {
            if (isPerson(i, j - 1)) sit = true;
            if (isEmpty(i, j - 1) && isRight(j - 2) && isPerson(i, j - 2))
              sit = true;
          }
        }
      }
    }
    sit ? answer.push(0) : answer.push(1);
  });
  return answer;
}
