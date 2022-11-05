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

const onMessageEscKeydown = (evt) => {
  if (showError === true) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
    // closeForm();
    }
  }
};

function closeErrorMessage () {
  errorMessageButton.addEventListener('click', () => {
    document.body.removeChild(errorMessageTemplate);
  });
  document.addEventListener('keydown', onMessageEscKeydown);
}

function closeSuccessMessage () {
  successMessageButton.addEventListener('click', () => {
    document.body.removeChild(successMessageTemplate);
  });
  document.addEventListener('keydown', onMessageEscKeydown);
}


export { getRandomNumb, getRandomArrayElement, isEscapeKey, showError, showSuccess };
