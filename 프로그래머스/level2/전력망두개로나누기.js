// 풀던거..
function checkLine(tree, connectLines, idx, count, check) {
  let copyTree = tree.slice();
  for (let line of connectLines) {
    let goToLine = copyTree[idx].splice(copyTree[idx].indexOf(line), 1);
    if (copyTree[goToLine[0]].length) {
      if (check === line) {
        copyTree[goToLine[0]].splice(copyTree[goToLine[0]].indexOf(idx), 1);
        count = checkLine(
          copyTree,
          copyTree[goToLine[0]],
          goToLine[0],
          count,
          line
        );
      }
      count = checkLine(
        copyTree,
        copyTree[goToLine[0]],
        goToLine[0],
        count,
        line
      );
    }
    count = [].concat(copyTree).filter((x) => !x.length).length - 1;
    if (!copyTree[goToLine[0]].length) return count;
  }
  return count;
}

function solution(n, wires) {
  const tree = Array.from(Array(n + 1), () => []);
  const result = [];
  let maxConnect = [];
  let maxLength = 0;

  wires.map(([x, y]) => {
    tree[x].push(y);
    tree[y].push(x);
  });

  tree.reduce((acc, cur, idx) => {
    if (maxLength < cur.length) {
      maxConnect = [[cur, idx]];
      maxLength = cur.length;
    } else if (maxLength === cur.length && acc.length) {
      maxConnect.push([cur, idx]);
    }
    return cur;
  }, tree[0]);

  for (let line of maxConnect) {
    let [connectLine, idx] = line;

    for (let s of connectLine) {
      let check = checkLine(tree, [s], idx, 0, 0);
      console.log(check);
      result.push(Math.abs(check - (n - check)));
    }
  }

  return Math.min.apply(null, result);
}

// 남에꺼..
function solution(n, wires) {
  const links = {};
  wires.map((w) => {
    const [a, b] = w;
    if (!links[a]) links[a] = [];
    if (!links[b]) links[b] = [];
    links[a].push(b);
    links[b].push(a);
  });

  const searchTree = (root, exception) => {
    let count = 0;
    const queue = [root];
    const visited = [];
    visited[root] = true;
    while (queue.length) {
      const cur = queue.pop();
      links[cur].map((next) => {
        if (next !== exception && !visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      });
      count++;
    }
    return count;
  };

  let answer = 100;
  wires.map((w, i) => {
    const [a, b] = w;
    const dif = Math.abs(searchTree(a, b) - searchTree(b, a));
    answer = answer > dif ? dif : answer;
  });
  return answer;
}
