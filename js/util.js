//модуль с вспомогательными функциями;

const templateErrorMessage = document.querySelector('#error').content.querySelector('.error');
const errorMessageTemplate = templateErrorMessage.cloneNode(true);
const errorMessageButton = errorMessageTemplate.querySelector('.error__button');

const templateSuccessMessage = document.querySelector('#success').content.querySelector('.success');
const successMessageTemplate = templateSuccessMessage.cloneNode(true);
const successMessageButton = successMessageTemplate.querySelector('.success__button');

function getRandomNumb(min, max) {
  if(0 <= min || 0 <= max) {
    return Math.floor(min + Math.random() * (max - min));
  }
  return NaN;
} // https://learn.javascript.ru/number

const getRandomArrayElement = (element) => element[getRandomNumb(0, element.length)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const showError = () => {
  document.body.append(errorMessageTemplate);
  closeErrorMessage();
};

const showSuccess = () => {
  document.body.append(successMessageTemplate);
  closeSuccessMessage();
};

const onErrorMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    document.body.removeChild(errorMessageTemplate);
  }
};

const onSuccessMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    document.body.removeChild(successMessageTemplate);
  }
};

const closeError = (e) => {
  const withinBoundaries = e.composedPath().includes(errorMessageTemplate);

  if (!withinBoundaries) {
    document.body.removeChild(errorMessageTemplate);
  }
};


function closeErrorMessage () {
  errorMessageButton.addEventListener('click', () => {
    document.body.removeChild(errorMessageTemplate);
  });
  document.addEventListener('keydown', onErrorMessageEscKeydown, { once: true });

  document.addEventListener('click', closeError);
}

function closeSuccessMessage () {
  successMessageButton.addEventListener('click', () => {
    document.body.removeChild(successMessageTemplate);
  });
  document.addEventListener('keydown', onSuccessMessageEscKeydown);
}

// ошибка получения данных при загрузке с сервера
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '15px 10px';
  alertContainer.style.fontSize = '25px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#ff4d4d';
  alertContainer.textContent = message;

  document.body.append(alertContainer);
};

export { getRandomNumb, getRandomArrayElement, isEscapeKey, showError, showSuccess, showAlert, errorMessageTemplate };
