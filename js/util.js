//модуль с вспомогательными функциями;
function getRandomNumb(min, max) {
  if(0 <= min || 0 <= max) {
    return Math.floor(min + Math.random() * (max - min));
  }
  return NaN;
} // https://learn.javascript.ru/number

const getRandomArrayElement = (element) => element[getRandomNumb(0, element.length)];

const isEscapeKey = (evt) => evt.key === 'Escape';

export { getRandomNumb, getRandomArrayElement, isEscapeKey };
