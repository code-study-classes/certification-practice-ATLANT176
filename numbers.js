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
