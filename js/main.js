function getRandomNumb(min, max) {
  if(0 <= min || 0 <= max) {
    return Math.floor(Math.random() * (Math.floor(Math.min(min, max)) - Math.ceil(Math.min(min, max)) + 1) + Math.ceil(Math.min(min, max)));
  }
  return NaN;
} // https://learn.javascript.ru/number

const MIN_STR = 20;
const MAX_STR = 140;
function getMaxSting(str) {
  return MIN_STR < str.length && str.length < MAX_STR;
}

const ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

const DESCRIPTION = [
  'zzzzz',
  'xxxxx',
  'ccccc',
  'vvvvv',
  'bbbbb',
];

const ArrayCount = 25;

const getRandomArrayElement = (element) => element[getRandomNumb(0, element.length - 1)];

const addPhoto = () => ({
  id: getRandomArrayElement(ID),
  url: `photos/${addPhoto.id}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomNumb(15, 200),
  comments: getRandomNumb(0, 200),
});

const getNewArray = Array.from({length: ArrayCount}, addPhoto);
//сгенерировать случайные объекты и заполнить массив

getMaxSting();
getNewArray();
