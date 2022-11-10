// модуль работы с формой
import { isEscapeKey, showError, showSuccess } from './util.js';
import { resetTextDescription } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { pristine } from './validation.js';
import { sendData } from './api.js';

const bodyElement = document.body;
const uploadFormElement = document.querySelector('.img-upload__form');
const uploadFileElement = uploadFormElement.querySelector('#upload-file');
const uploadCancelElement = uploadFormElement.querySelector('#upload-cancel');
const uploadSubmitElement = uploadFormElement.querySelector('.img-upload__submit');
const imgUploadLabelElement = uploadFormElement.querySelector('.img-upload__label');
const imgUploadOverlayElement = uploadFormElement.querySelector('.img-upload__overlay');
const textDescriptionElement = uploadFormElement.querySelector('.text__description');

const onFormEscKeydown = (evt) => {
  if (textDescriptionElement === document.activeElement) {
    evt.stopPropagation(); // если фокус находится в поле ввода комментария или return evt
  }
  // else if (showError) { return evt; }
  else {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeForm();
    }
  }
};

// Убираем все введенные данные
const getClearForm = () => {
  uploadFileElement.value = ''; // Удаляем данные загруженного файла
  resetScale();
  resetEffects();
  resetTextDescription();
};

//Блокировка и разблокировка кнопки формы, на время ожидания ответа сервера
const blockButtonSubmit = () => {
  uploadSubmitElement.disabled = true;
  uploadSubmitElement.textContent = 'Отправляю...';
};

const unblockButtonSubmit = () => {
  uploadSubmitElement.disabled = false;
  uploadSubmitElement.textContent = 'Отправить';
};

function openForm () {
  // Для загрузки файла
  uploadFileElement.addEventListener('change', () => {
    imgUploadOverlayElement.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
    resetScale();
  });

  document.addEventListener('keydown', onFormEscKeydown);
}

function closeForm () {
  imgUploadOverlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  getClearForm();
  uploadFormElement.reset(); // Убираем все введенные данные дополнительно

  document.removeEventListener('keydown', onFormEscKeydown);
}

imgUploadLabelElement.addEventListener('click', openForm);
uploadCancelElement.addEventListener('click', closeForm);

// отправка данных
const setUserFormSubmit = (onSuccess) => {
  uploadFormElement.addEventListener('submit', (evt) => {
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
