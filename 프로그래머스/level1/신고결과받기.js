function solution(idList, report, k) {
  const users = {};
  const target = {};
  const result = [];

  const mail = {};

  idList.forEach((user) => {
    mail[user] = 0;
  });

  const removeDuplicateReport = new Set(report);

  for (let x of [...removeDuplicateReport]) {
    const [user, targetUser] = x.split(" ");
    if (!users[targetUser]) users[targetUser] = [];

    users[targetUser].push(user);

    if (!target[targetUser]) target[targetUser] = 0;
    target[targetUser] += 1;
  }

  Object.keys(target).forEach((key) => {
    if (target[key] >= k) {
      result.push(key);
    }
  });

  result.forEach((user) => {
    users[user].forEach((mailer) => {
      mail[mailer] += 1;
    });
  });

  return Object.values(mail);
}
