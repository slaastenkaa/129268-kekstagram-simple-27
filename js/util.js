//модуль с вспомогательными функциями;
const ALERT_SHOW_TIME = 10000;

const templateErrorMessageElement = document.querySelector('#error').content.querySelector('.error');
const errorMessageTemplateElement = templateErrorMessageElement.cloneNode(true);
const errorMessageInnerElement = errorMessageTemplateElement.querySelector('.error__inner');
const errorMessageButtonElement = errorMessageTemplateElement.querySelector('.error__button');

const templateSuccessMessageElement = document.querySelector('#success').content.querySelector('.success');
const successMessageTemplateElement = templateSuccessMessageElement.cloneNode(true);
const successMessageInnerElement = successMessageTemplateElement.querySelector('.success__inner');
const successMessageButtonElement = successMessageTemplateElement.querySelector('.success__button');

const isEscapeKey = (evt) => evt.key === 'Escape';

const showError = () => {
  document.body.append(errorMessageTemplateElement);
  closeErrorMessage();
};

const showSuccess = () => {
  document.body.append(successMessageTemplateElement);
  closeSuccessMessage();
};

const onErrorMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    document.body.removeChild(errorMessageTemplateElement);
  }
};

const onSuccessMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    document.body.removeChild(successMessageTemplateElement);
  }
};

const onErrorMessageClickClose = (evt) => {
  const onOutSideClick = evt.composedPath().includes(errorMessageInnerElement);
  if (!onOutSideClick) {
    document.body.removeChild(errorMessageTemplateElement);
  }
};

const onSuccessMessageClickClose = (evt) => {
  const onOutSideClick = evt.composedPath().includes(successMessageInnerElement);
  if (!onOutSideClick) {
    document.body.removeChild(successMessageTemplateElement);
  }
};

function closeErrorMessage () {
  errorMessageButtonElement.addEventListener('click', () => {
    document.body.removeChild(errorMessageTemplateElement);
  });
  document.addEventListener('keydown', onErrorMessageEscKeydown, { once: true });
  document.addEventListener('click', onErrorMessageClickClose);
}

function closeSuccessMessage () {
  successMessageButtonElement.addEventListener('click', () => {
    document.body.removeChild(successMessageTemplateElement);
  });
  document.addEventListener('keydown', onSuccessMessageEscKeydown);
  document.addEventListener('click', onSuccessMessageClickClose);
}

// ошибка получения данных при загрузке с сервера
const showAlert = (message) => {
  const alertContainerElement = document.createElement('div');
  alertContainerElement.style.zIndex = '100';
  alertContainerElement.style.position = 'absolute';
  alertContainerElement.style.left = '0';
  alertContainerElement.style.top = '0';
  alertContainerElement.style.right = '0';
  alertContainerElement.style.padding = '15px 10px';
  alertContainerElement.style.fontSize = '25px';
  alertContainerElement.style.textAlign = 'center';
  alertContainerElement.style.backgroundColor = '#ff4d4d';
  alertContainerElement.textContent = message;

  document.body.append(alertContainerElement);

  setTimeout(() => {
    alertContainerElement.remove();
  }, ALERT_SHOW_TIME);
};

export { isEscapeKey, showError, showSuccess, showAlert };
