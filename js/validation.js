// модуль для валидации текста;
import { getMaxSting } from './util.js';

const uploadText = document.querySelector('.img-upload__text');

const pristine = new Pristine(uploadText, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text'
});

pristine.addValidator(uploadText.querySelector('.text__description'), getMaxSting, 'Длина комментария от 20 до 140 символов');

uploadText.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

//img-upload__submit:disabled -для кнопки
