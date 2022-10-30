// модуль работы с формой
import { isEscapeKey } from './util.js';
import './effects.js';

const body = document.body;
const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('#upload-file');
const uploadCancel = uploadForm.querySelector('#upload-cancel');
const imgUploadLabel = uploadForm.querySelector('.img-upload__label');
const imgUploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const textDescription = uploadForm.querySelector('.text__description');
const uploadPreview = document.querySelector('.img-upload__preview img');
const scaleValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const effectSlider = document.querySelector('.effect-level__slider');

const onFormEscKeydown = (evt) => {
  if (textDescription === document.activeElement) {
    return evt; // если фокус находится в поле ввода комментария
  } else {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeForm();
    }
  }
};

const getClearForm = () => {
  // Удаляем данные загреженного файла
  uploadFile.value = '';
  // Размер картинки максимальный
  scaleValue.value = '100%';
  uploadPreview.style.transform = 'scale(1)';
  // Удаление стилей и скрытие слайдера на оригинальном фото
  imgUploadPreview.className = '';
  imgUploadPreview.style.filter = '';
  effectSlider.classList.add('hidden');
  // Удаление комментариев
  textDescription.innerHTML = '';
};

function openForm () {
  // когда загружаем файл
  uploadFile.addEventListener('change', () => {
    imgUploadOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
  });

  document.addEventListener('keydown', onFormEscKeydown);
}

function closeForm () {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  getClearForm();

  document.removeEventListener('keydown', onFormEscKeydown);
}

imgUploadLabel.addEventListener('click', () => {
  openForm();
});

uploadCancel.addEventListener('click', () => {
  closeForm();
});
