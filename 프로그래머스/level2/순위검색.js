function solution(info, query) {
  const answer = new Array(query.length).fill(0);

  for (let i in query) {
    const condition = query[i].split(" and").join("").split(" ");

    for (let sentence of info) {
      const word = sentence.split(" ");

      if (word[0] !== condition[0] && condition[0] !== "-") continue;
      if (word[1] !== condition[1] && condition[1] !== "-") continue;
      if (word[2] !== condition[2] && condition[2] !== "-") continue;
      if (word[3] !== condition[3] && condition[3] !== "-") continue;
      if (parseInt(word[4]) < parseInt(condition[4])) continue;

      answer[i] += 1;
    }
  }

  return answer;
}

solution(
  [
    "java backend junior pizza 150",
    "python frontend senior chicken 210",
    "python frontend senior chicken 150",
    "cpp backend senior pizza 260",
    "java backend junior chicken 80",
    "python backend senior chicken 50",
  ],
  [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150",
  ]
);

// 다른 사람 풀이
function solutions(info, query) {
  var answer = [];
  let map = {};

  function combination(infos, score, map, start) {
    let key = infos.join(""); //키 값으로 쓸거 합쳐주기
    let value = map[key]; //값 있는지 없는지 확인해주기

    if (value) {
      //값이 있으면 push
      map[key].push(score);
    } else {
      //값이 없으면 프로퍼티 만들어줘야 됨
      map[key] = [score];
    }

    //여기서는 - 를 이용해 조합 만들어주기
    for (let i = start; i < infos.length; i++) {
      let combiArr = [...infos]; //전개 연산자
      combiArr[i] = "-";
      combination(combiArr, score, map, i + 1);
    }
  }

  function binarySearch(map, key, score) {
    let scoreArr = map[key];

    if (scoreArr) {
      let start = 0;
      let end = scoreArr.length;
      while (start < end) {
        let mid = Math.floor((start + end) / 2);

        if (scoreArr[mid] >= score) {
          //현재 가르키는 값보다 내가 찾는 값이
          end = mid;
        } else if (scoreArr[mid] < score) {
          start = mid + 1;
        }
      }
      return scoreArr.length - start;
    } else return 0;
  }

  for (let i = 0; i < info.length; i++) {
    let infos = info[i].split(" ");
    let score = infos.pop();
    combination(infos, score, map, 0);
  }

  for (let key in map) {
    map[key].sort((o1, o2) => o1 - o2);
  }

  for (let i = 0; i < query.length; i++) {
    let querys = query[i].replace(/ and /g, "").split(" ");
    let score = Number(querys.pop());
    answer.push(binarySearch(map, querys.join(""), score));
  }
  return answer;
}
