function solution(record) {
  const result = [];
  const nickname = {};
  record.map((x) => {
    const sentence = x.split(" ");
    if (sentence[0] === "Enter") nickname[sentence[1]] = sentence[2];
    if (sentence[0] === "Change") nickname[sentence[1]] = sentence[2];
  });

  record.map((y) => {
    const sentence = y.split(" ");
    if (sentence[0] === "Enter")
      result.push(`${nickname[sentence[1]]}님이 들어왔습니다.`);
    if (sentence[0] === "Leave")
      result.push(`${nickname[sentence[1]]}님이 나갔습니다.`);
  });

  console.log(result);
}

solution([
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
]);
