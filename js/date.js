//модуль, который создаёт данные;
import { getRandomNumb, getRandomArrayElement } from './util.js';

const Id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

const Descriptions = [
  'zzzzz',
  'xxxxx',
  'ccccc',
  'vvvvv',
  'bbbbb',
];

const ARRAY_COUNT = 25;

const AddPhoto = () => ({
  id: getRandomArrayElement(Id),
  url: `photos/${getRandomArrayElement(Id)}.jpg`,
  description: getRandomArrayElement(Descriptions),
  likes: getRandomNumb(15, 200),
  comments: getRandomNumb(0, 200),
});

const getNewArray = () => Array.from({length: ARRAY_COUNT}, AddPhoto);
//сгенерировать случайные объекты и заполнить массив

export { getNewArray };
