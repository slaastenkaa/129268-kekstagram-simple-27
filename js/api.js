// модуль взаимодействия c удалённым сервером с помощью fetch;
import { closeForm, setUserFormSubmit } from './form.js';
import { showAlert } from './util.js';

const uploadForm = document.querySelector('.img-upload__form');

// Получение данных
const getData = (onSuccess) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple/data', //функция, а она вернёт промис
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => response.json())
    .then((date) => {
      onSuccess(date);
    })
    .catch(() => {
      showAlert('Не удалось получить данные с сервера. Попробуйте позже.');
    });
};

const sendData = (onSuccess, onFail) => {
  const formData = new FormData(uploadForm);

  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: formData,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onFail();
    }
  })
    .catch(() => {
      onFail();
    });
};

setUserFormSubmit(closeForm);

export { getData, sendData };
