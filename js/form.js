// модуль работы с формой
import { isEscapeKey } from './util.js';

const body = document.body;
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const imgUploadLabel = document.querySelector('.img-upload__label');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');

const onFormEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
  }
};

const clearForm = () => {
  uploadFile.value = '';
};

function openForm () {
  // когда загружаем файл
  uploadFile.addEventListener('change', () => {
    imgUploadOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
  });

  clearForm();

  document.addEventListener('keydown', onFormEscKeydown);
}

function closeForm () {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
}

imgUploadLabel.addEventListener('click', () => {
  openForm();
});

uploadCancel.addEventListener('click', () => {
  closeForm();
  clearForm();
});

// дополнительное закрытие на любое место вне формы
// imgUploadForm.addEventListener('click', event => {
//   if (event.target == imgUploadOverlay && imgUploadOverlay.classList.contains('img-upload__label')) {
//     imgUploadOverlay.classList.add('hidden');
//   }
// });
