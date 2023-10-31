import { file } from '@babel/types';

export function calculateDistance(x1, x2) {
  return Math.abs(x1 - x2);
}

export function calculateSegmentProduct(a, b, c) {
  const ac = Math.abs(a - c);
  const bc = Math.abs(b - c);
  const result = ac * bc;
  return result;
}

export function calculateKilobytes(fileSizeInBytes) {
  return Math.floor(fileSizeInBytes / 1024);
}

export function calculateSegments(lengthA, lengthB) {
  return Math.floor(lengthA / lengthB);
}

export function calculateDigitSum(twoDigitNumbers) {
  const twoDigitNumberStr = twoDigitNumbers.toString();
  const resultNumber = parseInt(twoDigitNumberStr.charAt(0)) + parseInt(twoDigitNumberStr.charAt(1));
  return resultNumber;
}

export function swapHundredsAndTens(twoDigitNumbers) {
  const twoDigitNumberStr = twoDigitNumbers.toString();
  const hundreds = twoDigitNumberStr.charAt(0);
  const tens = twoDigitNumberStr.charAt(1);
  const numbers = twoDigitNumberStr.charAt(2);
  return parseInt(`${tens}${hundreds}${numbers}`);
}

export function getHundredsDigit(number) {
  const b = Math.floor(number / 100);
  const result = Math.floor(b % 10);
  return result;
}

export function getFullHours(seconds) {
  const minutes = seconds / 60;
  const hours = (minutes / 60);
  return Math.floor(hours);
}

export function getDayOfWeek(dayOfYear) {
  switch (dayOfYear % 7) {
    case 1:
      return 1;
      break;
    case 2:
      return 2;
      break;
    case 3:
      return 3;
      break;
    case 4:
      return 4;
      break;
    case 5:
      return 5;
      break;
    case 6:
      return 6;
      break;
    case 0:
      return 0;
      break;
  }
}

export function countSquares(A, B, C) {
  return Math.floor(A / C) * Math.floor(B / C);
}
