export function countUppercaseLetters (str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
        count += 1;
      }
    }
    return count;
}

export function combineStrings (N1, N2, S1, S2) {
  const firstStringNum = S1.slice(0, N1);
  const secondStringNum = S2.slice(-N2);
  if (N1 === 0 && N2 === 0) {
    return '';
  }
  return firstStringNum + secondStringNum;
}

export function containsSubstring (S, S0) {
  const str = S.includes(S0);
  return str;
}

export function replaceSubstring (S, S1, S2) {
  return S.replace(S1, S2);
}