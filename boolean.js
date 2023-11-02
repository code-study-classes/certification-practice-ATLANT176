export function isPositive(A) {
  return Boolean(A > 0);
}

export function isOdd(A) {
  return Boolean(A % 2);
}

export function checkInequality(A, B) {
  return Boolean(A > 2 && B <= 3);
}

export function checkInequality2(A, B) {
  return Boolean(A >= 0 || B < -2);
}

export function checkBetweenNumbers(A, B, C) {
  return Boolean(A < B < C && A !== B && C !== B);
}

export function checkOddThreeDigitNumber(number) {
  return Boolean(number % 2 && number > 99 && number < 1000);
}

export function checkUniqueDigits(number) {
  const massive = number.toString().split('');
  return Boolean(massive[0] !== massive[1] && massive[1] !== massive[2]);
}

export function isSecondQuadrant(x, y) {
  const II = x < 0 && y > 0;
  return Boolean(II);
}

export function isIsoscelesTriangle(a, b, c) {
  return Boolean(a === b || a === c || b === c || c === b) && Boolean(a > 0 || b > 0 || c > 0);
}

export function areSameColorFields(x1, y1, x2, y2) {
  const colorWhite = (x1 % 1 === 1, 3, 5, 7 && y1 % 1 === 1, 3, 5, 7);
  const colorBlack = (x2 % 2 === 2, 4, 6, 8 && y2 % 2 === 2, 4, 6, 8);
  return Boolean(colorWhite && colorBlack);
}
