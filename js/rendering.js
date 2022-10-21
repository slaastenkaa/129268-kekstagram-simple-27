//модуль отрисовки миниатюр;
import { getNewArray } from './date.js';

const pictures = document.querySelector('.pictures');

const templatePicture = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const newFragment = document.createDocumentFragment();

const renderPhoto = getNewArray();

renderPhoto.forEach(({url, comments, likes}) => {
  const photoElement = templatePicture.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').textContent = comments;
  photoElement.querySelector('.picture__likes').textContent = likes;
  newFragment.appendChild(photoElement);
});

pictures.appendChild(newFragment);
