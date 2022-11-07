// модуль взаимодействия c удалённым сервером с помощью fetch;
import { closeForm, setUserFormSubmit } from './form.js';
import { showAlert } from './util.js';

const GET_DATA = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const SEND_DATA = 'https://27.javascript.pages.academy/kekstagram-simple';

const uploadForm = document.querySelector('.img-upload__form');

// Получение данных
const getData = (onSuccess) => {
  fetch(
    GET_DATA,
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
    SEND_DATA,
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
