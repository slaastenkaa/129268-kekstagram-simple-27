// модуль работы с формой
import { isEscapeKey } from './util.js';
import { resetTextDescription } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { pristine } from './validation.js';
import { showError, showSuccess } from './util.js';
import { sendData } from './api.js';

const body = document.body;
const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('#upload-file');
const uploadCancel = uploadForm.querySelector('#upload-cancel');
const uploadSubmit = uploadForm.querySelector('.img-upload__submit');
const imgUploadLabel = uploadForm.querySelector('.img-upload__label');
const imgUploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const textDescription = uploadForm.querySelector('.text__description');

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
  uploadFile.value = ''; // Удаляем данные загруженного файла
  resetScale();
  resetEffects();
  resetTextDescription();
};

const blockButtonSubmit = () => {
  uploadSubmit.disabled = true;
  uploadSubmit.textContent = 'Отправляю...';
};

const unblockButtonSubmit = () => {
  uploadSubmit.disabled = false;
  uploadSubmit.textContent = 'Отправить';
};

function openForm () {
  // когда загружаем файл
  uploadFile.addEventListener('change', () => {
    imgUploadOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
    resetScale();
  });

  document.addEventListener('keydown', onFormEscKeydown);
}

function closeForm () {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  getClearForm();

  document.removeEventListener('keydown', onFormEscKeydown);
}

imgUploadLabel.addEventListener('click', openForm);
uploadCancel.addEventListener('click', closeForm);

// отправка данных
const setUserFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockButtonSubmit();
      sendData(
        () => {
          onSuccess();
          showSuccess('Успешно');
          unblockButtonSubmit();
        },
        () => {
          showError('Не удалось отправить форму. Попробуйте ещё раз');
          unblockButtonSubmit();
        },
        new FormData(evt.target),
      );
    }
  });
};

export { openForm, closeForm, setUserFormSubmit };
