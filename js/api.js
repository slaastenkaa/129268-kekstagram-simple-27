// модуль взаимодействия c удалённым сервером с помощью fetch;
import { closeForm, setUserFormSubmit } from './form.js';
import { showAlert } from './util.js';

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

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body, //: 'formData',
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onFail('Не удалось отправить форму. Попробуйте ещё раз.');
    }
  })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз.');
    });
};

setUserFormSubmit(closeForm);

export { getData, sendData };
