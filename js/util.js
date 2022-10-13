//модуль с вспомогательными функциями;
const MIN_STR = 20;
const MAX_STR = 140;

function getMaxSting(str) {
  return MIN_STR < str.length && str.length < MAX_STR;
}

function getRandomNumb(min, max) {
  if(0 <= min || 0 <= max) {
    return Math.floor(min + Math.random() * (max - min));
  }
  return NaN;
} // https://learn.javascript.ru/number

const getRandomArrayElement = (element) => element[getRandomNumb(0, element.length)];

export { getMaxSting, getRandomNumb, getRandomArrayElement };
