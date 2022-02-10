function solution(m, musicinfos) {
  m = m
    .replace(/(C#)/g, "c")
    .replace(/(D#)/g, "d")
    .replace(/(F#)/g, "f")
    .replace(/(G#)/g, "g")
    .replace(/(A#)/g, "a");
  const result = {};
  let timeout = 0;
  let text = "";
  for (let music of musicinfos) {
    text = "";
    let time = 0;
    let [firstTime, sectime, title, context] = music.split(",");
    let [firstHour, firstMin] = firstTime.split(":");
    let [secHour, secMin] = sectime.split(":");
    timeout = (secHour - firstHour) * 60 + (secMin - firstMin);
    context = context
      .replace(/(C#)/g, "c")
      .replace(/(D#)/g, "d")
      .replace(/(F#)/g, "f")
      .replace(/(G#)/g, "g")
      .replace(/(A#)/g, "a");
    let words = context.split("");
    while (timeout >= time) {
      for (let idx in words) {
        if (time > timeout) break;
        text += words[idx];
        time++;

        if (m.length <= text.length) {
          let textIdx = text.lastIndexOf(m);
          if (textIdx !== -1) result[title] = timeout;
        }
      }
    }
  }
  const longtime = Math.max.apply(null, Object.values(result));

  if (!Object.keys(result).length) return "(None)";
  return Object.keys(result).find((key) => result[key] === longtime);
}
console.log(solution("abcdef", ["03:00,03:05,FOO,abcdef"]));

// function solution(m, musicinfos) {
//   const result = {};
//   let timeout = 0;
//   let text = "";
//   for (let music of musicinfos) {
//     text = "";
//     let time = 0;
//     let [firstTime, sectime, title, context] = music.split(",");
//     let [firstHour, firstMin] = firstTime.split(":");
//     let [secHour, secMin] = sectime.split(":");
//     timeout = (secHour - firstHour) * 60 + (secMin - firstMin);

//     let words = context.split("");
//     while (timeout >= time) {
//       for (let idx in words) {
//         if (words[Number(idx) + 1] === "#") {
//           text += words[idx];
//           continue;
//         }

//         text += words[idx];
//         ++time;

//         if (m.length <= text.length) {
//           let textIdx = text.lastIndexOf(m);
//           if (textIdx !== -1 && text[textIdx + m.length] !== "#")
//             result[title] = timeout;
//         }
//       }
//     }
//   }
//   const longtime = Math.max.apply(null, Object.values(result));

//   if (!Object.keys(result).length) return "(None)";
//   return Object.keys(result).find((key) => result[key] === longtime);
// }
