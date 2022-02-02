function splitStr(str) {
  let [left, right] = [0, 0];
  let check = true;
  let u = "";
  let v = "";

  for (let i = 0; i < str.length; i++) {
    if (check) {
      str[i] === "(" ? ++left : ++right;
      u += str[i];
    } else {
      v = str.slice(i, str.length);
      break;
    }
    if (left === right) {
      check = false;
    }
  }
  return [u, v];
}

function isRight(str) {
  let original = str;
  if (!str.length) return true;
  for (let i = 1; i <= original.length / 2; i++) {
    str = str.replace(/\(\)/g, "");
    if (!str) {
      return true;
    }
  }
  return false;
}

function changeStr(u) {
  let newU = "";
  u = u.slice(1, -1);
  for (let i = 0; i < u.length; i++) {
    let changeU = "";
    u[i] === "(" ? (changeU = ")") : (changeU = "(");
    newU += changeU;
  }

  return newU;
}

function solution(p) {
  let answer = "";
  let [u, v] = splitStr(p);

  if (isRight(u)) {
    answer += u;
  } else {
    if (isRight(v)) {
      answer += `(${v})`;
      answer += changeStr(u);
      v = "";
    }
  }

  if (v.length) answer += solution(v);
  return answer;
}
// 2번째 풀이
function solution(p) {
  let answer = "";
  let left = 0;
  let right = 0;
  let check = true;

  if (p.length == 0) return "";

  for (let i = 0; i < p.length; i++) {
    p[i] === "(" ? left++ : right++;

    if (right > left) check = false;

    if (left === right) {
      if (!check) {
        answer += "(";
        answer += solution(p.slice(i + 1, p.length));
        answer += ")";

        for (let j = 1; j < i; j++) {
          p[j] === "(" ? (answer += ")") : (answer += "(");
        }
        return answer;
      } else {
        answer += p.slice(0, i + 1);
        answer += solution(p.slice(i + 1, p.length));
        return answer;
      }
    }
  }
}
