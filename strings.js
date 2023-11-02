export function countUppercaseLetters(str) {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
      count += 1;
    }
  }
  return count;
}

export function combineStrings(N1, N2, S1, S2) {
  const firstStringNum = S1.slice(0, N1);
  const secondStringNum = S2.slice(-N2);
  if (N1 === 0 && N2 === 0) {
    return '';
  }
  return firstStringNum + secondStringNum;
}

export function containsSubstring(S, S0) {
  const str = S.includes(S0);
  return str;
}

export function replaceSubstring(S, S1, S2) {
  return S.replace(S1, S2);
}

export function countWordsWithSameLetters(sentence) {
  const sentence1 = sentence.toLowerCase();
  const words = sentence1.split(' ');
  let count = 0;
  for (let i = 0; i < words.length; i += 1) {
    const firstLetter = words[i][0];
    const lastLetter = words[i][words[i].length - 1];
    if (firstLetter === lastLetter) {
      count += 1;
    }
  }
  return count;
}

export function countWordsWithA(sentence) {
  const word = sentence.toLowerCase().split(' ');
  let count = 0;
  for (let i = 0; i < word.length; i += 1) {
    if (word[i].includes('a') || word[i].includes('A')) {
      count += 1;
    }
  }
  return count;
}

export function normalizeSpaces(sentence) {
  const normalAround = sentence.trim();
  const normalAll = normalAround;
  return normalAll;
}
