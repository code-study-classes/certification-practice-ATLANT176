export function countUppercaseLetters (str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
        count += 1;
      }
    }
    return count;
}
  